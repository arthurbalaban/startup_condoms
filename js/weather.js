async function  checkWeather(city) {
    const cityElement = document.getElementById(city);
    const temperatureElement = cityElement.querySelector(`#${city}-temperature`);
    const descriptionElement = cityElement.querySelector(`#${city}-description`);
    const humidityElement = cityElement.querySelector(`#${city}-humidity`);

    const apiKey ='4b327ef72721de5a116918ff2526bce8';
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    const weather_data = await fetch(url).then(res => res.json());

    temperatureElement.innerText = `${Math.round(weather_data.main.temp)}°C`;
    descriptionElement.innerText = weather_data.weather[0].main;
    humidityElement.innerText = `${weather_data.main.humidity}%`;
}

checkWeather('Nantes');
checkWeather('Paris');
checkWeather('Brest');
checkWeather('Rennes');
checkWeather('Caen');
