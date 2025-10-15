const apiKey = "13f4a186377cfc3617adfa795a0fcd4f ";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?unit=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")



async function checkWeather(city) {

const response = await fetch(apiurl+ city +`&appid=${apiKey}`);
var data = await response.json();

console.log(data);

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"K";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

if(data.weather[0].main =="Clouds"){
    weatherIcon.src = "images/cloudy.jpeg";
}
else if(data.weather[0].main =="Clear"){
    weatherIcon.src = "images/sunny.jpeg";
}
else if(data.weather[0].main =="Snow"){
    weatherIcon.src = "images/snow.jpeg";
}
else if(data.weather[0].main =="Rain"){
    weatherIcon.src = "images/rainy.jpeg";
}

    
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
