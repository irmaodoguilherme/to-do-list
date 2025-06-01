export const formatExpireDate = (expireDate) => {
    if (!expireDate) {
        return
    }

    const { day, month, year, time } = expireDate
    const [hours, minutes] = time.split(':')

    return `${day}/${month}/${year} ${hours}:${minutes}`
}