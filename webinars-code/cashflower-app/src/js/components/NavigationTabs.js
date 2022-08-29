import { plusIcon } from '../icons.js'
import WalletForm from './WalletForm.js'

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

    self.classList.add('navigation-tabs')

    plusBtn.innerHTML = plusIcon
    plusBtn.addEventListener('click', e => this.handleAddEntity(e, 'Гаманці'))
    plusBtn.classList.add('navigation-tabs__add-btn')

    if (self.children.length === 0) {
      self.insertAdjacentHTML(
        'afterbegin',
        `
        <p class="navigation-tabs__item navigation__item--current">Гаманці</p>
        `
      )
    }

    self.append(plusBtn)

    this.parent.append(self)
  },

  handleAddEntity(e, entityType) {
    const { modal, modalContentWrapper } = this.elements

    modal.classList.add('modal')
    modalContentWrapper.classList.add('modal-content')

    WalletForm.render(modalContentWrapper)
    modal.append(modalContentWrapper)

    document.body.prepend(modal)
  }
}