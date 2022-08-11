// const myPromise = new Promise((resolve, reject) => {
//   const myRequest = new XMLHttpRequest()

//   myRequest.addEventListener('load', () => {
//     if (myRequest.status === 200) {
//       resolve(myRequest.response)
//     } else {
//       reject(new Error(myRequest.statusText))
//     }
//   })
//   myRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos')
//   myRequest.send()
// })

// myPromise
//   .then(data => {
//     console.log(data)
//   })
//   .catch(err => {
//     console.error('something went wrong')
//     console.error(err)
//   })

function Todo(title, completed) {
  this.title = title
  this.completed = completed

  this.elements = {
    self: document.createElement('div'),
    title: document.createElement('h3'),
    status: document.createElement('p')
  }

  this.render = parent => {
    this.elements.self.classList.add('todo')
    this.elements.status.classList.add('status')

    this.elements.title.innerText = this.title
    this.elements.status.innerText = this.completed

    this.elements.self.append(this.elements.title, this.elements.status)

    parent.append(this.elements.self)
  }
}

const _TODOS = []

const myFetch = (url, options) => fetch(url, options).then(data => data, json())

const allTodos = myFetch('https://jsonplaceholder.typicode.com/todos').then(
  todos => {
    const wrapper = document.querySelector('.container')
    console.log(todos)

    todos.forEach(todo => {
      const newTodo = new Todo(todo.title, todo.completed)

      _TODOS.push(newTodo)
      newTodo.render(wrapper)
    })
  }
)

console.log('fetch returns', allTodos)
