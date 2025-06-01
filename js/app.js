import { tryImportAndExecute } from './utils.js'
import { unlockLiHoverSound } from './unlockLiHoverSound.js'
import { handleDropReorder } from './handleDropReorder.js'
import { updateDownloadFileURL } from './updateDownloadFileURL.js'

const formAddTodo = document.querySelector('[data-form="addTodo"]')
const ulTodosDropdown = document.querySelector('[data-ul="todos-dropdown"]')
const ulFilterDropdown = document.querySelector('[data-ul="filter-dropdown"]')
export const buttonDownloadTodosConfig = document.querySelector('[data-button="download-todos"]')
export const currentFilteredToDos = document.querySelector('[data-current="filter"]')
export const currentDisplayedToDos = document.querySelector('[data-current="todos"]')
export const ulTodos = document.querySelector('[data-ul="todos"]')
export const buttonRenderTodos = document.querySelector('[data-button="render-todos"]')
export const inputUploadTodos = document.querySelector('[data-input="upload-todos"]')
export const buttonSwitchTheme = document.querySelector('[data-button="switch-theme"]')
const buttonCloseAlertError = document.querySelector('[data-button="close-alert"]')

const getHandleEvent = (funcName, preventDefault = false) => e => {
    if (preventDefault) {
        e.preventDefault()
    }

    tryImportAndExecute(funcName, e)
}

const handleTouchMove = e => {
    const clickedElDataset = e.target.dataset.move
    const isDatasetNotLi = clickedElDataset !== 'li'

    if (isDatasetNotLi) {
        return
    }

    e.preventDefault()
    tryImportAndExecute('handleTouchReorder', e)
}

const init = async () => {
    /* Se for a primeira vez, 'todosTheme' será null */
    const currentTheme = JSON.parse(localStorage.getItem('todosTheme'))
    const localStoredTodos = localStorage.getItem('todos') || ''

    if (localStoredTodos.length) {
        tryImportAndExecute('renderLocalStoredTodos', localStoredTodos)
    }

    if (currentTheme !== null) {
        tryImportAndExecute('handleThemeSwap', currentTheme)
    }
}

formAddTodo.addEventListener('submit', getHandleEvent('submitNewTodoInfo', true))
ulTodos.addEventListener('click', getHandleEvent('styleClickedTodo', true))
ulTodosDropdown.addEventListener('click', getHandleEvent('filterTodosByStatus'))
ulFilterDropdown.addEventListener('click', getHandleEvent('sortByAttribute'))
buttonDownloadTodosConfig.addEventListener('click', updateDownloadFileURL)
buttonRenderTodos.addEventListener('click', getHandleEvent('renderUploadedTodos'))
buttonCloseAlertError.addEventListener('click', getHandleEvent('updateAlertError'))
buttonSwitchTheme.addEventListener('click', getHandleEvent('handleThemeSwap'))
ulTodos.addEventListener('dragstart', getHandleEvent('setDraggingState'))
ulTodos.addEventListener('dragover', getHandleEvent('styleHoveredLi', true))
ulTodos.addEventListener('dragleave', getHandleEvent('unstyleHoveredLi'))
ulTodos.addEventListener('drop', handleDropReorder)
ulTodos.addEventListener('dragend', getHandleEvent('clearDraggingState'))
ulTodos.addEventListener('touchstart', getHandleEvent('setDraggingStateMobile'), { passive: true })
ulTodos.addEventListener('touchmove', handleTouchMove)
ulTodos.addEventListener('touchend', getHandleEvent('clearDraggingState'))
ulTodos.addEventListener('touchcancel', getHandleEvent('clearDraggingState'))
window.addEventListener('click', unlockLiHoverSound)
init()