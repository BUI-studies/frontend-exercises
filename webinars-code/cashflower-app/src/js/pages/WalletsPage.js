import API from '../API.js'
import {cleanPage, Storage} from '../utils.js'
import Wallet from '../entities/Wallet.js'
import NavigationTabs from '../components/NavigationTabs.js'
import MainPage from "./MainPage.js";

export const _WALLETS = []

export default {
  elements: {
    walletsWrapper: document.createElement('div')
  },

  async render(parent = document.querySelector('.screen .container')) {
    const {walletsWrapper} = this.elements
    const {id} = Storage.getItem('user')
    const wallets = await API.getWallets(id)

    if (!wallets) throw new Error('No wallets found')

    NavigationTabs.render(parent)

    if (walletsWrapper.children.length > 0) {
      walletsWrapper.innerHTML = ''
    }

    walletsWrapper.classList.add('wallets')

    wallets.forEach(wallet => {
      const newWallet = new Wallet(wallet)

      _WALLETS.push(newWallet)

      newWallet.render(walletsWrapper)
    })

    walletsWrapper.onclick = e => this.handleRemoveWallet(e)

    parent.append(walletsWrapper)
  },

  async handleRemoveWallet(e) {
    if (e.target.classList.contains('wallet__remove-btn')) {
      const walletId = e.target.closest('.wallet').dataset.id
      const removeIndex = _WALLETS.findIndex(w => w.id = walletId)

      await API.removeWallet(walletId)

      _WALLETS.splice(removeIndex, 1)
      cleanPage()

      MainPage.render()
      this.render()
    }
  }
}
