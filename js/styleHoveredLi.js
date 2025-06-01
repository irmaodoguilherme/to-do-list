import { addClasses } from './utils.js'
import { ulTodos } from './app.js'

export const styleHoveredLi = e => {
    const liTargeted = e.target.tagName === 'LI' ?
        e.target :
        e.target.closest('LI')

    if (liTargeted === null) {
        return
    }

    const liActive = ulTodos.querySelector('[data-dragging="true"]')

    if (liTargeted !== liActive) {
        addClasses(liTargeted, 'li-hovered')
    }
}