import { addClasses } from './utils.js'

export const styleStatusIconToTicking = el =>
    addClasses(el, 'bi', 'bi-hourglass', 'flip', 'h-fit', 'd-flex', 'fs-1')