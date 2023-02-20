let url1 = "https://api.openweathermap.org/data/2.5/weather?q=" + `${localStorage.getItem('sity')}` + "&appid=bf35cac91880cb98375230fb443a116f";
let url;
let urlExtra;

let date = new Date();
let body = document.querySelector("body");
let main = document.querySelector("main");
let windowWeather = document.querySelector(".window");
let header = document.querySelector("header");
let temperature = document.querySelector(".temperature");
let sity = document.querySelector(".city");
let dateForm = document.querySelector(".date");
let cloundess = document.querySelector(".cloundess");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let input = document.querySelector("#input");
let inputDiv = document.querySelector(".input-div");
let imgFooter = document.querySelector("#imgFooter");
let weather = document.querySelector(".weather");
let weatherIcon = document.querySelector(".weather-icon");
let sunset = document.querySelector(".sunset");
let nameDay = document.querySelectorAll(".name-day");
let temperatur = document.querySelectorAll(".temperatur");
let forecastImg = document.querySelectorAll(".forecast-img");
let value;
let x;
let y;


let spans = document.querySelectorAll(".span");
let spanAdditionally = document.querySelectorAll(".span-additionally");

let arrDay = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
for (let i = 0; i < nameDay.length; i++){
    nameDay[i].innerHTML = `${arrDay[date.getDay() + i]}`;
}

