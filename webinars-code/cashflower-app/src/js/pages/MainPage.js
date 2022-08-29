import { Storage, cleanPage } from '../utils.js'
import LogInPage from './LogInPage.js'
import RegisterPage from './RegisterPage.js'

export default {
  elements: {
    container: document.createElement('div'),
    link: document.createElement('a'),
    registerLink: document.createElement('a')
  },

  html: {
    screenBG: `
    <picture class="screen__bg">
      <img src="./build/img/cash_flower.png" alt="cash and flower" />
    </picture>
    `,
    navPannel: `
    <div class="container screen__content">
      <nav class="navigation">
        <h1 class="company-logo">CASHFLOWER</h1>
      </nav>
    </div>
    `
  },

  async render(parent = document.body) {
    this.elements.parent = parent
    const { container, link, registerLink } = this.elements
    const { screenBG, navPannel } = this.html

    link.classList.add('navigation__link')
    link.textContent = this.getLinkText()
    link.href = this.getLinkHref()

    registerLink.classList.add('navigation__link')
    registerLink.textContent = 'Register'
    registerLink.href = '/register'

    registerLink.addEventListener('click', e => this.handleRedirect(e))
    link.addEventListener('click', e => this.handleLinkClick(e))

    container.classList.add('screen')

    if (!Storage.getItem('user')) {
      container.insertAdjacentHTML('afterbegin', screenBG)
    }
    container.insertAdjacentHTML('beforeend', navPannel)
    container.querySelector('.navigation').append(registerLink, link)

    parent.prepend(container)
  },

  getLinkText() {
    return Storage.getItem('user') ? 'Log out' : 'Log in'
  },

  getLinkHref() {
    return Storage.getItem('user') ? '/log-out' : 'log-in'
  },

  handleLinkClick(e) {
    e.preventDefault()
    const { link } = this.elements

    switch (link.textContent) {
      case 'Log out':
        Storage.removeItem('user')
        cleanPage()
        this.render()
        LogInPage.render()
    }
  },

  async handleRedirect(e) {
    e.preventDefault()
    cleanPage()

    await this.render()
    await RegisterPage.render()
  }
}
