export const handleTodosDisplay = async inputValue => {
  const todosContainer = document.querySelector('[data-js="todos-container"]')
  const todos = Array.from(todosContainer.children)
  
  hideTodos(todos, inputValue)
  showTodos(todos, inputValue)
}

const hideTodos = async (todos, inputValue) => {
  const todosToHide = filterTodos(todos, inputValue, false)
  manipulateClasses(todosToHide, 'd-none', 'd-block')
}

const showTodos = async (todos, inputValue) => {
  const todosToShow = filterTodos(todos, inputValue, true)
  manipulateClasses(todosToShow, 'd-block', 'd-none')
}

const manipulateClasses = (todos, addClass, removeClass) => {
  todos.forEach(todo => {
    todo.classList.add(addClass)
    todo.classList.remove(removeClass)
  })
}

const filterTodos = (todos, inputValue, returnMatchedTodo) => todos
  .filter(todo => {
    const matchedTodo = todo.textContent.toLowerCase().includes(inputValue)
    return returnMatchedTodo ? matchedTodo : !matchedTodo
  })