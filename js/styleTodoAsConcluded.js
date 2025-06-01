import { animateLineThroughLi } from './animateLineThroughLi.js'
import { styleStatusIconToConcluded } from './styleStatusIconToConcluded.js'
import { blurTodoContent } from './blurTodoContent.js'
import { displayStatusTitle } from './displayStatusTitle.js'

export const styleToDoAsConcluded = (
    lineThrough,
    statusIcon,
    contentContainer,
    titleConcluded
) => {
    animateLineThroughLi(lineThrough)
    styleStatusIconToConcluded(statusIcon)
    blurTodoContent(contentContainer)
    displayStatusTitle(titleConcluded)
}