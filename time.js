const startTag = document.querySelector(".js-basic");
const clockTag = document.createElement("div");
clockTag.classList.add("displayClock");
clockTag.textContent = "00:00:00";
startTag.appendChild(clockTag);

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
