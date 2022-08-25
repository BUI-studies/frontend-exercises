const _HOST = 'http://localhost:8080'

export default {
  async getUser(name, password) {
    const res = await fetch(
      `${_HOST}/api/users?name=${name}&password=${password}`
    )
    return await res.json()
  },

  async getWallets(ownerId) {
    const res = await fetch(`${_HOST}/api/wallets/${ownerId}`)

    return await res.json()
  }
}
