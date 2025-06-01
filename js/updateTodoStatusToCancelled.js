import { removeStatusIconConcludedStyle } from './removeStatusIconConcludedStyle.js'
import { styleStatusIconToCancelled } from './styleStatusIconToCancelled.js'
import { blurTodoContent } from './blurTodoContent.js'
import { hideStatusTitle } from './hideStatusTitle.js'
import { displayStatusTitle } from './displayStatusTitle.js'
import { updateLocalStoredItemStatus } from './updateLocalStoredItemStatus.js'
import { setAttributes } from './utils.js'

export const updateTodoStatusToCancelled = (
    liStatusIcon,
    todoContent,
    todoTitleConcluded,
    todoTitleCancelled,
    clickedTodoId,
    newTodoStatus,
    clickedLi
) => {
    removeStatusIconConcludedStyle(liStatusIcon)
    styleStatusIconToCancelled(liStatusIcon)
    blurTodoContent(todoContent)
    hideStatusTitle(todoTitleConcluded)
    displayStatusTitle(todoTitleCancelled)
    updateLocalStoredItemStatus(clickedTodoId, newTodoStatus)
    setAttributes(clickedLi, {'data-current': 'cancelled'})
    setAttributes(clickedLi, {'aria-label': 'Todo cancelled'})
}