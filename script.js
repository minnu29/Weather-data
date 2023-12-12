function getWeather() {
    const apiKey = '85ec5c83f66372d737c12d60e39d1813'; 
    const cityInput = document.getElementById('cityInput');
    const weatherInfo = document.getElementById('weatherInfo');

    const city = cityInput.value;

    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== '404') {
                const temperature = data.main.temp;
                const description = data.weather[0].description;
                const icon = data.weather[0].icon;

                const weatherHTML = `
                    <h2>${city}</h2>
                    <p>Temperature: ${temperature} &#8451;</p>
                    <p>Description: ${description}</p>
                    <img src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather icon">
                `;

                weatherInfo.innerHTML = weatherHTML;
            } else {
                alert('City not found. Please enter a valid city name.');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}
