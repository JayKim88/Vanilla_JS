const form = document.querySelector(
    ".js-form"
  ) 
  /* Document 객체란 웹 페이지 그 자체를 의미. 웹 페이지에 존재하는 HTML요소에 접근할 수 있다. 
  querySelector: .querySelector()는 CSS 선택자로 요소를 선택하게 해주는데
  선택자에 해당하는 첫번째 요소만 가져온다. 가져올 수 있는 요소: class, tag, id 등등 
  quertSelectorAll: 모든걸 가져온다. 클래스명에 따른 엘레먼트들을 가져오는데 Array를 준다. */,
  input = document.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS =
    "currentUser" /*Local Storage. Key 값이 변동 가능하도록 변수로 만든다. */,
  SHOWING_CN =
    "showing"; /*Class Name 은 Value를 의미한다. 즉. Key:currentUser, Value: 김용재     */

function saveName(text) {
  localStorage.setItem(
    USER_LS,
    text
  ); /* 정보들을 웹페이지의 localStorage에 저장하기. Key: currentUser Value: text(기입한 것.) */
}

function handleSubmit(event) {
  //이름 제출 function.
  event.preventDefault(); //이름을 입력하면 새로고침 되는 현상을 막기 위함. 엔터를 눌러도 글자는 사라지지 않는다.
  const currentValue = input.value; /*value 기입하기. */
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {

  form.classList.add(SHOWING_CN); 
  form.addEventListener("submit", handleSubmit); 
  /* 기입된 이름을 제출할 수 있게 만들기. 대상객체.addEventListener(이벤트명, 실행할이벤트리스너, 이벤트전파방식)
  이벤트 리스너란 이벤트가 발생했을 때 그 처리를 담당하는 함수를 가리키며, 이벤트 핸들러(event handler)라고도 합니다.
지정된 타입의 이벤트가 특정 요소에서 발생하면, 웹 브라우저는 그 요소에 등록된 이벤트 리스너를 실행시킵니다.*/
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN); /* 텍스트(기존 유저 이름)를 색칠할 경우 form(입력창)을 숨겨야 함. */
  greeting.classList.add(SHOWING_CN); /* 저장되어 있는 Value를 greeting에 추가한다. */
  greeting.innerText = `오늘 컨디션은 어떠세요, ${text} 님?`; /*greeting 부분에 글자 넣기. 이 경우, SHOWING_CN에 해당. */
  
  const mentionDiv = document.createElement("div");
  const todoInput = document.createElement("input");
  const todoForm = document.querySelector(".js-toDoForm");
  
  mentionDiv.innerText = "해야할 일들을 적어주세요 😊";
  todoInput.className = "inputBox";
  todoInput.placeholder = "이곳에 하나씩 적어주세요";
  todoInput.type = "text";
  greeting.appendChild(mentionDiv);
  todoForm.appendChild(todoInput);
}

function loadName() {
  /* local storage 에 저장되어 있는 정보를 가져옴. */
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName(); //he or she is not. 저장된 CureentUser가 없을경우, 이름을 요청한다.
  } else {
    paintGreeting(currentUser); // he or she is. currentUser: localStorage에서 가져온 텍스트.
  }
}

function init() {
  loadName();
}

init();
