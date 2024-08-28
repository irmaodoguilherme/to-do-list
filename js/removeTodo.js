export const removeTodo = (dataTrash, todo) => {
  todo.remove()
  localStorage.removeItem(dataTrash)
}