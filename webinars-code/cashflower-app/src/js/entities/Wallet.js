export default function Wallet({id, name, owner, transactions, balance}) {
  this.id = id
  this.name = name.split('').reduce((acc, char, index) => index === 0 ? char.toUpperCase() : acc + char, '')
  this.owner = owner
  this.transactions = transactions
  this.balance = balance

  this.self = document.createElement('div')
  this.removeBtn = document.createElement('button')
}

Wallet.prototype.render = function (parent) {
  this.self.classList.add('wallet')
  this.self.dataset.id = this.id
  this.self.insertAdjacentHTML('afterbegin', `
        <h3 class="wallet__title">${this.name}</h3>
        <div class="wallet__item">
            <span class="wallet__item-name">Залишок:</span> <span class="wallet__item-value">${this.balance}</span>
        </div>
        <div class="wallet__item">
            <span class="wallet__item-name">Всього транзакцій:</span> <span class="wallet__item-value">${this.transactions.length}</span>
        </div>
      `)

  this.removeBtn.classList.add('wallet__remove-btn')

  this.removeBtn.insertAdjacentHTML('afterbegin', `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9m0 5h2v9H9V8m4 0h2v9h-2V8Z"></path></svg>`)

  this.self.append(this.removeBtn)

  parent.append(this.self)
}

Wallet.prototype.remove = function () {
  this.self.innerHTML = ''
  this.removeBtn.innerHTML = ''
  this.self.remove()
}