import { ulTodos } from './app.js'
import { getLiIndexes } from './getLisIndexes.js'
import { reorderLi } from './reorderLi.js'
import { updateLocalStorageItemOrder } from './updateLocalStorageItemOrder.js'

export const handleTouchReorder = e => {
    const { clientX: touchPositionX, clientY: touchPositionY } = e.touches[0]
    const elementUnderUserHover =
        document.elementFromPoint(touchPositionX, touchPositionY)

    if (!elementUnderUserHover) {
        return
    }

    const liTargeted = elementUnderUserHover.tagName === 'LI' ?
        elementUnderUserHover :
        elementUnderUserHover.closest('LI')

    if (liTargeted === null) {
        return
    }

    const liActive = ulTodos.querySelector('[data-dragging="true"]')

    if (liActive === null) {
        return
    }

    if (liActive !== liTargeted) {
        const { liTargetedIndex, liActiveIndex } = getLiIndexes(liTargeted, liActive)

        reorderLi(liActiveIndex, liTargetedIndex, liActive, liTargeted)
        updateLocalStorageItemOrder(liActiveIndex, liTargetedIndex)
    }
}