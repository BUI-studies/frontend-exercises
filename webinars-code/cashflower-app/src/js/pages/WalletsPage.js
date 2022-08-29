import API from '../API.js'
import { Storage } from '../utils.js'
import Wallet from '../entities/Wallet.js'
import NavigationTabs from '../components/NavigationTabs.js'

export const _WALLETS = []

export default {
  async render(parent = document.querySelector('.screen .container')) {
    const walletsWrapper = document.createElement('div')
    const { id } = Storage.getItem('user')
    const wallets = await API.getWallets(id)

    NavigationTabs.render(parent)

    walletsWrapper.classList.add('wallets')

    wallets.forEach(wallet => {
      const newWallet = new Wallet(wallet)

      _WALLETS.push(newWallet)

      newWallet.render(walletsWrapper)
    })

    parent.append(walletsWrapper)
  }
}
