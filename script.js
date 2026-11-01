const apikey = "06d7e545dbe6b85b658c42be1878c91c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search ")
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temprature").innerHTML = Math.round(data.main.temp) + " °C";
        document.querySelector(".country").innerHTML = data.sys.country;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind-spead").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon").src = "./images/cloudes.png";
        } else if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon").src = "./images/rain.png";
        } else if (data.weather[0].main == "Clear") {
            document.querySelector(".weather-icon").src = "./images/clear.png";
        } if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon").src = "./images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon").src = "./images/mist.png";
        }
    }


}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})