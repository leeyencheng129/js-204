// 讓程式碼簡短一些
const byId = (id) => document.getElementById(id)

// 先獲得目前的元件參照
const todoAdd = byId('todo-add')
const todoInput = byId('todo-input')
const todoList = byId('todo-list')

// 所有的待辦事項要放在這個陣列中
const todos = []

// 用於呈現項目到網頁上的函式
const displayTodoList = () => {
  // let display = ''
  // for (let i = 0; i < todos.length; i++) {
  //   display += '<li>' + todos[i] + '</li>'
  // }
  // todoList.innerHTML = '<ul>' + display + '</ul>'

  // 與上述的程式碼執行一模一樣，連鎖語法加上join(合併陣列)
  todoList.innerHTML = `<ul>${todos.map((v) => `<li>${v}</li>`).join('')}</ul>`
}

todoAdd.addEventListener('click', () => {
  // 加入 todoInput 輸入值到 todos 陣列
  if (todoInput.value.trim()) todos.unshift(todoInput.value)

  //每輸入一次清除 todoInput
  todoInput.value = ''

  // 呼叫呈現的函式
  displayTodoList()
})
