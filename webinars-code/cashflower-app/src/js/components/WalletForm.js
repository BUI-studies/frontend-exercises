import API from '../API.js'
import MainPage from '../pages/MainPage.js'
import WalletsPage from '../pages/WalletsPage.js'
import {cleanPage, Storage} from '../utils.js'

export default {
  elements: {
    self: document.createElement('div'),
    title: document.createElement('h2'),
    form: document.createElement('form'),
    name: document.createElement('input'),
    balance: document.createElement('input'),
    submitBtn: document.createElement('button')
  },

  render(parent) {
    this.elements.parent = parent
    const {self, title, form, name, balance, submitBtn} = this.elements

    self.classList.add(
      'wallet-form',
    )
    title.classList.add('title')
    form.classList.add('fields')
    name.classList.add('field')
    balance.classList.add('field')
    submitBtn.classList.add('submit-btn')

    name.required = true
    name.setAttribute('id', 'walletName')
    name.setAttribute('placeholder', 'Імʼя гаманця')
    name.onkeyup = e => this.handleNameInput(e)

    balance.type = 'number'
    balance.setAttribute('id', 'walletBalance')
    balance.setAttribute('placeholder', 'Початковий баланс')

    submitBtn.setAttribute('id', 'saveWalletBtn')
    submitBtn.textContent = 'Зберегти'
    submitBtn.onclick = e => this.handleSaveWallet(e)

    form.append(name, balance, submitBtn)
    self.append(title, form)

    parent.append(self)
  },

  async handleSaveWallet(e) {
    e.preventDefault()

    const {name, title, balance, form, submitBtn} = this.elements
    submitBtn.disabled = true

    if (!name.value) {
      title.textContent = 'Введіть назву гаманця'
      title.style.color = 'red'
      return
    } else {
      title.textContent = name.value
      title.style.color = null
    }

    const savedWallet = await API.saveWallet({
      name: name.value,
      owner: Storage.getItem('user').id,
      balance: balance.value || 0
    })

    if (!!savedWallet) {
      title.textContent = ''
      form.reset()
      name.onkeyup = null
      submitBtn.onclick = null
      submitBtn.disabled = false
      cleanPage()

      MainPage.render()
      WalletsPage.render()
    }
  },
  handleNameInput(e) {
    const {title} = this.elements
    title.style.color = null
    title.textContent = e.target.value
  }
}
