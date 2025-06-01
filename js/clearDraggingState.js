import { ulTodos } from './app.js'
import { removeAttributes } from './utils.js'

export const clearDraggingState = () => {
    const liActive = ulTodos.querySelector('[data-dragging="true"]')

    if (liActive) {
        removeAttributes(liActive, 'data-dragging')
    }
}