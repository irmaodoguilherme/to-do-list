import { removeClasses } from './utils.js'

export const removeStatusIconCancelledStyle = el =>
    removeClasses(el, 'bi', 'bi-x-lg', 'text-danger', 'fs-1', 'h-fit', 'd-flex')