let arrMonth=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
SetWeather(url1);
input.addEventListener("keydown", function (e){
        if (e.code === "Enter"){
            value = e.target.value;
            input.value = "";
            url = "https://api.openweathermap.org/data/2.5/weather?q=" + `${value}` + "&appid=bf35cac91880cb98375230fb443a116f";
            SetWeather(url);
        }
})
function SetWeather (url){
    fetch(url)
        .then(responce => responce.json())
        .then(function (responce){
            x = responce.coord.lat;
            y = responce.coord.lon;
            localStorage.setItem('sity', responce.name);
            sity.innerHTML = ` ${responce.name}, ${responce.sys.country}`;
            dateForm.innerHTML = `${date.getDate()} ${arrMonth[date.getMonth()]} ${date.getFullYear()}`
            cloundess.innerHTML = `${responce.clouds.all}%`;
            humidity.innerHTML = `${responce.main.humidity}%`;
            wind.innerHTML = `${responce.wind.speed}`;
            sunset.innerHTML = `Sunset ${Sunset(responce)}`;
            temperature.innerHTML = `${Math.round(responce.main.temp - 273)} &#176`;
            let random = Math.floor(Math.random() * 3);
            let random2 = Math.floor(Math.random() * 2);
            let random3 = Math.floor(Math.random() * 2);
            switch (responce.weather[0].main){
                case "Clear": weatherIcon.src = "Img/Suny/Vector (1).png";
                    weather.innerHTML = "Sunny";
                    switch (random2){
                        case 0:weatherIcon.src = "Img/Suny/Vector (1).png";
                            spanAdditionally.forEach(i => i.style.color = "#EFAA82");
                            main.style.backgroundColor = "#FAE2BD";
                            main.style.opacity = "90%";
                            SetColor("#EFAA82", "#FAE2BD", "Img/Fon/IMG_7147.png", "linear-gradient(90deg, rgba(250,226,189,1) 10%, rgba(239,170,130,1) 100%)");
                            windowWeather.style.boxShadow = `1px 1px 10px #d29372`;
                            break;
                        case 1:weatherIcon.src = "Img/Suny/Vector (2).png";
                            main.style.backgroundColor = "#9FDCA8";
                            main.style.opacity = "90%";
                            SetColor("#71A78F", "#9FDCA8", "Img/Fon/IMG_7144.png", "linear-gradient(90deg, rgba(159,220,168,1) 10%, rgba(113,167,143,1) 100%)");
                            spanAdditionally.forEach(i => i.style.color = "#ffffff");
                            windowWeather.style.boxShadow = `1px 1px 10px #71A78F`;
                            break;
                    }
                    break;
                case "Clouds":
                    weather.innerHTML ="Cloudy";
                    spanAdditionally.forEach(i => i.style.color = "#ffffff");
                    switch (random){
                        case 0:weatherIcon.src = "Img/Cloudy/Vector.png";
                            SetColor("#dce4ec", "#91B4C6", "Img/Fon/IMG_7149.png", "linear-gradient(90deg, rgba(220,228,236,1) 10%, rgba(145,180,198,1) 100%)");
                            break;
                        case 1:weatherIcon.src = "Img/Cloudy/Vector (1).png";
                            SetColor("#AED5E4", "#5A8BAB", "Img/Fon/IMG_7145.png", "linear-gradient(90deg, rgba(174,213,228,1) 10%, rgba(90,139,171,1) 100%)");
                            break;
                        case 2:weatherIcon.src = "Img/Cloudy/Vector (2).png";
                            SetColor("#484A82", "#9090AC", "Img/Fon/IMG_7143.png", "linear-gradient(90deg, rgba(144,144,172,1) 10%, rgba(72,74,130,1) 100%)");
                            break;
                    }
                    break;
                case "Rain": weatherIcon.src = "Img/Group 1.png).png";
                    weather.innerHTML = "Rainy";
                    switch (random3){
                        case 0:weatherIcon.src = "Img/Rainy/Group 1 (1).png";
                            SetColor("#C9E8E0", "#40666A", "Img/Fon/IMG_7139.png", "linear-gradient(90deg, rgba(142,195,181,1) 0%, rgba(64,102,106,1) 100%)");
                            break;
                        case 1:weatherIcon.src = "Img/Rainy/Group 1 (2).png";
                            SetColor("#C9E8E0", "#7FC3AE", "Img/Fon/IMG_7142.png", "linear-gradient(90deg, rgba(201,232,224,1) 0%, rgba(127,195,174,1) 100%)");
                            break;
                    }
                    break;
                case "Snow": weatherIcon.src = "Img/Vector.png";
                    weather.innerHTML = "Snowy";
                    weatherIcon.src = "Img/Snowy/Vector (3).png";
                    SetColor("#E2E2E3", "#A7ACC4", "Img/Fon/IMG_7129.png", "linear-gradient(90deg, rgba(226,226,227,1) 9%, rgba(167,172,196,1) 100%)");
                    windowWeather.style.backgroundPosition = "bottom";
                    break;
            }
            urlExtra = "http://api.openweathermap.org/data/2.5/forecast?q=" + `${localStorage.getItem('sity')}` + "&exclude=dailyl&.dt=1642550400&appid=bf35cac91880cb98375230fb443a116f";
            fetch(urlExtra)
                .then(responce => responce.json())
                .then(function (responce){
                    let hour = date.getHours();
                    let max = 3;
                    let min = 0;
                    let step;

                    for (let i = 0; i < 8; i++){
                        if(hour < max && hour > min){
                            break;
                        }
                        max += 3;
                        min += 3;
                    }
                    step = 8 - (min / 3) + 4;
                    for (let i = 0; i < temperatur.length; i++){
                        let weather = responce.list[step * (i + 1)].weather[0].main;
                        console.log(weather);
                        switch (weather){
                            case "Rain":
                                forecastImg[i].src = "Img/Img weahter/Rain.png";
                                forecastImg[i].style.width = '45%';
                                break;
                            case "Clouds":
                                forecastImg[i].src = "Img/Img weahter/Vector (1).png";
                                forecastImg[i].style.width = '55%';
                                break;
                            case "Clear":
                                forecastImg[i].src = "Img/Img weahter/Suny (1).png";
                                forecastImg[i].style.width = '45%';
                                break;
                        }
                        temperatur[i].innerHTML = `${Math.round(responce.list[step * (i + 1)].main.temp - 273)}`;
                    }
                })
        })
}
function SetColor (color, backgraund, fon, gradient){
    spans.forEach(i => i.style.color = `${color}`);
    header.style.backgroundColor = `${backgraund}`;
    windowWeather.style.backgroundImage = `url(${fon})`;
    windowWeather.style.boxShadow = `1px 1px 10px ${backgraund}`;
    input.style.backgroundColor = `${backgraund}`;
    input.addEventListener("focus", function (){
        input.style.boxShadow = `0 0 10px ${color}`;
    })
    input.addEventListener("blur", function (){
        input.style.boxShadow = ``;
    })
    body.style.background = `${gradient}`;
}
function Sunset (responce){
    let time;
    time = responce.sys.sunset;
    let a = new Date(time * 1000);
    let hour = a.getHours();
    let min = a.getMinutes();
    let times = hour + ':' + min;
    return times;
}

imgFooter.addEventListener("click", function (){
    input.focus();
    imgFooter.style.display = "none";
})
input.addEventListener("blur", function (){
    imgFooter.style.display = "block";
})
input.addEventListener("focus", function (){
    imgFooter.style.display = "none";
})


