import { addClasses, removeClasses } from './utils.js'

export const updateAlertError = (errorName, errorMessage) => {
    const alertErrorMessage = document.querySelector('[data-paragraph="error"]')
    alertErrorMessage.textContent = `${errorName}: ${errorMessage}`

    displayAlertError()
}

const displayAlertError = () => {
    const alertError = document.querySelector('[data-container="error"]')
    addClasses(alertError, 'show')
}

export const closeAlertError = () => {
    const alertError = document.querySelector('[data-container="error"]')
    removeClasses(alertError, 'show')
}