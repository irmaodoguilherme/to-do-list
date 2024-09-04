export const getTodo = inputValue => {
  const liTodo = document.createElement('li')
  liTodo.textContent = inputValue
  liTodo.setAttribute('data-todo', inputValue)
  liTodo.setAttribute('class', 'd-flex justify-content-between text-break gap-3 px-3 py-1')

  const trashIcon = document.createElement('i')
  trashIcon.setAttribute('class', 'bi bi-trash d-flex align-items-center')
  trashIcon.setAttribute('data-trash', inputValue)

  liTodo.append(trashIcon)

  return liTodo
}