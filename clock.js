const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  /* 시간 불러와서 표시하는 방법. */
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${year} 년 ${month} 월 ${day} 일     
    ${hours < 10 ? `0${hours} 시` : `${hours} 시`} ${
    minutes < 10 ? `0${minutes} 분` : `${minutes} 분`
  } ${
    seconds < 10 ? `0${seconds} 초` : `${seconds} 초`
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
