import { currentFilteredToDos, ulTodos } from './app.js'
import { getTodosFragment } from './getTodosFragment.js'

export const sortByAttribute = e => {
    e.preventDefault()

    const desiredAttribute = e.target.textContent
    currentFilteredToDos.textContent = desiredAttribute

    const filter = {
        'Alphabet': 'cleanedTodoTitle',
        'Created': 'currentDate',
        'Ticking': 'expireDate'
    }

    const localStoredTodos = JSON.parse(localStorage.getItem('todos'))
    const sortedLocalStoredTodos = localStoredTodos.sort((a, b) => {
        const propToBeFiltered = filter[desiredAttribute]
        const valueA = a[propToBeFiltered]
        const valueB = b[propToBeFiltered]

        if (valueA === valueB) {
            return 0
        }

        if (desiredAttribute === 'Alphabet') {
            return valueA.localeCompare(valueB, 'pt-BR')
        } else {
            const dateA = parseDate(valueA)
            const dateB = parseDate(valueB)
            return dateA - dateB
        }
    })

    const documentFragment = getTodosFragment(sortedLocalStoredTodos)
    ulTodos.replaceChildren(documentFragment)
}

const parseDate = dateObj => {
    if (!dateObj) {
        return Infinity
    }

    const { day, month, year, time } = dateObj
    const newDate = new Date(`${year}-${month}-${day}T${time}`)
    return newDate.getTime()
}