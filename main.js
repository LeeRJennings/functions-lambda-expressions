const broadcast = (instructions) => {
    instructions()
}

const announceRain = () => {
    console.log("Grab an umbrella. It's going to rain today.")
}

const announceClear = () => {
    console.log("Grab your shades and sunscreen. It's going to be sunny and hot today.")
}

const weathertStation = (humid) => {
    if (humid >= 95) {
        announceRain()
    } else {
        announceClear()
    }
}

weathertStation(100)
weathertStation(90)

broadcast(weathertStation(92))