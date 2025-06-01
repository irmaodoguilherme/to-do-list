const sounds = {
    'hover': './src/sounds/hover.wav',
    'create': './src/sounds/create.wav',
    'delete': './src/sounds/delete.wav'
}

export const playSound = sound => {
    const soundUrl = sounds[sound]
    const audio = new Audio(soundUrl)
    audio.currentTime = 0
    audio.play()
}