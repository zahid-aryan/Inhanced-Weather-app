const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "06d7e545dbe6b85b658c42be1878c91c";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search img");

async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".details").style.display = "none";

    } else {

        var data = await response.json();
        document.querySelector(".temprature").innerHTML = Math.round(data.main.temp) + " °C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".country").innerHTML = data.sys.country;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind-speed").innerHTML = data.wind.speed + "km/h";
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "flex";
        document.querySelector(".details").style.display = "flex";
        console.log(data);
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});