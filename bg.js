const body = document.querySelector("body");

const IMG_NUMBER = 4;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add(
    "bgImage"
  ); /* image에서 지정한 클래스값('bgImage')을 추가한다. 그다음 index_clock.css 에서 사이즈, 위치 등 조정해준다.  */
  body.appendChild(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}
/*Math.random(): 임의의 번호를 생성. Math.floor: 임의의 번호 소수자리 반올림. Math.Ceil: 임의의 번호 소수자리 올림.
Math.floor(Math.random()*5);

*/

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
