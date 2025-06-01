import { playSound } from './playSound.js'
import { ulTodos } from './app.js'

export const unlockLiHoverSound = () => {
    ulTodos.addEventListener('mouseenter', e => {
        const hoveredEl = e.target

        if (hoveredEl.tagName === 'LI') {
            playSound('hover')
        }
    }, true)
    window.removeEventListener('click', unlockLiHoverSound)
}