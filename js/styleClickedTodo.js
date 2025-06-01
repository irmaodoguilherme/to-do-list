import { updateTodoStatusToConcluded } from './updateTodoStatusToConcluded.js'
import { updateTodoStatusToCancelled } from './updateTodoStatusToCancelled.js'
import { updateTodoStatusToTicking } from './updateTodoStatusToTicking.js'
import { updateTodoStatusToDefault } from './updateTodoStatusToDefault.js'

export const styleClickedTodo = e => {
    const availableContentTags = ['P', 'DIV', 'H5', 'LI']
    const clickedElementIsNotLiContent =
        !availableContentTags.includes(e.target.tagName)

    if (clickedElementIsNotLiContent) {
        return
    }

    const clickedLi = e.target.closest('li')
    const clickedTodoId = clickedLi.dataset.id
    const liStatusIcon = clickedLi.querySelector('i')
    const lineThrough = clickedLi.querySelector('.content-empty')
    const todoContent = lineThrough.previousElementSibling
    const todoTitleConcluded = clickedLi.querySelector('[data-title="concluded"]')
    const todoTitleCancelled = clickedLi.querySelector('[data-title="cancelled"]')
    const isLiStatusDefault = !liStatusIcon.classList.contains('bi')
    const isLiStatusConcluded = liStatusIcon.classList.contains('bi-check-lg')
    const isLiStatusCancelled = liStatusIcon.classList.contains('bi-x-lg')
    const isLiStatusTicking = liStatusIcon.classList.contains('bi-hourglass')

    if (isLiStatusDefault) {
        updateTodoStatusToConcluded(
            lineThrough,
            liStatusIcon,
            todoContent,
            todoTitleConcluded,
            clickedTodoId,
            'concluded',
            clickedLi
        )
        return
    }

    if (isLiStatusConcluded) {
        updateTodoStatusToCancelled(
            liStatusIcon,
            todoContent,
            todoTitleConcluded,
            todoTitleCancelled,
            clickedTodoId,
            'cancelled',
            clickedLi
        )
        return
    }

    if (isLiStatusCancelled) {
        updateTodoStatusToTicking(
            liStatusIcon,
            lineThrough,
            todoContent,
            todoTitleCancelled,
            clickedTodoId,
            'ticking',
            clickedLi
        )
        return
    }

    if (isLiStatusTicking) {
        updateTodoStatusToDefault(
            liStatusIcon,
            clickedTodoId,
            'default',
            clickedLi,
            'aria-label'
        )
        return
    }
}