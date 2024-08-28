import { getTodo } from './getTodo.js'
import { sanitize } from './sanitize.js'

export const renderStoragedTodos = async () => {
  const todosContainer = document.querySelector('[data-js="todos-container"]')
  const localStoragedTodos = Object
    .values(localStorage)
    .map(value => sanitize(value))
  const documentFragment = document.createDocumentFragment()

  localStoragedTodos.forEach(todo => {
    const liTodo = getTodo(todo)
    documentFragment.append(liTodo)
  })

  todosContainer.append(documentFragment)
}