// const location = document.getElementById('locationInput').value;
// const resultDiv = document.getElementById('weatherResult');

// const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`);

// resultDiv.textContent = 'Failed to fetch weather data.';


function getWeather() {
    const location = document.getElementById('locationInput').value;
    const resultDiv = document.getElementById('weatherResult');

    if (!location) {
        resultDiv.textContent = 'Please enter a location.';
        return;
    }

    // Just display the input location on the page
    resultDiv.textContent = `You entered: ${location}`;
}

