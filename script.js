function displayTime() {
  var dateTime = new Date();
  var hours = dateTime.getHours();
  var minutes = dateTime.getMinutes();
  var seconds = dateTime.getSeconds();
  var session = document.getElementById("session");

  if (hours < 10) {
    hours = "0" + dateTime.getHours();
  }
  if (minutes < 10) {
    minutes = "0" + dateTime.getMinutes();
  }
  if (seconds < 10) {
    seconds = "0" + dateTime.getSeconds();
  }

  if (hours >= 12) {
    session.innerHTML = "PM";
  } else {
    session.innerHTML = "AM";
  }
  if (hours > 12) {
    hours = hours - 12;
  }

  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

setInterval(displayTime, 10);
