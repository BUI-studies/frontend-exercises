import API from './API.js'
import { Storage } from './utils.js'

export const _WALLETS = []

function Wallet({ id, name, owner, transactions, balance }) {
  this.id = id
  this.name = name
  this.owner = owner
  this.transactions = transactions
  this.balance = balance

  this.self = document.createElement('div')

  this.render = parent => {
    this.self.classList.add('wallet')
    this.self.insertAdjacentHTML(
      'afterbegin',
      `
        <p>${this.name}</p>
        <p>Залишок: ${this.balance}</p>
        <p>Всього транзакцій: ${this.transactions.length}</p>
      `
    )

    parent.append(this.self)
  }
}

let contentWrapper

export default async () => {
  contentWrapper = document.querySelector('.content')
  const { id } = Storage.getItem('user')
  const wallets = await API.getWallets(id)

  wallets.forEach(wallet => {
    const newWallet = new Wallet(wallet)

    _WALLETS.push(newWallet)

    newWallet.render(contentWrapper)
  })
}
