import { removeTodo } from './removeTodo.js'
import { getRandomId } from './getRandomId.js'
import { styleToDoAsConcluded } from './styleTodoAsConcluded.js'
import { styleStatusIconToTicking } from './styleStatusIconToTicking.js'
import { styleStatusIconToDefault } from './styleStatusIconToDefault.js'
import { setAttributes, addClasses } from './utils.js'
import { styleTodoAsCancelled } from './styleTodoAsCancelled.js'
import { appendTodoWithoutExpireDate } from './appendTodoWithoutExpireDate.js'
import { appendTodoWithExpireDate } from './appendTodoWithExpireDate.js'

export const getLiTodo = (
    title,
    desc = '',
    currentDate,
    expireDate = false,
    id = false,
    status = 'default'
) => {
    const isLight = JSON.parse(localStorage.getItem('todosTheme'))

    const todoContainer = document.createElement('li')
    addClasses(
        todoContainer,
        'd-flex',
        'w-fit',
        'pointer',
        'gap-4',
        'border',
        'border-1',
        'rounded-1',
        isLight ? 'border-black' : 'border-secondary',
        'px-4',
        'py-4',
        'w-100',
        'max-w-fit',
        'mobile-li',
        'fade'
    )
    setAttributes(todoContainer, {
        'data-id': id || getRandomId(),
        'data-current': status,
        'draggable': true,
        'aria-live': 'polite'
    })

    const detailsContainer = document.createElement('div')
    addClasses(detailsContainer, 'w-fit', 'mx-auto')

    const dateContainer = document.createElement('div')
    addClasses(
        dateContainer,
        'd-flex',
        'gap-4',
        'h-fit',
        'align-self-center',
        'mobile-li-content'
    )

    const todoWrapper = document.createElement('div')
    addClasses(todoWrapper, 'position-relative')

    const contentContainer = document.createElement('div')
    addClasses(contentContainer, 'd-flex', 'gap-2', 'flex-column')

    const iconContainer = document.createElement('div')
    addClasses(iconContainer, 'd-flex', 'mobile-icon-container')

    const lineThrough = document.createElement('div')
    addClasses(
        lineThrough,
        'd-none',
        'h-2px',
        'position-absolute',
        'top-50',
        'start-0',
        'w-0',
        isLight ? 'bg-black' : 'bg-white',
        'content-empty'
    )
    setAttributes(lineThrough, { 'aria-hidden': true })

    const buttonRemoveTodo = document.createElement('button')
    addClasses(
        buttonRemoveTodo,
        'bg-transparent',
        isLight ? 'text-black' : 'text-white',
        'rounded-1',
        'px-3',
        'h-fit',
        'align-self-start',
        'py-3',
        'btn',
        'border-1',
        'mx-auto',
        'button',
        'mobile-remove-button',
        isLight ? 'border-black' : 'border-secondary'
    )
    setAttributes(buttonRemoveTodo, { 'aria-label': 'Delete' })

    const iconMove = document.createElement('i')
    addClasses(
        iconMove,
        'bi',
        'bi-arrows-move',
        'h-fit',
        'align-self-center',
        'ms-auto',
        'px-3',
        'py-3',
        'me-2',
        'd-none',
        'mobile-visibility'
    )
    setAttributes(iconMove, { 'data-move': 'li', 'aria-label': 'Move' })

    const iconDelete = document.createElement('i')
    addClasses(iconDelete, 'bi', 'bi-x-lg')

    const todoCurrentDate = document.createElement('time')
    todoCurrentDate.textContent = currentDate
    setAttributes(todoCurrentDate, { 'aria-label': `Created on: ${currentDate}` })

    const todoTitle = document.createElement('h5')
    todoTitle.textContent = title
    addClasses(todoTitle, 'm-0', 'w-fit', 'mx-auto')

    const titleConcluded = document.createElement('h5')
    titleConcluded.setAttribute('data-title', 'concluded')
    titleConcluded.textContent = 'Concluded!'
    addClasses(
        titleConcluded,
        'text-success',
        'title-border',
        'bold-font',
        'd-none',
        'position-absolute',
        'inset-0',
        'm-auto',
        'h-fit',
        'w-fit'
    )
    setAttributes(titleConcluded, { 'aria-hidden': true })

    const titleCancelled = document.createElement('h5')
    titleCancelled.setAttribute('data-title', 'cancelled')
    titleCancelled.textContent = 'Cancelled!'
    addClasses(
        titleCancelled,
        'text-danger',
        'title-border',
        'bold-font',
        'd-none',
        'position-absolute',
        'inset-0',
        'm-auto',
        'h-fit',
        'w-fit'
    )
    setAttributes(titleCancelled, { 'aria-hidden': true })

    const todoDesc = document.createElement('p')
    todoDesc.textContent = desc
    addClasses(todoDesc, 'm-0', 'collapse')

    const collapsible = new bootstrap.Collapse(todoDesc, {
        toggle: false
    })

    const separator = document.createElement('p')
    separator.textContent = '—'
    addClasses(separator, 'm-0', 'h-fit', 'align-self-center', 'mx-auto')

    const statusIcon = document.createElement('i')
    addClasses(statusIcon, 'mx-auto')
    setAttributes(statusIcon, { 'aria-hidden': true })

    detailsContainer.append(todoTitle, todoDesc)
    buttonRemoveTodo.append(iconDelete)
    iconContainer.append(iconMove, buttonRemoveTodo)

    switch (status) {
        case 'concluded':
            styleToDoAsConcluded(
                lineThrough,
                statusIcon,
                contentContainer,
                titleConcluded
            )
            break;
        case 'cancelled':
            styleTodoAsCancelled(
                lineThrough,
                statusIcon,
                contentContainer,
                titleCancelled
            )
            break;
        case 'ticking':
            styleStatusIconToTicking(statusIcon)
            break;
        default:
            styleStatusIconToDefault(statusIcon)
            break;
    }

    if (expireDate) {
        appendTodoWithExpireDate(
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
        )
    } else {
        appendTodoWithoutExpireDate(
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
            iconContainer
        )
    }

    contentContainer.addEventListener('mouseenter', () => {
        collapsible.show()
    })

    contentContainer.addEventListener('mouseleave', () => {
        collapsible.hide()
    })

    buttonRemoveTodo.addEventListener('click', removeTodo)

    setTimeout(() => addClasses(todoContainer, 'show'), 150)

    return todoContainer
}