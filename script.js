const buttonStart = document.querySelector(".to-start")
const buttonStop = document.querySelector(".to-stop")
const buttonRestart = document.querySelector(".restart")

const hourCounter = document.querySelector(".hour-counter")
const minutesCounter = document.querySelector(".minutes-counter")
const secoundsCounter = document.querySelector(".secounds-counter")
const millisecoundsCounter = document.querySelector(".millisecounds-counter")

let timer = null
let millisecounds = "00"
let secounds = "00"
let minutes = "00"
let hour = "00"

function stop() {
    clearInterval(timer)
    timer = null
}

function restart() {
    stop()
    millisecounds = 0
    secounds = 0
    minutes = 0
    hour = 0

    millisecoundsCounter.innerHTML = "00"
    secoundsCounter.innerHTML = "00"
    minutesCounter.innerHTML = "00"
    hourCounter.inner = "00"
}

function format(value) {
    return String(value).padStart(2, "0")
}


function start() {
    if (timer !== null) return;

    timer = setInterval(function () {
        millisecounds++

        if (millisecounds === 100) {
            millisecounds = 0
            secounds++
        }

        if (secounds === 60) {
            secounds = 0
            minutes++
        }

        if (minutes === 60) {
            minutes = 0
            hour++
        }

        millisecoundsCounter.innerHTML = format(millisecounds)
        secoundsCounter.innerHTML = format(secounds)
        minutesCounter.innerHTML = format(minutes)
        hourCounter.innerHTML = format(hour)
    }, 10)
}



buttonStart.addEventListener("click", start)
buttonStop.addEventListener("click", stop)
buttonRestart.addEventListener("click", restart)