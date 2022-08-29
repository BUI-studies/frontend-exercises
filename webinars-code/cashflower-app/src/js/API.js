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
  }
}
