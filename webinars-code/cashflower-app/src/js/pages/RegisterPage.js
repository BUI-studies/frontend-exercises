import WalletsPage from './WalletsPage.js'
import { cleanPage, Storage } from '../utils.js'
import API from '../API.js'
import MainPage from './MainPage.js'
import LogInPage from './LogInPage.js'

export default {
  elements: {
    self: document.createElement('div'),
    title: document.createElement('h2'),
    form: document.createElement('form'),
    name: document.createElement('input'),
    password: document.createElement('input'),
    passwordConfirmation: document.createElement('input'),
    submitBtn: document.createElement('button')
  },

  render(parent = document.querySelector('.screen .container')) {
    this.elements.parent = parent
    const {
      self,
      title,
      form,
      name,
      password,
      passwordConfirmation,
      submitBtn
    } = this.elements

    self.classList.add(
      'half-screen',
      'half-screen--right',
      'half-screen--vert-centered'
    )

    title.textContent = 'Register'

    title.classList.add('title')
    form.classList.add('fields')
    name.classList.add('field')
    password.classList.add('field')
    passwordConfirmation.classList.add('field')
    submitBtn.classList.add('submit-btn')

    name.setAttribute('id', 'userName')
    name.setAttribute('placeholder', 'Ваш логін')

    password.setAttribute('id', 'userPassword')
    password.setAttribute('type', 'password')
    password.setAttribute('placeholder', 'Пароль')
    passwordConfirmation.setAttribute('id', 'userPassword')
    passwordConfirmation.setAttribute('type', 'password')
    passwordConfirmation.setAttribute('placeholder', ' Повторіть пароль')

    submitBtn.setAttribute('id', 'loginBtn')
    submitBtn.textContent = 'Увійти'
    submitBtn.disabled = true

    submitBtn.addEventListener('click', e => this.handleRegister(e))
    form.addEventListener('keyup', e => this.handleFormChange(e))

    form.append(name, password, passwordConfirmation, submitBtn)
    self.append(title, form)

    parent.append(self)
  },

  async handleRegister(e) {
    e.preventDefault()
    const { title, name, password, passwordConfirmation } = this.elements

    if (password.value !== passwordConfirmation.value) {
      title.textContent = 'Паролі не співпадають'
      title.style.color = 'red'
    } else {
      title.textContent = 'Увійти'
      title.style.color = null

      const savedUser = await API.saveUser({
        name: name.value,
        password: password.value
      })

      if (!!savedUser) {
        cleanPage()

        MainPage.render()
        LogInPage.render()
      }
    }
  },

  handleFormChange(e) {
    const { title, name, password, passwordConfirmation, submitBtn } =
      this.elements

    submitBtn.disabled = !(
      name.value.length > 0 &&
      password.value.length > 0 &&
      passwordConfirmation.value.length > 0
    )

    // if (
    //   title.value &&
    //   name.value &&
    //   password.value &&
    //   passwordConfirmation.value
    // ) {
    //   submitBtn.disabled = true
    // }
  }
}
