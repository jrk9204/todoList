//이미지를 API로 받아온다면 addEventListener로 loading 하는게 좋음.

const container = document.querySelector("body");

const printImg = (pickImg) => {
  const image = document.createElement("img");
  image.classList.add("backgroundImg");
  image.src = `img/${pickImg}.jpg`;

  container.appendChild(image);
};

const randomNum = () => {
  const number = Math.random() * 6;

  return Math.floor(number);
};

const initBackGround = () => {
  const imgNum = randomNum();
  printImg(imgNum);
};

initBackGround();
