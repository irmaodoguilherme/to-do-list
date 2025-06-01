export const formatDate = (day, month, year, hours, minutes) => {
    const formattedDay = day >= 10 ? day : `0${day}`
    const formattedMonth = month >= 10 ? month : `0${month}`
    const formattedHours = hours >= 10 ? hours : `0${hours}`
    const formattedMinutes = minutes >= 10 ? minutes : `0${minutes}`
    
    return `${formattedDay}/${formattedMonth}/${year} ${formattedHours}:${formattedMinutes}`
}