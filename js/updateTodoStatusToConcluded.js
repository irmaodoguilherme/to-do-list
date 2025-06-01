import { animateLineThroughLi } from './animateLineThroughLi.js'
import { removeStatusIconDefaultStyle } from './removeStatusIconDefaultStyle.js'
import { styleStatusIconToConcluded } from './styleStatusIconToConcluded.js'
import { blurTodoContent } from './blurTodoContent.js'
import { displayStatusTitle } from './displayStatusTitle.js'
import { updateLocalStoredItemStatus } from './updateLocalStoredItemStatus.js'
import { setAttributes } from './utils.js'

export const updateTodoStatusToConcluded = (
    lineThrough,
    liStatusIcon,
    todoContent,
    todoTitleConcluded,
    clickedTodoId,
    newTodoStatus,
    clickedLi
) => {
    animateLineThroughLi(lineThrough)
    removeStatusIconDefaultStyle(liStatusIcon)
    styleStatusIconToConcluded(liStatusIcon)
    blurTodoContent(todoContent)
    displayStatusTitle(todoTitleConcluded)
    updateLocalStoredItemStatus(clickedTodoId, newTodoStatus)
    setAttributes(clickedLi, {'data-current': 'concluded'})
    setAttributes(clickedLi, {'aria-label': 'Todo concluded'})
}