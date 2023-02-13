const cityEl = document.querySelector('#city');
const search = document.querySelector('form');
// API: api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f2f399cdf34a0ffbfc30ea40696a33b5&units=imperial

let city 

search.addEventListener('submit', async function(event){
  event.preventDefault();
  city = cityEl.value;
  console.log(city);
  cityEl.value = '';

// fetch data from weather map api using async function
const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f2f399cdf34a0ffbfc30ea40696a33b5&units=imperial`);
const data = await response.json();
console.log(data.main.temp);
});