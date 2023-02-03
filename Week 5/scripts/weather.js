const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption')

const url = 'http://api.openweathermap.org/geo/1.0/direct?q=Trier&lat=49.750000&appid=c674c672e3c49ca45891f713307e2cef&lon=6.633333&unit=imperial';

const apiFetch = async () => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data)
        } else {
            throw Error (await response.text());
        } 
    } catch (error) {
        console.error("An error occurred while fetching data:", error);
    }
};


  
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc)
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
   
};

apiFetch();