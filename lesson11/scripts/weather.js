const requestURL = "https://api.openweathermap.org/data/2.5/weather?id=6235764&appid=ea4f86f2b06b5d5c44b8aa4b8cd3efef"

/*//////////////////////////////////////////////////////
/   GET WEATHER
/   Fetches the weather data for use on the website.
//////////////////////////////////////////////////////*/
async function getWeather() {
    const response = await fetch(requestURL);
    jsObject = await response.json();
    windspeed = MperStoKperH(jsObject.wind.speed);
    temp = KtoC(jsObject.main.temp).toFixed(1);
    description = jsObject.weather[0].description;
    imgURL = `http://openweathermap.org/img/wn/${jsObject.weather[0].icon}.png`;
    calculateWindChill(windspeed, temp);
    displayClimate(temp, imgURL, description);
};

/*//////////////////////////////////////////////////////
/   CALCULATE WIND CHILL
/   Take the windspeed and temp, and calculate windchill.
//////////////////////////////////////////////////////*/
function calculateWindChill(windspeed, temp) {
    let chill;
    if ((temp > 50.0) || (windspeed < 3.0)) {
        chill = "N/A";
    }
    else {
        chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
        chill = `${chill}°F`;
    }
    document.getElementById("windSpeed").textContent = windspeed
    document.getElementById("windChill").textContent = chill;
}

/*//////////////////////////////////////////////////////
/   DISPLAY CLIMATE
/   Dipslay the temp, weather condition, and image.
//////////////////////////////////////////////////////*/
function displayClimate(temp, imgURL, description) {
    document.getElementById("temperature").textContent = `${temp}°C`;
    img = document.getElementById("weatherConditionImage");
    img.setAttribute("src", imgURL);
    img.setAttribute("alt", description);
    document.getElementById("weatherCondition").textContent = description;
}

/*//////////////////////////////////////////////////////
/   KELVIN TO CELCIUS
/   Convert kelvin to celcius.
//////////////////////////////////////////////////////*/
function KtoC(temp) {
    return temp - 273.15;
}

/*//////////////////////////////////////////////////////
/   METERS/SECOND TO KILOMETERS/HOUR
/   Convert m/s to km/h.
//////////////////////////////////////////////////////*/
function MperStoKperH(MperS) {
    return MperS * 3.6
}

getWeather();







