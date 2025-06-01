export const updateDownloadFileURL = e => {
    const localStoredTodos = localStorage.getItem('todos')
    const blob = new Blob([localStoredTodos], { type: 'application/json' })
    const blobURL = URL.createObjectURL(blob)

    e.target.setAttribute('href', blobURL)

    setTimeout(() => URL.revokeObjectURL(blobURL), 150)
}