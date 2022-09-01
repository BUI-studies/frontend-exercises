import {plusIcon} from '../icons.js'
import WalletForm from './WalletForm.js'
import TransactionsPage from "../pages/TransactionsPage.js";
import TransactionsForm from "./TransactionsForm.js";
import {cleanPage} from "../utils.js";
import WalletsPage from "../pages/WalletsPage.js";
import MainPage from "../pages/MainPage.js";

export default {
  elements: {
    parent: null,
    self: document.createElement('div'),
    plusBtn: document.createElement('button'),
    modal: document.createElement('div'),
    modalContentWrapper: document.createElement('div')
  },

  render(parent) {
    const {self, plusBtn} = this.elements
    this.parent = parent

    if (self.children.length === 0) {
      self.classList.add('navigation-tabs')

      plusBtn.innerHTML = plusIcon
      plusBtn.onclick = e => this.handleAddEntity(e, 'гаманці')
      plusBtn.classList.add('navigation-tabs__add-btn')

      self.insertAdjacentHTML(
        'afterbegin',
        `
        <p class="navigation-tabs__item navigation-tabs__item--current" data-tab="wallets">Гаманці</p>
        `
      )

      self.append(plusBtn)
      self.insertAdjacentHTML('beforeend', `
        <p class="navigation-tabs__item" data-tab="transactions">Транзакції</p>
      `)

      self.onclick = e => this.handleChangeTab(e)
    }


    this.parent.append(self)
  },

  handleAddEntity(e, entityType) {
    const {modal, modalContentWrapper} = this.elements

    modal.classList.add('modal')
    modalContentWrapper.classList.add('modal-content')

    switch (entityType) {
      case 'гаманці':
        WalletForm.render(modalContentWrapper)
        break
      case 'транзакції':
        TransactionsForm.render(modalContentWrapper)
    }

    modal.append(modalContentWrapper)

    const modalHandler = e => this.handleModalBGClick(e, modalHandler)
    modal.addEventListener('click', modalHandler)

    document.body.prepend(modal)
  },
  handleModalBGClick({target}, handler) {
    const {modal} = this.elements
    if (target.classList.contains('modal')) {
      modal.removeEventListener('click', handler)
      debugger
      WalletForm.remove()
      modal.remove()
    }
  },
  async handleChangeTab({target}) {
    if (target.classList.contains('navigation-tabs__item')) {
      const {self, plusBtn} = this.elements
      const currentTab = self.querySelector('.navigation-tabs__item--current')
      const newTab = target
      const currentTabName = target.dataset.tab
      currentTab.classList.remove('navigation-tabs__item--current')
      newTab.classList.add('navigation-tabs__item--current')

      cleanPage()
      await MainPage.render()
      this.render(document.querySelector('.screen .container'))

      switch (currentTabName) {
        case 'wallets':
          await WalletsPage.render()
          plusBtn.onclick = e => this.handleAddEntity(e, 'гаманці')
          break
        case 'transactions':
          await TransactionsPage.render()
          plusBtn.onclick = e => this.handleAddEntity(e, 'транзакції')
          break
      }
    }
  }
}
