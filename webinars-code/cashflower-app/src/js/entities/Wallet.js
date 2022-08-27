export default function Wallet({ id, name, owner, transactions, balance }) {
  this.id = id
  this.name = name.split('').reduce((acc, char, index) => index === 0 ? char.toUpperCase() : acc + char, '')
  this.owner = owner
  this.transactions = transactions
  this.balance = balance

  this.self = document.createElement('div')
}

Wallet.prototype.render = function (parent) {
  this.self.classList.add('wallet')
  this.self.insertAdjacentHTML(
    'afterbegin',
    `
        <h3 class="wallet__title">${this.name}</h3>
        <div class="wallet__item">
            <span class="wallet__item-name">Залишок:</span> <span class="wallet__item-value">${this.balance}</span>
        </div>
        <div class="wallet__item">
            <span class="wallet__item-name">Всього транзакцій:</span> <span class="wallet__item-value">${this.transactions.length}</span>
        </div>
      `
  )

  parent.append(this.self)
}