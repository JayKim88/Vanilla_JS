const form = document.querySelector(
    ".js-form"
  ) /*querySelector: .querySelector()는 CSS 선택자로 요소를 선택하게 해줍니다. 
  주의할 점은 선택자에 해당하는 첫번째 요소만 선택한다는 것*/,
  input = document.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser" /*Local Storage */,
  SHOWING_CN = "showing"; /*Class Name*/

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  //이름 입력 function.
  event.preventDefault(); //이름을 입력하면 새로고침 되는 현상을 막기 위함. 엔터를 눌러도 글자는 사라지지 않는다.
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  /*paintGreeting은 text를 필요로 함. */
  form.classList.remove(SHOWING_CN); /*텍스트를 색칠할 경우 form을 숨겨야 함. */
  greeting.classList.add(SHOWING_CN); /*  */
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName(); //he or she is not.
  } else {
    paintGreeting(currentUser); // he or she is.
  }
}

function init() {
  loadName();
}

init();
