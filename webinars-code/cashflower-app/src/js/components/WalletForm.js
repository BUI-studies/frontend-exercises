import API from '../API.js'
import MainPage from '../pages/MainPage.js'
import WalletsPage from '../pages/WalletsPage.js'
import { cleanPage, Storage } from '../utils.js'

export default {
  elements: {
    self: document.createElement('div'),
    title: document.createElement('h2'),
    form: document.createElement('form'),
    name: document.createElement('input'),
    submitBtn: document.createElement('button')
  },

  render(parent) {
    this.elements.parent = parent
    const { self, title, form, name, ballance, submitBtn } = this.elements

    self.classList.add(
      'half-screen',
      'half-screen--right',
      'half-screen--vert-centered'
    )
    title.classList.add('title')
    form.classList.add('fields')
    name.classList.add('field')
    submitBtn.classList.add('submit-btn')

    name.setAttribute('id', 'walletName')
    name.setAttribute('placeholder', 'Імʼя гаманця')

    submitBtn.setAttribute('id', 'saveWalletBtn')
    submitBtn.textContent = 'Зберегти'
    submitBtn.addEventListener('click', e => this.handleSaveWallet(e))

    form.append(name, submitBtn)
    self.append(title, form)

    parent.append(self)
  },

  async handleSaveWallet(e) {
    e.preventDefault()

    const { name } = this.elements
    const savedWallet = await API.saveWallet({
      name: name.value,
      owner: Storage.getItem('user').id
    })

    if (!!savedWallet) {
      cleanPage()

      MainPage.render()
      WalletsPage.render()
    }
  }
}
