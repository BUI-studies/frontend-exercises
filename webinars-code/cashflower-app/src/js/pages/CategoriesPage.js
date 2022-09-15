import API from '../API.js'
import { cleanPage, Storage } from '../utils.js'
import NavigationTabs from '../components/NavigationTabs.js'
import MainPage from './MainPage.js'
import Category from '../entities/Categories.js'

export const _CATEGORIES = []

export default {
  elements: {
    categoriesWrapper: document.createElement('div')
  },

  async render(parent = document.querySelector('.screen .container')) {
    const { categoriesWrapper } = this.elements
    const { id } = Storage.getItem('user')
    const categories = await API.getCategories(id)

    if (!categories) throw new Error('No categories found')

    NavigationTabs.render(parent)

    if (categoriesWrapper.children.length > 0) {
      categoriesWrapper.innerHTML = ''
    }

    categoriesWrapper.classList.add('categories')

    categories.forEach(wallet => {
      const newCategory = new Category(wallet)

      _CATEGORIES.push(newCategory)

      newCategory.render(categoriesWrapper)
    })

    categoriesWrapper.onclick = e => this.handleRemoveTransaction(e)

    parent.append(categoriesWrapper)
  },

  async handleRemoveTransaction(e) {
    if (e.target.classList.contains('transaction__remove-btn')) {
      const categoryID = e.target.closest('.wallet').dataset.id
      const removeIndex = _CATEGORIES.findIndex(c => (c.id = categoryID))

      await API.deleteCategory(categoryID)

      _CATEGORIES.splice(removeIndex, 1)
      cleanPage()

      await MainPage.render()
      await this.render()
    }
  }
}
