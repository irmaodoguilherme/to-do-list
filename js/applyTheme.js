import { removeClasses, addClasses } from './utils.js'
import { buttonSwitchTheme } from './app.js'

export const applyTheme = themePreset => {
    const {
        borderToRemove,
        textToRemove,
        borderToAdd,
        textToAdd,
        iconToRemove,
        pbgToRemove,
        iconToAdd,
        pbgToAdd,
        bgToRemove,
        bgToAdd,
    } = themePreset
    const body = document.body
    const elsWithBorderToRemove = [...body.querySelectorAll(`.${borderToRemove}`)]
    const elsWithTextToRemove = [...body.querySelectorAll(`.${textToRemove}`)]
    const elsWithBGToRemove = [...body.querySelectorAll(`.${bgToRemove}`)]

    removeClasses(buttonSwitchTheme, iconToRemove, textToRemove)
    removeClasses(body, pbgToRemove, textToRemove)

    addClasses(buttonSwitchTheme, iconToAdd, textToAdd)
    addClasses(body, pbgToAdd, textToAdd)

    elsWithBorderToRemove.forEach(el => {
        removeClasses(el, borderToRemove)
        addClasses(el, borderToAdd)
    })

    elsWithTextToRemove.forEach(el => {
        removeClasses(el, textToRemove)
        addClasses(el, textToAdd)
    })

    elsWithBGToRemove.forEach(el => {
        removeClasses(el, bgToRemove)
        addClasses(el, bgToAdd)
    })
}