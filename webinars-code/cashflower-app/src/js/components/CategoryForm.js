import API from '../API.js'
import MainPage from '../pages/MainPage.js'
import CategoriesPage from '../pages/CategoriesPage.js'
import { cleanPage, Storage } from '../utils.js'

export default {
  elements: {
    self: document.createElement('div'),
    title: document.createElement('h2'),
    form: document.createElement('form'),
    name: document.createElement('input'),
    icon: document.createElement('input'),
    submitBtn: document.createElement('button')
  },

  render(parent) {
    this.elements.parent = parent
    const { self, title, form, name, icon, submitBtn } = this.elements

    self.classList.add('wallet-form')
    title.classList.add('title')
    form.classList.add('fields')
    name.classList.add('field')
    icon.classList.add('field')
    submitBtn.classList.add('submit-btn')

    name.required = true
    name.setAttribute('id', 'categoryName')
    name.setAttribute('placeholder', 'Імʼя категорії')
    name.onkeyup = e => this.handleNameInput(e)

    icon.setAttribute('id', 'categoryIcon')
    icon.setAttribute('placeholder', 'Емодзі ')

    submitBtn.setAttribute('id', 'saveCategoryBtn')
    submitBtn.textContent = 'Зберегти'
    submitBtn.onclick = e => this.handleSaveCategory(e)

    form.append(name, icon, submitBtn)
    self.append(title, form)

    parent.append(self)
  },

  async handleSaveCategory(e) {
    e.preventDefault()

    const { name, title, icon, form, submitBtn } = this.elements
    submitBtn.disabled = true

    if (!name.value || !icon.value) {
      title.textContent = 'Заповніть всі поля'
      title.style.color = 'red'
      return
    } else {
      title.textContent = name.value
      title.style.color = null
    }

    const savedCategory = await API.saveCategories({
      name: name.value,
      owner: Storage.getItem('user').id,
      icon: icon.value || '💩'
    })

    if (!!savedCategory) {
      title.textContent = ''
      form.reset()

      name.onkeyup = null
      submitBtn.onclick = null
      submitBtn.disabled = false

      cleanPage()

      MainPage.render()
      CategoriesPage.render()
    }
  },
  handleNameInput(e) {
    const { title } = this.elements
    title.style.color = null
    title.textContent = e.target.value
  }
}
