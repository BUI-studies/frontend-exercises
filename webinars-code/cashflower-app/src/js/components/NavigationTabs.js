import { plusIcon } from '../icons.js'
import { cleanPage, _PAGES } from '../utils.js'

import TransactionsPage from '../pages/TransactionsPage.js'
import TransactionsForm from './TransactionsForm.js'

import WalletForm from './WalletForm.js'
import WalletsPage from '../pages/WalletsPage.js'

import MainPage from '../pages/MainPage.js'
import CategoriesPage from '../pages/CategoriesPage.js'
import CategoryForm from './CategoryForm.js'

export default {
  elements: {
    parent: null,
    self: document.createElement('div'),
    plusBtn: document.createElement('button'),
    modal: document.createElement('div'),
    modalContentWrapper: document.createElement('div')
  },

  render(parent) {
    const { self, plusBtn } = this.elements
    this.parent = parent

    if (self.children.length === 0) {
      self.classList.add('navigation-tabs')

      plusBtn.innerHTML = plusIcon
      plusBtn.classList.add('navigation-tabs__add-btn')
      plusBtn.onclick = e => this.handleAddEntity(e, _PAGES.wallets)

      self.insertAdjacentHTML(
        'afterbegin',
        `
        <p class="navigation-tabs__item navigation-tabs__item--current" data-tab="${_PAGES.wallets}">Гаманці</p>
        `
      )

      self.append(plusBtn)
      self.insertAdjacentHTML(
        'beforeend',
        `
        <p class="navigation-tabs__item" data-tab="${_PAGES.transactions}">Транзакції</p>
        <p class="navigation-tabs__item" data-tab="${_PAGES.categories}">Категорії</p>
      `
      )

      self.onclick = e => this.handleChangeTab(e)
    }

    this.parent.append(self)
  },

  async handleAddEntity(e, entityType) {
    e.preventDefault()
    const { modal, modalContentWrapper } = this.elements
    modal.classList.add('modal')
    modalContentWrapper.classList.add('modal-content')

    if (modalContentWrapper.children.length > 0) {
      modalContentWrapper.innerHTML = ''
    }

    switch (entityType) {
      case _PAGES.wallets:
        await WalletForm.render(modalContentWrapper)
        break
      case _PAGES.transactions:
        await TransactionsForm.render(modalContentWrapper)
        break
      case _PAGES.categories:
        await CategoryForm.render(modalContentWrapper)
        break
    }

    modal.append(modalContentWrapper)

    const modalHandler = e => this.handleModalBGClick(e, modalHandler)
    modal.addEventListener('click', modalHandler)

    document.body.prepend(modal)
  },
  async handleModalBGClick({ target }, handler) {
    const { modal } = this.elements
    if (target.classList.contains('modal')) {
      modal.removeEventListener('click', handler)

      cleanPage()

      await MainPage.render()
      await WalletsPage.render()
      modal.remove()
    }
  },
  async handleChangeTab(e) {
    const { target } = e

    if (target.classList.contains('navigation-tabs__item')) {
      const { self, plusBtn } = this.elements
      const currentTab = self.querySelector('.navigation-tabs__item--current')
      const newTab = target
      const currentTabName = target.dataset.tab
      currentTab.classList.remove('navigation-tabs__item--current')
      newTab.classList.add('navigation-tabs__item--current')

      cleanPage()
      await MainPage.render()
      this.render(document.querySelector('.screen .container'))

      switch (currentTabName) {
        case _PAGES.wallets:
          await WalletsPage.render()
          plusBtn.onclick = e => this.handleAddEntity(e, _PAGES.wallets)
          break
        case _PAGES.transactions:
          await TransactionsPage.render()
          plusBtn.onclick = e => this.handleAddEntity(e, _PAGES.transactions)
          break
        case _PAGES.categories:
          await CategoriesPage.render()
          plusBtn.onclick = e => this.handleAddEntity(e, _PAGES.categories)
          break
      }
    }
  }
}
