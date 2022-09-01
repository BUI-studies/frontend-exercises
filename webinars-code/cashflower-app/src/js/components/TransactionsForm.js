import API from '../API.js'
import MainPage from '../pages/MainPage.js'
import WalletsPage from '../pages/WalletsPage.js'
import {cleanPage, Storage} from '../utils.js'
import TransactionsPage from "../pages/TransactionsPage.js";

export default {
  elements: {
    self: document.createElement('div'),
    title: document.createElement('h2'),
    form: document.createElement('form'),
    type: document.createElement('input'),
    category: document.createElement('input'),
    wallet: document.createElement('input'),
    amount: document.createElement('input'),
    comment: document.createElement('input'),
    submitBtn: document.createElement('button')
  },

  render(parent) {
    this.elements.parent = parent
    const {
      self, title, form, type,
      category, wallet, amount,
      comment, submitBtn
    } = this.elements

    self.classList.add(
      'transaction-form',
    )
    title.classList.add('title')
    form.classList.add('fields')
    type.classList.add('field')
    category.classList.add('field')
    wallet.classList.add('field')
    amount.classList.add('field')
    submitBtn.classList.add('submit-btn')

    title.required = true
    title.setAttribute('id', 'transactionTitle')
    title.textContent = 'Створити транзакцію'

    type.required = true
    type.setAttribute('id', 'transactionType')
    type.setAttribute('placeholder', 'Тип транзакції')

    category.required = true
    category.setAttribute('id', 'transactionCategory')
    category.setAttribute('placeholder', 'Категорія')

    wallet.required = true
    wallet.setAttribute('id', 'transactionWallet')
    wallet.setAttribute('placeholder', 'Гаманець')

    amount.required = true
    amount.setAttribute('id', 'transactionAmount')
    amount.setAttribute('placeholder', 'Сума')

    comment.required = true
    comment.setAttribute('id', 'transactionAmount')
    comment.setAttribute('placeholder', 'Сума')

    submitBtn.setAttribute('id', 'saveTransactionBtn')
    submitBtn.textContent = 'Зберегти'
    submitBtn.onclick = e => this.handleSaveTransaction(e)

    form.append(
      type,
      category,
      wallet,
      amount,
      submitBtn
    )

    self.append(title, form)

    parent.append(self)
  },

  async handleSaveTransaction(e) {
    e.preventDefault()

    const {
      self, title, form, type,
      category,
      wallet,
      amount, comment, submitBtn
    } = this.elements
    submitBtn.disabled = true

    const savedTransaction = await API.saveTransaction({
      title: title.value,
      type: type.value,
      category: category.value,
      wallet: wallet.value,
      amount: amount.value,
      owner: Storage.getItem('user').id,
      comment: comment.value
    })

    if (!!savedTransaction) {
      form.reset()
      submitBtn.onclick = null
      submitBtn.disabled = false
      cleanPage()

      MainPage.render()
      TransactionsPage.render()
    }
  },
}
