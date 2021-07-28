const todoForm = document.querySelector(".js-todo");
const todoInput = todoForm.querySelector(".todoTag");
const todoList = document.querySelector(".js-toDoList");

const getTodo = "getTodo";
const showingForm = "showing";
let todoArr = [];

const handleTodoSubmit = (event) => {
  event.preventDefault();
  let currentTodo = todoInput.value;
  printTodo(currentTodo);
  todoInput.value = "";
};

const inputTodo = () => {
  todoForm.addEventListener("submit", handleTodoSubmit);
};

const saveTodo = () => {
  localStorage.setItem("getTodo", JSON.stringify(todoArr));
};

const deleteTodo = (event) => {
  const targetEl = event.target.parentNode;
  todoList.removeChild(targetEl);

  const filterArr = todoArr.filter((el) => {
    return el.id !== Number(targetEl.id);
  });

  todoArr = filterArr;

  saveTodo();
};

const printTodo = (content) => {
  const newInput = document.createElement("li");
  const span = document.createElement("span");
  const delbtn = document.createElement("button");
  const newId = todoArr.length + 1;
  newInput.id = newId;
  delbtn.classList.add("delbtn");
  delbtn.textContent = "X";
  delbtn.addEventListener("click", deleteTodo);
  span.textContent = content;
  newInput.appendChild(span);
  newInput.appendChild(delbtn);

  todoList.appendChild(newInput);

  const todoObj = {
    text: content,
    id: newId,
  };

  todoArr.push(todoObj);

  saveTodo();
};

const printLocalTodo = (content) => {
  const localArr = JSON.parse(content);

  console.log(localArr);

  for (value of localArr) {
    printTodo(value.text);
  }
};

const loadTodoList = () => {
  const storeValue = localStorage.getItem(getTodo);

  if (storeValue) {
    printLocalTodo(storeValue);
  }

  inputTodo();
};

const initTodoList = () => {
  loadTodoList();
};

initTodoList();
