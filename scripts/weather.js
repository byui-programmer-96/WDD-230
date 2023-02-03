const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDescription = document.querySelector('figcaption');
const url = 'http://api.openweathermap.org/geo/1.0/direct?q=Lebanon&zip=37087, us&lat=36.213089&appid=c674c672e3c49ca45891f713307e2cef&lon=-86.306480&unit=imperial&state=Tennessee';
async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else{
            throw Error(await response.text());
        }

    } catch (error){
        console.log(error);
    }
}
apiFetch();

function displayResults(weatherData){
    const description = weatherData.weather[0].description.toUpperCase();
    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;

    currentTemp.innerHTML = `<p>Current Temperature: ${weatherData.main.temp.toFixed(0)} °F </p>`;
    captionDescription.innerHTML = `<p>Description: ${description}</p>`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', description);
}