setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
  const currentDate = new Date();
  const secondsR = currentDate.getSeconds() / 60;
  const minutesR = (secondsR + currentDate.getMinutes()) / 60;
  const hoursR = (minutesR + currentDate.getHours()) / 12;
  setRotation(secondHand, secondsR);
  setRotation(hourHand, hoursR);
  setRotation(minuteHand, minutesR);
}

function setRotation(element, rotationR) {
  element.style.setProperty("--rotation", rotationR * 360);
}

setClock();
