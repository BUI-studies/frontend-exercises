import { _WALLETS } from '../pages/WalletsPage.js'

export default function Category({ id, owner, name, icon, comment }) {
  this.id = id
  this.name = name
  this.owner = owner
  this.icon = icon
  this.comment = comment

  this.self = document.createElement('div')
  this.removeBtn = document.createElement('button')
}

Category.prototype.render = function (parent) {
  this.self.classList.add('wallet')
  this.self.dataset.id = this.id
  this.self.insertAdjacentHTML(
    'afterbegin',
    `
        <h3 class="transaction__title">${this.icon} ${this.name}</h3>
        <div class="transaction__item">
            <span class="transaction__item-name">Коментар:</span> <span class="transaction__item-value">${this.comment}</span>
        </div>
      `
  )

  this.removeBtn.classList.add('wallet__remove-btn')

  this.removeBtn.insertAdjacentHTML(
    'afterbegin',
    `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9m0 5h2v9H9V8m4 0h2v9h-2V8Z"></path></svg>`
  )

  this.self.append(this.removeBtn)

  parent.append(this.self)
}

Category.prototype.remove = function () {
  this.self.innerHTML = ''
  this.removeBtn.innerHTML = ''
  this.self.remove()
}
