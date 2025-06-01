import { setAttributes } from './utils.js'

export const setDraggingState = e => {
    const liTargeted = e.target.tagName === 'LI' ? e.target : e.target.closest('LI')

    e.dataTransfer.effectAllowed = 'move'
    setAttributes(liTargeted, { 'data-dragging': true })
}