const formAddTodo = document.querySelector('[data-js="form-add-todo"]')
const todosContainer = document.querySelector('[data-js="todos-container"]')
const inputSearchTodo = document.querySelector('[data-js="search-todos"]')

const handleFormSubmit = async e => {
  e.preventDefault()

  const { addTodo } = await import('./addTodo.js')
  const { sanitize } = await import('./sanitize.js')
  const inputValue = sanitize(e.target.todo.value.trim())

  if (!inputValue.length) {
    return
  }

  addTodo(inputValue)
  e.target.reset()
}

const handleTodosClick = async e => {
  const { removeTodo } = await import('./removeTodo.js')
  removeTodo(e)
}

const handleInputSearch = async e => {
  const { handleTodosDisplay } = await import('./handleTodosDisplay.js')
  handleTodosDisplay(e)
}

if (localStorage.length) {
  const { renderStoragedTodos } = await import('./renderStoragedTodos.js')
  renderStoragedTodos(todosContainer)
}

formAddTodo.addEventListener('submit', handleFormSubmit)
todosContainer.addEventListener('click', handleTodosClick)
inputSearchTodo.addEventListener('input', handleInputSearch)