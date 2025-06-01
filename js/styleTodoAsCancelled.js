import { animateLineThroughLi } from './animateLineThroughLi.js'
import { styleStatusIconToCancelled } from './styleStatusIconToCancelled.js'
import { blurTodoContent } from './blurTodoContent.js'
import { displayStatusTitle } from './displayStatusTitle.js'

export const styleTodoAsCancelled = (
    lineThrough,
    statusIcon,
    contentContainer,
    titleCancelled
) => {
    animateLineThroughLi(lineThrough)
    styleStatusIconToCancelled(statusIcon)
    blurTodoContent(contentContainer)
    displayStatusTitle(titleCancelled)
}