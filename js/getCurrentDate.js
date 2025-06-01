import { formatDate } from './formatDate.js'

const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
]

export const getCurrentDate = () => {
    const dateNow = new Date()
    const monthDay = dateNow.getDate()
    const monthNumber = dateNow.getMonth()
    const fullYear = dateNow.getFullYear()
    const hours = dateNow.getHours()
    const minutes = dateNow.getMinutes()

    return formatDate(monthDay, monthNumber, fullYear, hours, minutes)
}