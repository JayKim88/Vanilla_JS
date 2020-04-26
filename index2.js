/*Practice #2.1 Your first JS Function
function sayHello(name, qustion, food_name, question2, food_reason) {
  console.log(
    "Hello!",
    name,
    ".",
    qustion,
    "i like",
    food_name,
    "!",
    question2,
    food_reason
  );
}

let name = "Jay";
const question = ["what food do you like?", "why do you like the food?"];
const food = [
  { name: "pizza", reason: "no reason! just awesome" },
  { name: "hamburger", reason: "easy to buy and super fast" },
  { name: "김치찌개", reason: "it makes me remind of my mother" },
];
sayHello(name, question[0], food[2].name, question[1], food[1].reason);
*/

/* Practice #2.1.1 More Function Fun
function sayHello(name, age) {
  console.log(`Hello, ${name}. you are ${age} years old.`);
}
function sayHi(name, age) {
  console.log("Hello, " + name + ". you are " + age + " years old.");
}

sayHello("Jay", "30");
sayHi("Mindy", "32");

function sayAgain(name, age) {
  return `Hello ${name} your age is ${age} years old`;
}

const greetingJay = sayAgain("Jay", 30);

console.log(greetingJay); // return Value 를 콘솔창에 표시.fucntion에 return을 적용해야 함.

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const plus = calculator.plus(5, 5);
const minus = calculator.minus(6, 5);
const multiply = calculator.multiply(5, 5);
const divide = calculator.divide(5, 5);
const power = calculator.power(2, 5);

console.log(`plus: ${plus} 
minus: ${minus} 
multiply: ${multiply} 
devide: ${divide} 
power: ${power}`);
*/

/* #2.2 JS DOM Functions DOM = Document Object Model

// console.log(document);
const title = document.getElementById("title");
console.log(title);
title.innerHTML = "Hi from JS!";

//자바스크립트로 객체로서 html 의 요소들을 선택할 수 있다. 
*/

/* #2.3 Modifying the DOM with JS
// const title = document.getElementById("title");
// console.log(title);
title.innerHTML = "Hi from JS!";
title.style.color = "red";
document.title = "i own you now";

// console.dir(document); document directory.
// document.getElementsByTagName("title");
// console.log(title);

// const content = document.querySelector("#content"); //id: # class: .
content.innerHTML = "Awesome!!";
content.style.color = "Yellow";
*/

/* #2.4 Events and event handlers

const title = document.querySelector("#title");

function handleClick() {
  title.style.color = "blue";
  //   console.log("i have been resized");
}

window.addEventListener("click", handleClick); // click 하면 handleClick 이라는 function이 실행되도록 함. 
*/

/*#2.5 if, else, and, or

if (10 === 5) {
  //check 할 때 === 사용.
  console.log("hi");
} else if (10 === 8) {
  console.log("NOpe");
} else if (10 === 8) {
  console.log("yesss");
} else if (10 === 8) {
  console.log("NOpe");
} else if (10 === 8) {
  console.log("NOpe");
} else if (10 === 8) {
  console.log("NOpe");
} else 10 === 10;
{
  console.log("yes");
}

if (20 < 5 && "jay" === "jay") {
  console.log("yes");
} else {
  console.log("no!");
}

// true && true = true;
// true && false = false;
// false && true = false;
// false && false = false;

// true || true = true;
// true || false = true;
// false || true = true;
// false || false = false;

const age = prompt("How old are you?");

// console.log(age);

if (age < 18) {
  console.log("Just drink Soda");
} else if (age >= 18 && age <= 20) {
  console.log("you can drink but control yourself!");
} else if (age > 20 && age < 60) {
  console.log("you can drink as much as you want.");
} else {
  console.log("you should take care of your health. don't drink.");
}

*/

/* #2.6 DOM -  IF else function Practice*/

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked"; //button 이 눌리면 class name이 btn -> btn clicked(added)

// .clicked {
//     color: darkgrey;
//   } in index.css 참고!  버튼을 누르면 CSS 에 설정한 것처럼 문자색 변경.
function handleClick() {
  title.classList.toggle(CLICKED_CLASS);

  //아래 방법의 줄이 너무 길기 때문에 toggle 을 사용한다.
  //   const hasClass = title.classList.contains(CLICKED_CLASS); //CLICKED_CLASS 를 포함하고 있는지 여부 판단.
  //   if (hasClass) {
  //     //hasClass가 진실이라면
  //     title.classList.remove(CLICKED_CLASS);
  //   } else {
  //     title.classList.add(CLICKED_CLASS); //https://developer.mozilla.org/ko/docs/Web/API/Element/classList
  //   }
}

function init() {
  title.addEventListener("click", handleClick);
}
init();
