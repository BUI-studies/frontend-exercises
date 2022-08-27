import {plusIcon} from "../icons.js";

export default {
  elements: {
    parent: null,
    self: document.createElement('div'),
    plusBtn: document.createElement('button'),
    modal: document.createElement('div'),
    modalContentWrapper: document.createElement('div'),
  },

  render: function (parent) {
    const {self, plusBtn} = this.elements
    this.parent = parent

    self.classList.add('navigation-tabs')

    plusBtn.innerHTML = plusIcon
    plusBtn.addEventListener('click', (e) => this.handleAddEntity(e))
    plusBtn.classList.add('navigation-tabs__add-btn')

    self.insertAdjacentHTML('afterbegin', `
  <p class="navigation-tabs__item navigation__item--current">Гаманці</p>
  `)
    self.append(plusBtn)

    this.parent.append(self)
  },

  handleAddEntity: function (modalContent) {
    const {modal, modalContentWrapper} = this.elements

    modalContentWrapper.innerHTML = modalContent
    modal.append(modalContentWrapper)

    document.body.prepend(modal)
  }
}