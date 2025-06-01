const addClasses = (el, ...classes) => el.classList.add(...classes)
const removeClasses = (el, ...classes) => el.classList.remove(...classes)
const removeAttributes = (el, ...attributes) => {
    attributes.forEach(attribute => {
        el.removeAttribute(attribute)
    })
}

const setAttributes = (el, attributes) => {
    const attributesAsArray = Object.entries(attributes)
    attributesAsArray.forEach(([name, value]) => el.setAttribute(name, value))
}

const to = async promise => await promise
    .then(result => [null, result])
    .catch(error => [error])

const tryImportAndExecute = async (funcName, e = null) => {
    try {
        const [error, module] = await to(import(`./${funcName}.js`))

        if (error) {
            throw error
        }

        const func = module[funcName]

        if (typeof func !== 'function') {
            throw new TypeError(`${funcName} is not a function`)
        }

        func(e)
    } catch ({ name, message }) {
        const { updateAlertError } = await import('./updateAlertError.js')
        updateAlertError(name, message)
    }
}

const getLightThemePreset = () => ({
    'isLight': true,
    borderToRemove: 'border-secondary',
    textToRemove: 'text-white',
    borderToAdd: 'border-black',
    textToAdd: 'text-black',
    iconToRemove: 'bi-sun-fill',
    pbgToRemove: 'p-bg-dark',
    iconToAdd: 'bi-moon',
    pbgToAdd: 'p-bg-light',
    bgToRemove: 'bg-white',
    bgToAdd: 'bg-black'
})

const getDarkThemePreset = () => ({
    'isLight': false,
    borderToRemove: 'border-black',
    textToRemove: 'text-black',
    borderToAdd: 'border-secondary',
    textToAdd: 'text-white',
    iconToRemove: 'bi-moon',
    pbgToRemove: 'p-bg-light',
    iconToAdd: 'bi-sun-fill',
    pbgToAdd: 'p-bg-dark',
    bgToRemove: 'bg-black',
    bgToAdd: 'bg-white'
})

export {
    addClasses,
    removeClasses,
    removeAttributes,
    setAttributes,
    tryImportAndExecute,
    getLightThemePreset,
    getDarkThemePreset
}