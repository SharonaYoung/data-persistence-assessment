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
  console.log(data);
  console.log(data.name);
  console.log(data.main.temp);
  showWeather(data);
  console.log(data.weather[0].main);
  console.log(JSON.stringify(data.weather));
});

// display weather info to the DOM
const weatherEL = document.querySelector('#weather');

  function showWeather(weatherData) {
    const displayWeather = `
      <h2>${weatherData.name}</h2>
      <h3>Current Temperature: ${Math.round(weatherData.main.temp)} </h3>
      <ul>
        <li>Low: ${Math.round(weatherData.main.temp_min)}</li>
        <li>High: ${Math.round(weatherData.main.temp_max)}</li>
      </ul>
      <h3>Weather Conditions: ${weatherData.weather[0].description}</h3>
  `
  weatherEL.innerHTML = displayWeather;
}