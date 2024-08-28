const formAddTodo = document.querySelector('[data-js="form-add-todo"]')
const todosContainer = document.querySelector('[data-js="todos-container"]')
const inputSearchTodo = document.querySelector('[data-js="search-todos"]')
const buttonClearTodos = document.querySelector('[data-js="button-clear-todos"]')

const handleFormSubmit = async e => {
  e.preventDefault()

  const inputValue = e.target.todo.value.trim()

  if (!inputValue.length) {
    return
  }

  const { addTodo } = await import('./addTodo.js')
  const { sanitize } = await import('./sanitize.js')
  const todosContainer = document.querySelector('[data-js="todos-container"]')

  addTodo(sanitize(inputValue), todosContainer)
  e.target.reset()
}

const handleTodosClick = async e => {
  const dataTrash = e.target.dataset.trash

  if (dataTrash) {
    const todo = document.querySelector(`[data-todo="${dataTrash}"]`)
    const { removeTodo } = await import('./removeTodo.js')

    removeTodo(dataTrash, todo)
  }
}

const handleInputSearch = async e => {
  const { handleTodosDisplay } = await import('./handleTodosDisplay.js')
  const inputValue = e.target.value.toLowerCase().trim()

  handleTodosDisplay(inputValue)
}

const init = async () => {
  if(localStorage.length) {
    const { renderStoragedTodos } = await import('./renderStoragedTodos.js')
    renderStoragedTodos()
  }
}

formAddTodo.addEventListener('submit', handleFormSubmit)
todosContainer.addEventListener('click', handleTodosClick)
inputSearchTodo.addEventListener('input', handleInputSearch)

init()