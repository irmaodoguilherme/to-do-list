export const appendTodoWithoutExpireDate = (
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
) => {
    dateContainer.append(todoCurrentDate, separator)
    contentContainer.append(dateContainer, detailsContainer)
    todoWrapper.append(contentContainer, lineThrough, titleConcluded, titleCancelled)
    todoContainer.append(statusIcon, todoWrapper, iconContainer)
}