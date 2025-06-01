import { ulTodos } from './app.js'
import { getLiIndexes } from './getLisIndexes.js'

export const handleDropReorder = async e => {
    e.preventDefault()

    const liTargeted = e.target.tagName === 'LI' ? e.target : e.target.closest('LI')

    if (liTargeted === null) {
        return
    }

    const liActive = ulTodos.querySelector('[data-dragging="true"]')
    
    const { removeClasses } = await import('./utils.js')
    removeClasses(liTargeted, 'li-hovered')

    if (liTargeted !== liActive) {
        const { liTargetedIndex, liActiveIndex } = getLiIndexes(liTargeted, liActive)

        const { reorderLi } = await import('./reorderLi.js')
        const { updateLocalStorageItemOrder } = await import('./updateLocalStorageItemOrder.js')

        reorderLi(liActiveIndex, liTargetedIndex, liActive, liTargeted)
        updateLocalStorageItemOrder(liActiveIndex, liTargetedIndex)
    }

    const { clearDraggingState } = await import('./clearDraggingState.js')
    clearDraggingState()
}