const toDoForm = document.querySelector(
    ".js-toDoForm"
  ) /* document.querySelector:  HTML에서 필요한 것을 얻는것 */,
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList"); /* toDoList = ul */

const TODOS_LS = "toDos";

// function filterFn(toDo) {
//   return toDo.id === 1;
// }
// filter 는 array의 모든 아이템을 통해 함수를 실행하고 filterFn이 체크된 아이템들의 array를 준다.

let toDos = []; /* 리스트 목록이 많을 수 있으므로. Array를 만들어준다. toDos = cleanToDos 로 만들어주기 위해 const->let*/

function deleteTodo(event) {
  const btn = event.target;
  const list = btn.parentNode;
  toDoList.removeChild(list);
  const cleanToDos = toDos.filter(function (toDo) {
    // console.log(toDo.id, list.id); list.id 가 스트링(숫자가 아님)인 것을 확인할 수 있다.
    return (
      toDo.id !== parseInt(list.id)
    ); /* 모든 toDos가 'list'와 같지 않을때. parseInt를 통해 String을 숫자로 바꾼다. */
  });
  toDos = cleanToDos; /* toDos: old, cleanToDos: new(list 수가 적음). 이 둘을 같게 하여 아이템들을 삭제한다.*/
  saveToDos();

  /* console.log(cleanToDos);:  .target 을 붙이면 콘솔창에 <button>이 계속 뜬다. father 가 누군지 알기 위해 console.dir 을 적용.-> parentNode(father)
  console.log(event.target.parentNode) -> li id = ... 로 조회됨. 그 다음  지워야할 li 인 btn. parantNode 를 만든다.
  그 후, toDoList.removeChild(li) 하면 리스트들이 제거가능해 진다. 
  */
}

function saveToDos() {
  localStorage.setItem(
    TODOS_LS,
    JSON.stringify(toDos)
  ); /* JSON.stingify 는 자바스크립트의 object를 string으로 바꿔준다. */
}

function paintToDo(text) {
  const list = document.createElement("li"); /* HTML에 필요한 요소를 만들고 메모리 할당. */
  const delBtn = document.createElement("button"); /* HTML에 필요한 요소를 만들고 메모리 할당. */
  const span = document.createElement("span"); /* HTML에 필요한 요소를 만들고 메모리 할당. */
  const newId = toDos.length + 1; /* 촤초 toDos Array의 갯수는 0개. text를 추가하면 +1 된 값이 id가 된다. */
  
  span.id = "content"
  delBtn.id = "delBtn";
  delBtn.innerText = "❌"; 
  span.innerText = text; 
  
  delBtn.addEventListener("click", deleteTodo);
  
  list.appendChild(delBtn); 
  list.appendChild(span); 
  list.id = newId; /* list에도 ID 번호를 부여한다. (기존 리스트 수 + 1 )을 새 번호로 부여. */
  toDoList.appendChild(list);
  const toDoObj = { text: text, id: newId };
  toDos.push(toDoObj); 
  
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();

  const currentValue = toDoInput.value; /*Input창의 입력된 값이 곧 Value. */
  if (currentValue.replace(/\s/g, "").length === 0) {
    alert("내용을 기입해 주세요");
    return;
  }
  if(toDos.length >= 10){
    alert("추가한 일들을 먼저 끝내주세요 😗");
    return;
  }
  paintToDo(currentValue);
  toDoInput.value = ""; /* 타입 엔터 치면 화면의 글자는 사라진다. */
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);

  if (loadedToDos !== null) {
    // console.log(loadedToDos); string , objective 형태를 비교할 수 있다.
    const parsedToDos = JSON.parse(
      loadedToDos
    ); /* Javascript의 String을 object로 변경시켜준다. */
    // console.log(parsedToDos); string , objective 형태를 비교할 수 있다.
    parsedToDos.forEach(function (toDo) {
      // toDo: 각 아이템의 value로 명칭은 임의로 정할수 있다.
      paintToDo(toDo.text);
    }); /* forEach: array 에 담겨있는 것을 각각 한번씩 함수 실행시키는 것  */
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener(
    "submit",
    handleSubmit
  ); /*특정 이벤트 발생 시 특정 함수(여기서 handleSubmit)를 실행시킨다 */
}

init();
