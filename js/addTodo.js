import { getTodo } from "./getTodo.js"

export const addTodo = async (inputValue) => {
  const todosContainer = document.querySelector('[data-js="todos-container"]')
  const liTodo = getTodo(inputValue)

  localStorage.setItem(`${inputValue}`, inputValue)
  todosContainer.append(liTodo)
}