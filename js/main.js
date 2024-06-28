function showTime() {
  const date = new Date();
  const convertedTime = date.toLocaleString("en-GB");
  const display = document.getElementById("displayTime");
  display.innerText = convertedTime;
}

setInterval(showTime, 1000);

// faq related scripts

const questions = document.getElementsByClassName("question");
console.log(questions);
for (const question of questions) {
  question.addEventListener("click", function () {
    const answer = question.nextElementSibling;
    console.log(answer);
    answer.classList.toggle("hidden");
  });
}
