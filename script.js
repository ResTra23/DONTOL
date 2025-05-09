let score = 0

const tolong = new Audio("dittolongin.mp3")
const sfx = new Audio("on-or-off-light-switch-tap.mp3")
const scoreDisplay = document.getElementById("jumlah")
const dennis = document.getElementById("target")

dennis.addEventListener("click", function() {
    score += 1
    scoreDisplay.textContent = score

    sfx.currentTime = 0
    sfx.play()
})

let mulai = false

dennis.addEventListener("click", function() {
    if (!mulai) {
        mulai = true
        setInterval(() => {
           tolong.currentTime = 0
           tolong.play() 
        }, 15000);
    }
})
