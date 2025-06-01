import { ulTodos } from './app.js'
import { getTodosFragment } from './getTodosFragment.js'

export const renderLocalStoredTodos = localStoredTodos => {
    const parsedTodos = JSON.parse(localStoredTodos)
    const documentFragment = getTodosFragment(parsedTodos)
    ulTodos.replaceChildren(documentFragment)
}