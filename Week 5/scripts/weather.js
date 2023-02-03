const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'http://api.openweathermap.org/geo/1.0/direct?q=Trier&lat=49.750000&appid=c674c672e3c49ca45891f713307e2cef&lon=6.633333&unit=imperial';

function displayResults(data) {
    currentTemp.innerHTML = `${day.temp.day}&#176;C`;
    const iconsrc = `https://openweathermap.org/img/w/$day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon"`;
    let desc = data.weather[0].______;
    weatherIcon.setAttribute('___', _____);
    weatherIcon.setAttribute('___', _____);
    captionDesc.textContent = `${desc}`;
  }

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); 
        displayData(data); 
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();
function displayFetchResponse(weatherData) {
  const description= weatherData.description [0].description.toUpperCase();
  const
}