## TASK-01

Реалізуйте наступний функціонал:

- Після кліку по кнопці на сторінці запускати таймер(функцію `startTimer`)
- Функція `startTimer` приймає один аргумент у форматі дати із поля для вводу, та запускає таймер який кожної секунди оновлює інформацію про - дні,години,хвилини та секунди до дати аргумента. Тобто аргументом приходить дата, до якох треба кожну секунду виразовувати скільки залишилось часу і виводити ці значення на екран.

#### Arguments функції `startTimer`:

- _eventDate_ - дата у форматі строки ("01-09-2022")

#### Return value

Відсутнє

#### Розмітка HTML та CSS:

```html
<form class="setTimer">
  <input type="number" class="setTimer__field" name="dateEvent" />
  <button class="setTimer__submit" type="submit">запустити відлік</button>
</form>
<div class="timer">
  <h2 class="timer__value" data-timer="day"></h2>
  <span>:</span>
  <h2 class="timer__value" data-timer="hours"></h2>
  <span>:</span>
  <h2 class="timer__value" data-timer="minute"></h2>
  <span>:</span>
  <h2 class="timer__value" data-timer="second"></h2>
</div>
```

```css
.timer {
  display: flex;
  width: 600px;
  margin: 0 auto;
  row-gap: 3px;
  font-family: sans-serif;
  text-transform: uppercase;
}
```

## TASK-02

Реалізувати наступний функціонал:

- При заватаженні сторінки перевірити `localStorage`, чи є значення у ключа `basket`, якщо там пусто, то на основі заздалегіть заготовленого масиву об'єктів відобразити список товарів
- Якщо ж у `localStorage` там є значення, тобто користувач уже вибирав щось в корзину до цього, то відобразити лише вибрані товари
- Написати функцію `renderStorage`, яка приймає аргументом "storage"(масив об'єктів), та відмальовує їх у `div` з айдішником `root_storage`
- На кожен товар додати кнопку, при натисканні на яку додавати цей товар у `localStorage` до ключа `basket`

## Примітка:

- Користувач може додати 1 товар , лише один раз
- У `localStorage` ключ `basket` - має бути масивом, тому при запису до стореджу не забуваємо користуватися методом `JSON.stringify()`

#### Arguments функції `renderStorage`:

- _storage_ - масив об'єктів товарів, де кожен обʼєкт має ключі:
  1. _title_ - назва товару, тег: <h2>
  2. _imgUrl_ - посилання на картинку товару, тег: <img>
  3. _description_ - невеликий опис товару, тег: <p>

#### Return value

Відсутнє

#### Масив для рендеру:

```js
[
  {
    id: 1,
    imgUrl:
      "https://zelenasadyba.com.ua/wp-content/uploads/2021/02/idealni-kimnatni-roslyny-04.jpg",
    title: "ficus",
    description:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit ",
  },
  {
    id: 2,
    imgUrl:
      "https://zelenasadyba.com.ua/wp-content/uploads/2021/02/idealni-kimnatni-roslyny-04.jpg",
    title: "qui esse",
    description:
      "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores ",
  },
  {
    id: 3,
    imgUrl:
      "https://zelenasadyba.com.ua/wp-content/uploads/2021/02/idealni-kimnatni-roslyny-04.jpg",
    title: "molestias",
    description:
      "et iusto sed quo iure\nvoluptatem occaecati porro eius odio et labore et velit aut",
  },
  {
    id: 4,
    imgUrl: "https://vazon.pp.ua/image/cache/catalog/News/bonsay-650x650.jpg",
    title: "occaecati",
    description:
      "ullam et saepe reiciendis voluptatem doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
  {
    id: 5,
    imgUrl:
      "https://zelenasadyba.com.ua/wp-content/uploads/2021/02/idealni-kimnatni-roslyny-04.jpg",
    title: "nesciunt",
    description:
      "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  },
  {
    id: 6,
    imgUrl:
      "https://na-dache.pro/uploads/posts/2021-05/1620532643_69-p-vazoni-dlya-tsvetov-iz-dereva-foto-77.jpg",
    title: "dolorem",
    description:
      "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis",
  },
  {
    id: 7,
    imgUrl:
      "https://zelenasadyba.com.ua/wp-content/uploads/2021/02/idealni-kimnatni-roslyny-04.jpg",
    title: "autem",
    description: "dolore placeat quibusdam ea quo vitaea sed quas",
  },
  {
    id: 8,
    imgUrl:
      "https://na-dache.pro/uploads/posts/2021-05/1620532643_69-p-vazoni-dlya-tsvetov-iz-dereva-foto-77.jpg",
    title: "dolorem",
    description: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam",
  },
  {
    id: 9,
    imgUrl:
      "https://zelenasadyba.com.ua/wp-content/uploads/2021/02/idealni-kimnatni-roslyny-04.jpg",
    title: "tempora",
    description: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam",
  },
  {
    id: 10,
    imgUrl: "https://vazon.pp.ua/image/cache/catalog/News/bonsay-650x650.jpg",
    title: "molestias",
    description:
      "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero",
  },
];
```

#### Розмітка HTML та CSS:

```html
<div id="root_storage"></div>
```

```css
#root_storage {
  display: flex;
  flex-wrap: wrap;
  width: 1000px;
  margin: 50px auto;
  row-gap: 50px;
  font-family: sans-serif;
}

#root_storage > * {
  width: 250px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  padding: 10px;
  text-align: center;
  border-radius: 10px;
}
```
