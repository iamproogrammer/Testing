// Set the date we're counting down to
var countDownDate = new Date("jan 15, 2021 15:37:25").getTime();

// Update the count down every 1 second
function newYear() {
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var gap = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;

  var d = Math.floor(gap / (day));
  var h = Math.floor((gap % (day)) / (hour));
  var m = Math.floor((gap % (hour)) / (minute));
  var s = Math.floor((gap % (minute)) / second);

  // Output the result in an element with id="demo"
  document.getElementById('day').innerText = d;
  document.getElementById('hour').innerText = h;
  document.getElementById('minute').innerText = m;
  document.getElementById('second').innerText = s;
}

// If the count down is over, write some text
setInterval(function() {
  newYear();
}, 1000)
