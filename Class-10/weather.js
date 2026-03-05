async function getWeather() {
  let city = document.getElementById("city").value;

  if (city === "") {
    alert("Please enter city name");
    return;
  }

  try {
    // STEP 1 → GET COORDINATES
    let geoURL = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;

    let geoResponse = await fetch(geoURL);

    let geoData = await geoResponse.json();

    if (!geoData.results) {
      alert("City not found");
      return;
    }

    let lat = geoData.results[0].latitude;
    let lon = geoData.results[0].longitude;
    let name = geoData.results[0].name;

    // STEP 2 → GET WEATHER
    let weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

    let weatherResponse = await fetch(weatherURL);

    let weatherData = await weatherResponse.json();

    let weather = weatherData.current_weather;

    // DISPLAY DATA

    document.getElementById("weatherBox").classList.remove("hidden");

    document.getElementById("cityName").innerText = name;
    document.getElementById("temp").innerText = weather.temperature;
    document.getElementById("wind").innerText = weather.windspeed;
    document.getElementById("direction").innerText = weather.winddirection;
  } catch (error) {
    console.log(error);
    alert("Error fetching weather");
  }
}
