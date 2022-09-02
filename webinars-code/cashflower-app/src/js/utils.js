export const Storage = {
  setItem(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
  },
  getItem(key) {
    return JSON.parse(localStorage.getItem(key))
  },
  removeItem(key) {
    return localStorage.removeItem(key)
  }
}

export const cleanPage = () => {
  const screenContainer = document.querySelector('.screen')
  const modal = document.querySelector('.modal')

  if (!!screenContainer) {
    screenContainer.innerHTML = ''
  }

  if (!!modal) {
    modal.remove()
  }
}

export const _PAGES = Object.freeze({
  wallets: 'wallets',
  transactions: 'transactions',
  categories: 'categories'
})
