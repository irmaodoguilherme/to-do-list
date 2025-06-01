import { playSound } from './playSound.js'
import { removeClasses } from './utils.js'

export const removeTodo = e => {
    const todo = e.target.closest('li')
    const id = todo.dataset.id
    const storedTodos = localStorage.getItem('todos')
    const parsedTodos = JSON.parse(storedTodos)
    const filteredTodos = parsedTodos.filter(todo => todo.id !== id)
    const stringifiedTodos = JSON.stringify(filteredTodos)

    removeClasses(todo, 'show')

    playSound('delete')
    setTimeout(() => todo.remove(), 160)
    localStorage.setItem('todos', stringifiedTodos)
}