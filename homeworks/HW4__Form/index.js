window.addEventListener('DOMContentLoaded', () => {
	handleSelect('lang', 'lang__list', 'lang__value')
	handleSelect('signup__select', 'signup__select-list', 'signup__select-value')
})

function handleSelect(classesSelect, classesList, classesValue) {
	const select = document.querySelector(`.${classesSelect}`)
	const list = document.querySelector(`.${classesList}`)
	const value = document.querySelector(`.${classesValue}`)

	select.addEventListener('click', () => {
		list.classList[list.classList.contains('active') ? 'remove' : 'add']('active')
	})

	list.addEventListener('click', ev => {
		ev.stopPropagation()
		value.textContent = ev.target.textContent
		list.classList.remove('active')
	})
}
