function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};


const startBtn=document.querySelector("[data-start]");
const stopBtn=document.querySelector("[data-stop]");
const bodyColor=document.querySelector("body");

let timerId = null;

startBtn.addEventListener("click",startColorChange);
stopBtn.addEventListener("click", stopColorChange);

function startColorChange() {
timerId = setInterval(getBodyColor,1000);
startBtn.toggleAttribute("disabled");
};
function stopColorChange() {
clearInterval(timerId);
startBtn.removeAttribute("disabled");
};
function getBodyColor() {
bodyColor.style.backgroundColor = getRandomHexColor();
};

