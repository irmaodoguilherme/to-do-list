import { addClasses, removeClasses } from './utils.js'
import { ulTodos, currentDisplayedToDos } from './app.js'

export const filterTodosByStatus = e => {
    e.preventDefault()
    currentDisplayedToDos.textContent = e.target.textContent
    const activeTodos = [...ulTodos.querySelectorAll('li')]

    displayAllTodos(activeTodos)

    if (e.target.textContent !== 'Default') {
        displayASpecificTodo(activeTodos, e)
    }
}

const displayAllTodos = todos => todos.forEach(todo => removeClasses(todo, 'd-none'))
const displayASpecificTodo = (todos, e) => todos.forEach(todo => {
    const todoCurrentStatus = todo.dataset.current
    const desiredStatus = e.target.textContent.toLowerCase()
    if (todoCurrentStatus !== desiredStatus) {
        addClasses(todo, 'd-none')
    }
})