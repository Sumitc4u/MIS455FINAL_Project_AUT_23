function fetchCountryData() {
    const input = document.getElementById('country-input').value;
    const url = `https://restcountries.com/v3.1/name/${input}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const countryData = data[0];
            if (countryData) {
                const countryInfo = `
                    <h2>${countryData.name.common}</h2>
                    <p>Capital: ${countryData.capital}</p>
                    <p>Population: ${countryData.population}</p>
                    <p>Region: ${countryData.region}</p>
                    <img src="${countryData.flags.svg}" alt="${countryData.name.common} Flag" width="100">
                `;
                document.getElementById('country-data').innerHTML = countryInfo;
            } else {
                document.getElementById('country-data').innerHTML = 'Country not found';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('country-data').innerHTML = 'Error fetching data';
        });
}

function fetchWeatherData() {
    const input = document.getElementById('country-input').value;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=82fa21eea40df0e60c01a0abb73c2826`;

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = `
                <h2>Weather in ${data.name}</h2>
                <p>Description: ${data.weather[0].description}</p>
                <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
            document.getElementById('weather-data').innerHTML = weatherInfo;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('weather-data').innerHTML = 'Weather data not available';
        });
}