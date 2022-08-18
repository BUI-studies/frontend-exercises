const galleryBtnsWrapper = document.querySelector('.gallery-nav')
const galleryContent = document.querySelector('.gallery-content')

galleryBtnsWrapper.addEventListener('click', ({ target }) => {
  if (target.classList.contains('gallery-nav__item')) {
    const category = target.dataset.category
    const contentItems = galleryContent.children

    for (let i = 0; i < contentItems.length; i++) {
      if (contentItems[i].dataset.category === category) {
        contentItems[i].classList.add('gallery-content--active')
      } else {
        contentItems[i].classList.remove('gallery-content--active')
      }
    }
  }
})
