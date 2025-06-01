import { removeStatusIconCancelledStyle } from './removeStatusIconCancelledStyle.js'
import { styleStatusIconToTicking } from './styleStatusIconToTicking.js'
import { removeLineThroughLi } from './removeLineThroughLi.js'
import { clearTodoContent } from './clearTodoContent.js'
import { hideStatusTitle } from './hideStatusTitle.js'
import { updateLocalStoredItemStatus } from './updateLocalStoredItemStatus.js'
import { setAttributes } from './utils.js'

export const updateTodoStatusToTicking = (
    liStatusIcon,
    lineThrough,
    todoContent,
    todoTitleCancelled,
    clickedTodoId,
    newTodoStatus,
    clickedLi
) => {
    removeStatusIconCancelledStyle(liStatusIcon)
    styleStatusIconToTicking(liStatusIcon)
    removeLineThroughLi(lineThrough)
    clearTodoContent(todoContent)
    hideStatusTitle(todoTitleCancelled)
    updateLocalStoredItemStatus(clickedTodoId, newTodoStatus)
    setAttributes(clickedLi, {'data-current': 'ticking'})
    setAttributes(clickedLi, {'aria-label': 'Todo ticking'})
}