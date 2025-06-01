import { setAttributes } from './utils.js'

export const setDraggingStateMobile = e => {
    const clickedEl = e.target

    if (clickedEl.dataset.move !== 'li') {
        return
    }

    const liTargeted = e.target.closest('LI')

    if (liTargeted === null) {
        return
    }

    setAttributes(liTargeted, { 'data-dragging': true })
}