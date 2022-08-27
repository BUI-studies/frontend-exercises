import API from './API.js'
import { Storage, cleanPage } from './utils.js'
import WalletsPage from './pages/WalletsPage.js'
import LogInPage from "./pages/LogInPage.js";

const contentWrapper = document.querySelector('.screen .container')

if (!Storage.getItem('user')) {
  LogInPage.render(contentWrapper)
} else {
  cleanPage()
  WalletsPage.render(contentWrapper)
}