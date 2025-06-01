import { addClasses, removeClasses } from './utils.js'

export const animateLineThroughLi = el => {
    removeClasses(el, 'd-none')
    addClasses(el, 'line-through')
}