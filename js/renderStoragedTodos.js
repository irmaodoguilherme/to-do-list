import { getTodo } from './getTodo.js'

export const renderStoragedTodos = async todosContainer => {
  if (localStorage.length) {
    const todos = Object.values(localStorage)
    const documentFragment = document.createDocumentFragment()

    todos.forEach(todo => {
      const liTodo = getTodo(todo)
      documentFragment.append(liTodo)
    })

    todosContainer.append(documentFragment)
  }
}