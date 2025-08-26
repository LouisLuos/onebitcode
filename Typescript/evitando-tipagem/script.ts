function sendSpaceship(spaceship: {pilot: string, copilot?: string}) {
    return spaceship
}


const spaceship = {
    pilot: "Luiz",
    copilot: "deb",
}

sendSpaceship({pilot: spaceship.pilot, copilot: spaceship.copilot})
sendSpaceship(spaceship)
console.log(sendSpaceship)

let input: unknown


