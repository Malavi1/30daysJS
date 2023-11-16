const apiKey = "8a5967fdffbedc32d0b37a05e4ec686f";

const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchCity = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weather = document.querySelector(".weather");
async function checkweather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".tem").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".hum-value").innerHTML = data.main.humidity + "%";
  document.querySelector(".WP-value").innerHTML = data.wind.speed + "km/h";
}

searchBtn.addEventListener("click", () => {
  checkweather(searchCity.value);
  weather.style.display = "contents";
  searchCity.value = "";
});
