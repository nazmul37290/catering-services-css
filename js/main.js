function showTime() {
  const date = new Date();
  const convertedTime = date.toLocaleTimeString();
  const display = document.getElementById("displayTime");
  display.innerText = convertedTime;
}

setInterval(showTime, 1000);
