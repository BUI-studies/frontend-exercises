import WalletsPage from './WalletsPage.js'
import { cleanPage, Storage } from '../utils.js'
import API from '../API.js'
import MainPage from './MainPage.js'
import NavigationTabs from '../components/NavigationTabs.js'

export default {
  elements: {
    self: document.createElement('div'),
    title: document.createElement('h2'),
    form: document.createElement('form'),
    login: document.createElement('input'),
    password: document.createElement('input'),
    submitBtn: document.createElement('button')
  },

  render(parent = document.querySelector('.screen .container')) {
    this.elements.parent = parent
    const { self, title, form, login, password, submitBtn } = this.elements

    self.classList.add(
      'half-screen',
      'half-screen--right',
      'half-screen--vert-centered'
    )
    title.classList.add('title')
    form.classList.add('fields')
    login.classList.add('field')
    password.classList.add('field')
    submitBtn.classList.add('submit-btn')

    login.setAttribute('id', 'userName')
    login.setAttribute('placeholder', 'Ваш логін')

    password.setAttribute('id', 'userPassword')
    password.setAttribute('type', 'password')
    password.setAttribute('placeholder', 'Пароль')

    submitBtn.setAttribute('id', 'loginBtn')
    submitBtn.textContent = 'Увійти'
    submitBtn.addEventListener('click', e => this.handleLogin(e))

    form.append(login, password, submitBtn)
    self.append(title, form)

    parent.append(self)
  },

  async handleLogin(e) {
    e.preventDefault()

    const nameElem = document.getElementById('userName')
    const passwordElem = document.getElementById('userPassword')

    const user = await API.getUser(nameElem.value, passwordElem.value)

    if (user.length > 0) {
      Storage.setItem('user', user[0])
      cleanPage()

      await MainPage.render()
      await WalletsPage.render()
    } else {
      e.target.parentElement.reset()
      throw new Error('No such user')
    }
  }
}
