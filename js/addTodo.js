import { getTodo } from "./getTodo.js"

export const addTodo = async (inputValue, todosContainer) => {
  const liTodo = getTodo(inputValue)

  localStorage.setItem(`${inputValue}`, inputValue)
  todosContainer.append(liTodo)
}