const startTag = document.querySelector(".js-basic");
const clockTag = document.createElement("h1");
clockTag.textContent = "00:00:00";
startTag.appendChild(clockTag);

const test = document.createElement("h1");
test.textContent = "added";

startTag.classList.add("test");

const getTime = () => {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  clockTag.textContent = `${hour} : ${min < 10 ? `0${min}` : min} : ${
    sec < 10 ? `0${sec}` : sec
  }`;
};

const init = () => {
  setInterval(getTime, 1000);
};

init();
