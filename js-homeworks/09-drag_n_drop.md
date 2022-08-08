## TASK-01

Реалізувати невеличкий функціонал по типу дошки Trello, тобто створити форму з полем для вводу заголовку картки, та полем на вибір кольору картки(select: option = зелений,жовтий,червоний).

Після кліку на кнопку "Створити картку", під формою створюється колонка з данною карткою.
При створення наступних карток, всі попередні додаются з початку в одну і ту саму колонку.

Надати можливість користовачу перетягувати колонки с місця на місце, та звісно надати можливість перетягувати картки між колонками.
Стилізація форми на ваш смак. Ось [макет](https://www.figma.com/file/T58QrqJcRDfw5kEoKlKwk8/Gogi-trello?node-id=0%3A1) для тго шоб приблизно орієнтуватись.

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
