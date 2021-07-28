const formTag = document.querySelector(".js-info");
const inputTag = formTag.querySelector("input");
const greet = document.querySelector(".greeting");

const findName = "userName";
const showingName = "showing";

const saveName = (name) => {
  localStorage.setItem(findName, name);
};

const handleSubmit = (event) => {
  event.preventDefault();
  const currentValue = inputTag.value;

  saveName(currentValue);
  paintGreeting(currentValue);
};

const askName = () => {
  formTag.classList.add(showingName);
  formTag.addEventListener("submit", handleSubmit);
};

const paintGreeting = (text) => {
  formTag.classList.remove(showingName);
  greet.classList.add(showingName);
  greet.textContent = `Hello, ${text}`;
};

const loadName = () => {
  const checkStorage = localStorage.getItem(findName);

  if (checkStorage) {
    paintGreeting(checkStorage);
  } else {
    askName();
  }
};

const initUerName = () => {
  loadName();
};

initUerName();
