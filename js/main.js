function showTime() {
  const date = new Date();
  const convertedTime = date.toLocaleString("en-GB");
  const display = document.getElementById("displayTime");
  display.innerText = convertedTime;
}

setInterval(showTime, 1000);
