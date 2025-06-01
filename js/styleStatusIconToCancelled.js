import { addClasses } from './utils.js'

export const styleStatusIconToCancelled = el =>
    addClasses(el, 'bi', 'bi-x-lg', 'text-danger', 'fs-1', 'h-fit', 'd-flex')