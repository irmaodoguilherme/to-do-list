export const removeTodo = e => {
  const trashData = e.target.dataset.trash
  const todo = document.querySelector(`[data-todo="${trashData}"]`)

  if (trashData) {
    todo.remove()
    localStorage.removeItem(trashData)
  }
}