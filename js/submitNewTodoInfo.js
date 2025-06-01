import { renderTodo } from './renderTodo.js'
import { clean } from './clean.js'
import { getLiTodo } from './getLiTodo.js'
import { storeTodoLocally } from './storeTodoLocally.js'
import { getRandomId } from './getRandomId.js'
import { getCurrentDate } from './getCurrentDate.js'
import { playSound } from './playSound.js'

export const submitNewTodoInfo = e => {
    const todoTitle = e.target.title.value.trim()
    const todoExpireDate = e.target.expire.value.trim()
    const todoDesc = e.target.description.value.trim()
    const cleanedExpireDate = clean(todoExpireDate)
    const cleanedTodoTitle = clean(todoTitle)
    const cleanedTodoDesc = clean(todoDesc)

    if (cleanedExpireDate.length) {
        const [date, time] = cleanedExpireDate.split('T')
        const [year, month, day] = date.split('-')

        if (year.length > 4) {
            throw new Error(`Ano inválido: ${year}`)
        }

        if (month.length > 2) {
            throw new Error(`Mês inválido: ${month}`)
        }


        const currentDate = getCurrentDate()
        const expireDateObj = { day, month, year, time }
        const liTodo = getLiTodo(
            cleanedTodoTitle,
            cleanedTodoDesc,
            currentDate,
            expireDateObj,
            false,
            'ticking'
        )

        renderTodo(liTodo)
        storeTodoLocally({
            cleanedTodoTitle,
            cleanedTodoDesc,
            currentDate,
            expireDate: expireDateObj,
            id: liTodo.dataset.id,
            status: 'ticking'
        })
    } else {
        const currentDate = getCurrentDate()
        const liTodo = getLiTodo(cleanedTodoTitle, cleanedTodoDesc, currentDate)

        renderTodo(liTodo)
        storeTodoLocally({
            cleanedTodoTitle,
            cleanedTodoDesc,
            currentDate,
            id: liTodo.dataset.id,
            status: 'default'
        })
    }

    playSound('create')
    e.target.title.focus()
}