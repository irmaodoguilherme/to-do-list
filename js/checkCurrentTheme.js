import { getDarkThemePreset, getLightThemePreset } from './utils.js'

export const checkCurrentTheme = currentTheme => {
    const currentIsLight = JSON.parse(localStorage.getItem('todosTheme'))

    /* Como o valor que está salvo no localStorage é uma string('false/true') o
    JSON.parse o transforma em boolean(false/true).
    Esse bloco só sera executado quando a aplicação carregar e o tema claro
    estiver ativo.*/
    if(typeof currentTheme === 'boolean') {
        return !currentTheme ? getDarkThemePreset() : getLightThemePreset()
    }

    return currentIsLight ? getDarkThemePreset() : getLightThemePreset()
}