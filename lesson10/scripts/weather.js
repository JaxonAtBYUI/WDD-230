













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
        chill = `${chill}F°`;
    }
    document.getElementById("windChill").textContent = chill;
}