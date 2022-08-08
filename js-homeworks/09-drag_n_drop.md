## TASK-01

Реалізувати невеличкий функціонал по типу дошки Trello, тобто створити форму з полем для вводу заголовку картки, та полем на вибір кольору картки(select: option = зелений,жовтий,червоний). По натисканню на кнопку створити, під формою створюється колонка з данною карткою, таким чином працює функціонал і на створення наступних карток, тобто всі вони додаются з початку тільки в одну колонку. Також надати можливість користовачу перетягувати колонки с місця на місце, та звісно надати можливість перетягувати картки між колонками. Стилізація форми на ваш смак.

#### Розмітка HTML:

```html
<form class="form">
	<input class="form__field" type="text" name="title" />
	<select class="form__select" name="color">
		<option class="form__select-option" value="зелений">зелений</option>
		<option class="form__select-option" value="жовтий">жовтий</option>
		<option class="form__select-option" value="червоний">червоний</option>
	</select>
	<button type="submit" class="form__submit">Створити картку</button>
</form>
<div class="trello">
	<div class="trello__column"></div>
	<div class="trello__column"></div>
	<div class="trello__column"></div>
	<div class="trello__column"></div>
	<div class="trello__column"></div>
	<div class="trello__column"></div>
</div>
```
