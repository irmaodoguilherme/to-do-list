import { addClasses } from './utils.js'

export const styleStatusIconToConcluded = el =>
    addClasses(el, 'bi', 'bi-check-lg', 'text-success', 'fs-1', 'h-fit', 'd-flex')