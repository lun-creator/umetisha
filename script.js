// Countdown timer code
const countdownDate = new Date("Jan 1,2026 00:00:00").getTime()
const timerElement = document.getElementById("timer")

function updateCountdown() {
    const now = new Date().getTime()
    const distance = countdownDate-now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(distance % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    const minutes = Math.floor(distance % (1000 * 60 * 60))/(1000 * 60));
    const seconds = Math.floor(distance % (1000 * 60))/(1000);
    
    timerElement.innerHTML = '${days}d ${hours}h ${minutes}m ${seconds}s';

   if (distance < 0) {
       clearInterval(timeinterval);
       timerElement.HTML = "HAPPY NEW YEAR🎉🎉";
       // Add a celebration effect,eg fireworks or animation
      document.body.style.backgroundColor = "#1abc9c";
    }
}
// Update the countdown every 1 second
const timeInterval = setInterval(updateCountdown,1000);

//Resolution Form handling
const form = document.getElementById("resolutionForm");
const messageElement = document.getElementById("message");

form.AddEventListener("submit", function(event) {
  event.preventDefault();

const resolution = document.getElementById("resolutionForm");
if (resolution){
   messageElement.innerHTML ="Your resolution was submitted";
} else {
   messageElement.innerHTML="please enter your resolution";
}
  form.reset(); // clear the input field
});