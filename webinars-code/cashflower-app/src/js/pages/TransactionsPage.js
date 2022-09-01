import API from '../API.js'
import {cleanPage, Storage} from '../utils.js'
import Transaction from '../entities/Transaction.js'
import NavigationTabs from '../components/NavigationTabs.js'
import MainPage from "./MainPage.js";

export const _TRANSACTIONS = []

export default {
  elements: {
    transactionsWrapper: document.createElement('div')
  },

  async render(parent = document.querySelector('.screen .container')) {
    const {transactionsWrapper} = this.elements
    const {id} = Storage.getItem('user')
    const transactions = await API.getTransactions(id)

    if (!transactions) throw new Error('No transactions found')

    NavigationTabs.render(parent)

    if (transactionsWrapper.children.length > 0) {
      transactionsWrapper.innerHTML = ''
    }

    transactionsWrapper.classList.add('wallets')

    transactions.forEach(wallet => {
      const newTransaction = new Transaction(wallet)

      _TRANSACTIONS.push(newTransaction)

      newTransaction.render(transactionsWrapper)
    })

    transactionsWrapper.onclick = e => this.handleRemoveTransaction(e)

    parent.append(transactionsWrapper)
  },

  async handleRemoveTransaction(e) {
    if (e.target.classList.contains('transaction__remove-btn')) {
      const transactionId = e.target.closest('.wallet').dataset.id
      const removeIndex = _TRANSACTIONS.findIndex(w => w.id = transactionId)

      await API.deleteTransaction(transactionId)

      _TRANSACTIONS.splice(removeIndex, 1)
      cleanPage()

      await MainPage.render()
      await this.render()
    }
  }
}
