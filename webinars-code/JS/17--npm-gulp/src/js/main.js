import './gallery.js'

//обʼєкт для зручного зберігання URL-ів на різні ендпоінти серверу
const API = {
  host: 'http://localhost:8080',

  // слово get означає що тут описаний так званиій "гетер" властивості. це означає що для відображення значення в обʼєкті API треба спочатку виконати код цього "геттеру"
  get users() {
    return `${this.host}/api/users`
  }
}

// просто приклад запиту на сервер для перевірки підключення
fetch(API.users)
  .then(r => r.json())
  .then(data => {
    console.log(data)
  })
