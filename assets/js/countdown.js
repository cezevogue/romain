const MINUTES= 60
const HOURS= 60 * MINUTES
const DAYS= 24 * HOURS

var isSoundEnabled = true;
var tickSound = document.getElementById("tickSound");
function refreshCountdown(){

    const countdown = document.querySelector('#countdown')

    const launchDate = Date.parse(countdown.dataset.time) / 1000

    const difference = launchDate - Date.now() /1000

    const diff = {
        days: Math.floor(difference / DAYS),
        hours: Math.floor(difference % DAYS / HOURS),
        minutes: Math.floor(difference % HOURS /MINUTES),
        seconds: Math.floor(difference % MINUTES)

    }

    document.getElementById('days').innerText = diff.days
    document.getElementById('hours').innerText = diff.hours
    document.getElementById('minutes').innerText = diff.minutes
    document.getElementById('seconds').innerText = diff.seconds
    window.setTimeout(()=>{window.requestAnimationFrame(refreshCountdown)},1000)

}
refreshCountdown()

function toggleSound() {
    isSoundEnabled = !isSoundEnabled;
    var soundButton = document.getElementById("soundButton");
    if (isSoundEnabled) {
      tickSound.play();
      soundButton.innerHTML = "🔈";
    } else {
      tickSound.pause();
      soundButton.innerHTML = "🔇";
    }
  }