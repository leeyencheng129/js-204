// 讓程式碼簡短一些
const byId = (id) => document.getElementById(id)

// 先獲得目前的元件參照
const todoAdd = byId('todo-add')
const todoInput = byId('todo-input')
const todoList = byId('todo-list')

// 所有的待辦事項要放在這個陣列中
// 每個項目：
// {id:number, text:string, completed:false, edited: false}
let todos = [
  { id: 111111, text: '買牛奶', completed: false, edited: false },
  { id: 2222222, text: '學JS', completed: true, edited: false },
]

const toggleComplete = (id) => {
  for (let i = 0; i < todos.length; i++) {
    // 傳入的id是字串，要轉為數字再比較
    if (todos[i].id === +id) {
      todos[i].completed = !todos[i].completed
    }
  }
}

const toggleEdit = (id) => {
  for (let i = 0; i < todos.length; i++) {
    // 關起其它全部編輯的視窗
    todos[i].edited = false

    // 傳入的id是字串，要轉為數字再比較
    if (todos[i].id === +id) {
      todos[i].edited = !todos[i].edited
    }
  }
}

const saveItem = (id, value) => {
  for (let i = 0; i < todos.length; i++) {
    // 傳入的id是字串，要轉為數字再比較
    if (todos[i].id === +id) {
      // 文字轉為修改後的值
      todos[i].text = value
      //切換編輯狀態
      todos[i].edited = !todos[i].edited
    }
  }
}

const deleteItem = (id) => {
  // 用filter最為簡單
  const newTodos = todos.filter((v) => v.id !== +id)
  // 為了刪除，把todos先改宣告為let，可以重新指定陣列
  todos = [...newTodos]
}

// 用於呈現項目到網頁上的函式
const displayTodoList = () => {
  // 用 v.completed 判斷是否為完成的項目
  const displayTodoItems = todos.map((v) => {
    let displayString = ''

    // 先判斷是否進入編輯狀態
    if (v.edited) {
      displayString = `<li><input type="text" id="todo-item-edit" value="${v.text}" />
      <button class="todo-save" data-id="${v.id}">儲存</button>
      <button class="todo-complete" data-id="${v.id}">完成</button>
      <button class="todo-delete" data-id="${v.id}">刪除</button>
       </li>`
    } else {
      // 再判斷是否為完成狀態
      displayString = v.completed
        ? `<li>
         <del>
         <span class="todo-item" data-id="${v.id}">${v.text}</span>
         </del>
         <button class="todo-edit" data-id="${v.id}">編輯</button>
         <button class="todo-complete" data-id="${v.id}">完成</button>
         <button class="todo-delete" data-id="${v.id}">刪除</button>
        </li>`
        : `<li>
         <span class="todo-item" data-id="${v.id}"> ${v.text}</span>
         <button class="todo-edit" data-id="${v.id}">編輯</button>
         <button class="todo-complete" data-id="${v.id}">完成</button>
         <button class="todo-delete" data-id="${v.id}">刪除</button>
         </li>`
    }

    return displayString
  })

  // join(合併陣列)
  todoList.innerHTML = `<ul>${displayTodoItems.join('')}</ul>`

  // 加入事件處理於 工作完成按鈕
  const todoCompletedButtons = document.getElementsByClassName('todo-complete')

  for (let i = 0; i < todoCompletedButtons.length; i++) {
    todoCompletedButtons[i].addEventListener('click', (event) => {
      // 切換狀態 更動todos陣列
      toggleComplete(event.target.dataset.id)
      // 更新列表
      displayTodoList()
    })
  }

  // 加入事件處理於 工作完成按鈕
  const todoItems = document.getElementsByClassName('todo-item')

  for (let i = 0; i < todoItems.length; i++) {
    todoItems[i].addEventListener('dblclick', (event) => {
      // 切換狀態 更動todos陣列
      toggleEdit(event.target.dataset.id)
      // 更新列表
      displayTodoList()
    })
  }

  // 加入事件處理於 工作完成按鈕
  const todoEditButtons = document.getElementsByClassName('todo-edit')

  for (let i = 0; i < todoEditButtons.length; i++) {
    todoEditButtons[i].addEventListener('click', (event) => {
      // 切換狀態 更動todos陣列
      toggleEdit(event.target.dataset.id)
      // 更新列表
      displayTodoList()
    })
  }

  // 加入事件處理於 工作完成按鈕
  const todoSaveButtons = document.getElementsByClassName('todo-save')

  for (let i = 0; i < todoSaveButtons.length; i++) {
    todoSaveButtons[i].addEventListener('click', (event) => {
      // 切換狀態 更動todos陣列
      saveItem(
        event.target.dataset.id,
        document.getElementById('todo-item-edit').value
      )
      // 更新列表
      displayTodoList()
    })
  }

  // 加入事件處理於 加入刪除按鈕
  const todoDeleteButtons = document.getElementsByClassName('todo-delete')

  for (let i = 0; i < todoDeleteButtons.length; i++) {
    todoDeleteButtons[i].addEventListener('click', (event) => {
      // 更動todos陣列
      deleteItem(event.target.dataset.id)
      // 更新列表
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

// 應用程式初始化呼叫
displayTodoList()
