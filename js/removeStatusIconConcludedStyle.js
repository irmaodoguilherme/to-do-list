import { removeClasses } from './utils.js'

export const removeStatusIconConcludedStyle = el =>
    removeClasses(el, 'bi', 'bi-check-lg', 'text-success', 'fs-1', 'h-fit', 'd-flex')