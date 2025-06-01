import { formatExpireDate } from './formatExpireDate.js'
import { setAttributes, addClasses } from './utils.js'

export const appendTodoWithExpireDate = (
    dateContainer,
    contentContainer,
    todoWrapper,
    todoContainer,
    todoCurrentDate,
    separator,
    detailsContainer,
    lineThrough,
    titleConcluded,
    titleCancelled,
    statusIcon,
    iconContainer,
    expireDate
) => {
    const formattedExpireDate = formatExpireDate(expireDate)
    const todoExpireDate = document.createElement('time')
    todoExpireDate.textContent = formattedExpireDate
    setAttributes(todoExpireDate, { 'aria-label': `Expires on: ${formattedExpireDate}` })
    addClasses(todoExpireDate, 'm-0', 'mx-auto')

    dateContainer.append(todoCurrentDate, separator, todoExpireDate)
    contentContainer.append(dateContainer, detailsContainer)
    todoWrapper.append(contentContainer, lineThrough, titleConcluded, titleCancelled)
    todoContainer.append(statusIcon, todoWrapper, iconContainer)
}