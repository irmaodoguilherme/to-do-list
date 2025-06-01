import { getLiTodo } from './getLiTodo.js'

export const getTodosFragment = todos => {
    const documentFragment = document.createDocumentFragment()

    todos.forEach(({
        cleanedTodoTitle,
        cleanedTodoDesc,
        currentDate,
        expireDate,
        id,
        status
    }) => {
        const liTodo = getLiTodo(
            cleanedTodoTitle,
            cleanedTodoDesc,
            currentDate,
            expireDate,
            id,
            status
        )

        documentFragment.append(liTodo)
    })

    return documentFragment
}