import { removeStatusIconTickingStyle } from './removeStatusIconTickingStyle.js'
import { styleStatusIconToDefault } from './styleStatusIconToDefault.js'
import { updateLocalStoredItemStatus } from './updateLocalStoredItemStatus.js'
import { removeAttributes, setAttributes } from './utils.js'

export const updateTodoStatusToDefault = (
    liStatusIcon,
    clickedTodoId,
    newTodoStatus,
    clickedLi,
    newAriaLabelValue
) => {
    removeStatusIconTickingStyle(liStatusIcon)
    styleStatusIconToDefault(liStatusIcon)
    updateLocalStoredItemStatus(clickedTodoId, newTodoStatus)
    removeAttributes(clickedLi, newAriaLabelValue)
    setAttributes(clickedLi, {'data-current': 'default'})
}
