const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  /* 시간 불러와서 표시하는 방법. */
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${
    seconds < 10 ? `0${seconds}` : seconds
  }`; /* seconds < 10 ? `0${seconds}` : seconds = seconds가 10보다 작으면(?) 0+seconds 아니면(:) seconds 출력*/
}

function init() {
  getTime();
  setInterval(
    getTime,
    1000
  ); /*시간간격설정. getTime function의 refresh 를 1(000)초로 설정.*/
}

init();
