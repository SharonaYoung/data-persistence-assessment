const cityEl = document.querySelector('#city');
const search = document.querySelector('form');
// API: api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f2f399cdf34a0ffbfc30ea40696a33b5&units=imperial

// variable to hold city to search
let city 

search.addEventListener('submit', async function(event){
  event.preventDefault();
  city = cityEl.value;
  console.log(city);
  cityEl.value = '';

  // fetch data from weather map api using async function
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f2f399cdf34a0ffbfc30ea40696a33b5&units=imperial`);
  const data = await response.json();
  // set local storage key
  localStorage.setItem('last_city', JSON.stringify(data));
  showWeather(data);
});

// display weather info to the DOM
const weatherEL = document.querySelector('#weather');

  function showWeather(weatherData) {
    const displayWeather = `
      <h2>${weatherData.sys.country} | ${weatherData.name}</h2>
      <h3>Current Temperature: ${Math.round(weatherData.main.temp)}&deg;</h3>
      <ul>
        <li>Low: ${Math.round(weatherData.main.temp_min)}</li>
        <li>High: ${Math.round(weatherData.main.temp_max)}</li>
        <li>Weather Conditions: ${weatherData.weather[0].main}</li>
      </ul>
  `
  weatherEL.innerHTML = displayWeather;
}

// Show most recent city searched
const lastCity = localStorage.getItem('last_city');
if (lastCity) {
  showWeather(JSON.parse(lastCity))
}
// http://api.openweathermap.org/geo/1.0/reverse?lat=51.5098&lon=-0.1180&limit=5&appid=f2f399cdf34a0ffbfc30ea40696a33b5