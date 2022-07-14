## TASK-01

Написати функцію `checkMoney`, яка будет перевіряти та підсвічувати елементи з заданого списку.

- Якщо сума складає менше 20% від цілі - фарбуємо елемент з класом `list-text` в червоний колір
- Якщо менше 50% - жовтий
- Від 90 та більше - зелений.

#### Arguments:

відсутні

#### Return value

відсутнє

#### Розмітка для HTML:

```html
<ul class="list">
  <li class="list__item">
    <h2 class="list__title">Байрактар:</h2>
    <p class="list__text">
      Зібрано коштів: <span class="list__value">2000</span>
    </p>
    <p class="list__goal">Ціль: <span class="list__goal-value"> 30000</span></p>
  </li>
  <li class="list__item">
    <h2 class="list__title">HIMARS:</h2>
    <p class="list__text">
      Зібрано коштів: <span class="list__value">25000</span>
    </p>
    <p class="list__goal">
      Ціль: <span class="list__goal-value"> 200000</span>
    </p>
  </li>
  <li class="list__item">
    <h2 class="list__title">ППО:</h2>
    <p class="list__text">
      Зібрано коштів: <span class="list__value">55600</span>
    </p>
    <p class="list__goal">
      Ціль: <span class="list__goal-value"> 100000</span>
    </p>
  </li>
  <li class="list__item">
    <h2 class="list__title">СУ-24:</h2>
    <p class="list__text">
      Зібрано коштів: <span class="list__value">1000000</span>
    </p>
    <p class="list__goal">
      Ціль: <span class="list__goal-value"> 750650</span>
    </p>
  </li>
</ul>
```
