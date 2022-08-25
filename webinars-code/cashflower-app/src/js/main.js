import API from './API.js'
import { Storage, cleanPage } from './utils.js'
import renderWaletsPage from './renderWaletsPage.js'

if (!Storage.getItem('user')) {
  const loginBtn = document.getElementById('loginBtn')

  loginBtn?.addEventListener('click', async e => {
    e.preventDefault()

    const nameElem = document.getElementById('userName')
    const passwordElem = document.getElementById('userPassword')

    const user = await API.getUser(nameElem.value, passwordElem.value)

    if (user.length > 0) {
      Storage.setItem('user', user[0])
      cleanPage()
      renderWaletsPage()
    } else {
      e.target.parentElement.reset()
      throw new Error('No such user')
    }
  })
} else {
  cleanPage()
  renderWaletsPage()
}
