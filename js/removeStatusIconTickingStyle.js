import { removeClasses } from './utils.js'

export const removeStatusIconTickingStyle = el =>
    removeClasses(el, 'bi', 'bi-hourglass', 'flip', 'h-fit', 'd-flex', 'fs-1')