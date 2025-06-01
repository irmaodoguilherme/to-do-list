import { ulTodos } from './app.js'

export const reorderLi = (liActiveIndex, liTargetedIndex, liActive, liTargeted) => {
    if (liActiveIndex < liTargetedIndex) {
        ulTodos.insertBefore(liActive, liTargeted.nextSibling)
    } else {
        ulTodos.insertBefore(liActive, liTargeted)
    }
}