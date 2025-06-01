import { addClasses, removeClasses } from './utils.js'

export const removeLineThroughLi = el => {
    addClasses(el, 'd-none')
    removeClasses(el, 'line-through')
}