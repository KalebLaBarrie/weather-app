let locationInput = '';
const input = document.getElementById('location');
const submitBtn = document.getElementById('submit-btn');
const cityDiv = document.querySelector('.city-div');
const cityName = document.querySelector('.city-name');
const degC = document.getElementById('degreesCelsius');
const degF = document.getElementById('degreesFahrenheit');
const weatherIcon = document.getElementById('weather-img');

async function getLocationWeather(e) {
  e.preventDefault();
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=9a04645dd14b41828fe200112230210&q=${locationInput}&aqi=no
        `
    );

    const { current, location } = await response.json();
    console.log(current);
    degC.innerText = current.temp_c;
    degF.innerText = current.temp_f;
    cityName.innerText = location.name;
    weatherIcon.src = current.condition.icon;

    if (!cityDiv.classList.contains('show')) {
      cityDiv.classList.add('show');
    }

    input.value = '';
  } catch (error) {
    console.log(error);
  }
}

input.addEventListener('input', () => {
  locationInput = input.value;
});

submitBtn.addEventListener('click', getLocationWeather);
