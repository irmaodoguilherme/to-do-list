export const storeTodoLocally = todo => {
    const storedTodos = localStorage.getItem('todos')
    const parsedTodos = storedTodos ? JSON.parse(storedTodos) : []
    const todosToBeStored = JSON.stringify([...parsedTodos, todo])

    localStorage.setItem('todos', todosToBeStored)
}