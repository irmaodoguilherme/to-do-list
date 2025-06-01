import { applyTheme } from './applyTheme.js'
import { checkCurrentTheme } from './checkCurrentTheme.js'
import { updateCurrentTheme } from './updateCurrentTheme.js'

export const handleThemeSwap = currentTheme => {
    const theme = checkCurrentTheme(currentTheme)
    applyTheme(theme)

    /* currentTheme pode ser um PointerEvent. Nesse caso é considerado 'object'.
    Esse bloco só vai ser executado se um click no botão que altera o tema for
    realizado. */
    if(typeof currentTheme === 'object') {
        updateCurrentTheme(theme.isLight)
    }
}