const weather = document.querySelector(".js-weather");

const API_KEY =
  ""; /* https://home.openweathermap.org/api_keys
  API(Application Programming Interface)란 다른 서버로부터 손쉽게 데이터를 가져올 수 있는 수단.*/

const COORDS = "coords"; /*coords= 좌표 */

function getWeather(lat, lng) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      //fetch 완료를 기다려야 하기 때문에 then을 사용함.
      return response.json(); //JSON의 데이터를 가져온다. Javascript Object(Network-headers-General Request URL.)들: 날씨 정보.
    })
    .then(function (json) {
      //json이 준비되면 나타낸다.
      //   console.log(json); json 내부 object들의 소속을 알 수 있다.
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature}℃ @ ${place}`;
    });
}
/* fetch() 안에 가져올 데이터가 들어가면 된다. https:// + 데이터, backtick(`)사용.
https://openweathermap.org/current. 기온 Celcius 사용하려면 units=metric을 적용해야함. (Unit format에서 확인)
lat, lon, appid 앞에 $를 적용. 
*/
function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude; //console 창에서 확인가능. coords>latitude
  const longitude = position.coords.longitude; //console 창에서 확인가능. coords>longitude
  const coordsObj = {
    // const coordsObj = { latitude = latitude, longitude = longitude }
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("Cant access Geo location.");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}
/* 좌표를 요청하는 코드. API사용.*/

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords); //parse: String을 Object로 변경해준다.
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
