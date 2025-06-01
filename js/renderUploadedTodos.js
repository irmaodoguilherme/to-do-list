import { inputUploadTodos, ulTodos } from './app.js'
import { getTodosFragment } from './getTodosFragment.js'

export const renderUploadedTodos = () => {
    const file = inputUploadTodos.files[0]

    if (file) {
        const fileReader = new FileReader()

        const removeFileReaderEvents = () => {
            fileReader.removeEventListener('error', logError)
            fileReader.removeEventListener('load', logLoad)
        }

        const logError = e => {
            console.log(e)
            removeFileReaderEvents()
        }

        const logLoad = e => {
            const uploadedTodos = JSON.parse(e.target.result)
            const documentFragment = getTodosFragment(uploadedTodos)

            ulTodos.replaceChildren(documentFragment)
            localStorage.setItem('todos', e.target.result)
            removeFileReaderEvents()
        }

        fileReader.addEventListener('error', logError)
        fileReader.addEventListener('load', logLoad)
        fileReader.readAsText(file)
    }
}