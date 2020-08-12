// 讓程式碼簡短一些
const byId = (id) => document.getElementById(id)

// 先獲得目前的元件參照
const todoAdd = byId('todo-add')
const todoInput = byId('todo-input')
const todoList = byId('todo-list')

// 所有的待辦事項要放在這個陣列中
// 每個項目：
// {id:number, text:string, completed:false}
const todos = [
  { id: 111111, text: '買牛奶', completed: false },
  { id: 2222222, text: '學JS', completed: true },
]

const toggleComplete = (id) => {
  for (let i = 0; i < todos.length; i++) {
    // 傳入的id是字串，要轉為數字
    if (todos[i].id === +id) {
      todos[i].completed = !todos[i].completed
    }
  }
}

// 用於呈現項目到網頁上的函式
const displayTodoList = () => {
  // 用 v.completed 判斷是否為完成的項目
  const displayTodoItems = todos.map((v) =>
    v.completed
      ? `<li><del>${v.text}</del><button class="todo-complete" data-id="${v.id}">完成</button></li>`
      : `<li>${v.text}<button class="todo-complete" data-id="${v.id}">完成</button></li>`
  )

  // join(合併陣列)
  todoList.innerHTML = `<ul>${displayTodoItems.join('')}</ul>`

  const todoCompletedButtons = document.getElementsByClassName('todo-complete')

  for (let i = 0; i < todoCompletedButtons.length; i++) {
    todoCompletedButtons[i].addEventListener('click', (event) => {
      toggleComplete(event.target.dataset.id)
      displayTodoList()
    })
  }
}

const addTodo = () => {
  // 加入 todoInput 輸入值到 todos 陣列
  if (todoInput.value.trim()) {
    // 用日期物件轉的微秒整數值當id值
    const item = { id: +new Date(), text: todoInput.value, completed: false }
    todos.unshift(item)
  }

  //每輸入一次清除 todoInput
  todoInput.value = ''

  console.log(todos)

  // 呼叫呈現的函式
  displayTodoList()
}

todoAdd.addEventListener('click', () => {
  addTodo()
})

todoInput.addEventListener('keypress', (event) => {
  // if (event.which === 13 || event.keyCode === 13)
  if (event.key === 'Enter') {
    addTodo()
  }
})

displayTodoList()
