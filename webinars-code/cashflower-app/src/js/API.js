const path = Object.freeze({
  host: 'http://localhost:8080',

  get users() {
    return `${this.host}/api/users`
  },
  get wallets() {
    return `${this.host}/api/wallets`
  },
  get category() {
    return `${this.host}/api/categories`
  },
  get transactions() {
    return `${this.host}/api/transactions`
  }
})

export default {
  async getUser(name, password) {
    const res = await fetch(`${path.users}?name=${name}&password=${password}`)
    return await res.json()
  },

  async saveUser(user) {
    const res = await fetch(path.users, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })

    return await res.json()
  },

  async getWallets(ownerId) {
    const res = await fetch(`${path.wallets}/${ownerId}`)

    return await res.json()
  },

  async saveWallet(wallet) {
    const res = await fetch(path.wallets, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(wallet)
    })

    return await res.json()
  },

  async removeWallet(id) {
    const res = await fetch(`${path.wallets}/${id}`, {
      method: 'DELETE'
    })

    return await res.json()
  },

  async getTransactions(userID) {
    const res = await fetch(`${path.transactions}/${userID}`)
    return await res.json()
  },

  async saveTransaction(transaction) {
    const res = await fetch(path.transactions, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transaction)
    })

    return await res.json()
  },

  async deleteTransaction(id) {
    const res = await fetch(`${path.transactions}/${id}`, {
      method: 'DELETE'
    })

    return await res.json()
  },

  async getCategories(userID) {
    const res = await fetch(`${path.category}/${userID}`)
    return await res.json()
  },

  async saveCategories(category) {
    const res = await fetch(path.category, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(category)
    })
    return await res.json()
  },

  async deleteCategories(categoryID) {
    const res = await fetch(`${path.category}/${categoryID}`, {
      method: 'DELETE'
    })
    return await res.json()
  }
}
