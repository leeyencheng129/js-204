// 讓程式碼簡短一些
const byId = (id) => document.getElementById(id)

// 先獲得目前的元件參照
const todoAdd = byId('todo-add')
const todoInput = byId('todo-input')
const todoList = byId('todo-list')

// 所有的待辦事項要放在這個陣列中
const todos = []

todoAdd.addEventListener('click', () => {
  // 加入 todoInput 輸入值到 todos 陣列
  todos.unshift(todoInput.value)

  //每輸入一次清除 todoInput
  todoInput.value = ''
  console.log(todos)
})
