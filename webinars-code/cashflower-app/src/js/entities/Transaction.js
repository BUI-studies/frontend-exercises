import {_WALLETS} from "../pages/WalletsPage.js";

export default function Transaction({
                                      id,
                                      type,
                                      category,
                                      owner,
                                      wallet,
                                      amount,
                                      comment
                                    }) {
  this.id = id
  this.type = type
  this.category = category
  this.owner = owner
  this.wallet = _WALLETS.find(w => w.id === wallet)
  this.amount = amount
  this.comment = comment

  this.self = document.createElement('div')
  this.removeBtn = document.createElement('button')
}

Transaction.prototype.render = function (parent) {
  this.self.classList.add('wallet')
  this.self.dataset.id = this.id
  this.self.insertAdjacentHTML('afterbegin', `
        <h3 class="transaction__title">${this.type}</h3>
        <div class="transaction__item">
            <span class="transaction__item-name">Категорія:</span> <span class="transaction__item-value">${this.category}</span>
        </div>
        <div class="transaction__item">
            <span class="transaction__item-name">Гаманець:</span> <span class="transaction__item-value">${this.wallet.name}</span>
        </div>
        <div class="transaction__item">
            <span class="transaction__item-name">Сума:</span> <span class="transaction__item-value">${this.amount}</span>
        </div>
        <div class="transaction__item">
            <span class="transaction__item-name">Коментар:</span> <span class="transaction__item-value">${this.comment}</span>
        </div>
      `)

  this.removeBtn.classList.add('wallet__remove-btn')

  this.removeBtn.insertAdjacentHTML('afterbegin', `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9m0 5h2v9H9V8m4 0h2v9h-2V8Z"></path></svg>`)

  this.self.append(this.removeBtn)

  parent.append(this.self)
}

Transaction.prototype.remove = function () {
  this.self.innerHTML = ''
  this.removeBtn.innerHTML = ''
  this.self.remove()
}
