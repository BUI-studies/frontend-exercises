import API from './API.js'
import { Storage, cleanPage } from './utils.js'
import WalletsPage from './pages/WalletsPage.js'
import LogInPage from './pages/LogInPage.js'
import MainPage from './pages/MainPage.js'

MainPage.render()

if (!Storage.getItem('user')) {
  LogInPage.render()
} else {
  WalletsPage.render()
}
