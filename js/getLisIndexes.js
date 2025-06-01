import { ulTodos } from './app.js'

export const getLiIndexes = (liTargeted, liActive) => {
    const todos = [...ulTodos.children]
    const liTargetedIndex = todos.indexOf(liTargeted)
    const liActiveIndex = todos.indexOf(liActive)

    return { liTargetedIndex, liActiveIndex }
}