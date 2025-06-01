export const updateLocalStorageItemOrder = (activeTodoIndex, targetedTodoIndex) => {
    const localStoredTodos = localStorage.getItem('todos')
    const parsedTodos = JSON.parse(localStoredTodos)
    const todoToBeOrdered = parsedTodos[activeTodoIndex]
    const filteredTodos = parsedTodos.filter(({ id }) => id !== todoToBeOrdered.id)

    filteredTodos.splice(targetedTodoIndex, 0, todoToBeOrdered)
    
    const stringifiedTodos = JSON.stringify(filteredTodos)
    localStorage.setItem('todos', stringifiedTodos)
}