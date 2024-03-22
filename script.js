const formEl = document.querySelector("form")
const city = document.getElementById('city');
const searchBtn = document.getElementById('search-Btn');
const temperature = document.getElementById('teamperature');
const discription = document.getElementById('discription');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const city_name = document.getElementById('city-name');



async function getWeather() {
  try {
    let inputData = city.value;
    const api_key = "ca70075bc79d51f32f426ab37ee142fe";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputData}&appid=${api_key}`
    const response = await fetch(url)
    const data = await response.json();
    temperature.innerHTML =`${Math.round(data.main.temp - 273.15)}<sup>°C</sup>` ;
    discription.innerHTML = `${data.weather[0].description}`;
    humidity.innerHTML = `${data.main.humidity}%`;
    wind.innerHTML = `${data.wind.speed}Km/h`;
    city_name.innerHTML=`Temperature of ${data.name}`
    console.log(data)
  }


  catch (error) {
    console.error(error);
  }
}


formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  getWeather();
})
