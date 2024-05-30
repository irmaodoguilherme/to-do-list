export const getTodo = inputValue => {
  const liTodo = document.createElement('li')
  liTodo.textContent = inputValue
  liTodo.setAttribute('data-todo', inputValue)
  liTodo.classList.add('d-flex', 'justify-content-between', 'text-center')

  const trashIcon = document.createElement('i')
  trashIcon.classList.add('bi', 'bi-trash', 'd-flex', 'align-items-center')
  trashIcon.setAttribute('data-trash', inputValue)

  liTodo.append(trashIcon)

  return liTodo
}