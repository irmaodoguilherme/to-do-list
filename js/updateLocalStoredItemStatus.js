export const updateLocalStoredItemStatus = (id, newStatus) => {
    const localStoredTodos = JSON.parse(localStorage.getItem('todos'))
    const updatedLocalStoredTodos = localStoredTodos.map(todo =>
        todo.id === id ? { ...todo, status: newStatus } : todo
    )
    
    const stringifiedLocalTodos = JSON.stringify(updatedLocalStoredTodos)
    
    localStorage.setItem('todos', stringifiedLocalTodos)
}