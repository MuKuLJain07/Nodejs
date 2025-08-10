async function getWeather() {
    const userLocation = document.getElementById('locationInput').value;
    const resultDiv = document.getElementById('weatherResult');

    if (!userLocation) {
        resultDiv.textContent = 'Please enter a location.';
        return;
    }

    const res = await fetch(`/getWeather?address=${encodeURIComponent(userLocation)}`);
    const data = await res.json();
    console.log(data);

    if (data.error) {
        resultDiv.textContent = data.error;
    } else {
        resultDiv.textContent = `Location: ${data.location}, Forecast: ${data.forecast}`;
    }
}
