import { removeClasses } from './utils.js'

export const unstyleHoveredLi = e => {
    const liTargeted = e.target.tagName === 'LI' ? e.target : e.target.closest('LI')

    if (liTargeted === null) {
        return
    }

    removeClasses(liTargeted, 'li-hovered')
}