const week_days = ["Monday", "Tuesday", "Wednesday", "Thurstday", "Friday", "Saturday", "Sunday"]
var current_day = new Date().getDay() - 1;
$("#week-day").text(week_days[current_day]);
$(".cast-week-day").each(function() {
    current_day += 1;
    current_day > 6 ? current_day = 0 : "";
    $(this).text(week_days[current_day]);
})


const apiKey = "ffed016c8d7a46a1c44064b7cd6c438c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

function getWeatherData(cityName) {
    const url = `${apiUrl}?q=${cityName}&appid=${apiKey}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let iconCode = data.weather[0].icon;
            document.getElementById("weather-logo").src = `http://openweathermap.org/img/wn/${iconCode}@4x.png`
            document.getElementById("temperature").innerText = Math.round(data.main.temp - 273.15);
            document.getElementById("feels-like").innerText = Math.round(data.main.feels_like - 273.15);
            document.getElementById("wind-speed").innerText = Math.round(data.wind.speed);
            document.getElementById("arrow").style.setProperty("--dir", data.wind.deg + 90 + "deg");
            document.getElementById("humidity").innerText = data.main.humidity;
            document.getElementById("w-type").innerText = data.weather[0].main;
            getCast(cityName);
        })
        .catch((error) => console.error(error));
}
getWeatherData($("#test > li:first-of-type").text());


$("#test > li:first-of-type").click(() => {
    $("#test > li:not(:first-of-type)").fadeToggle(100);
    $("#test > li:not(:first-of-type)").on("click", function () {
        $("#test > li:first-of-type").text($(this).text());
        getWeatherData($("#test > li:first-of-type").text())
        $("#test > li:not(:first-of-type)").fadeOut(100);
    });

});

$("#test").on("mouseleave", function () {
    $("#test > li:not(:first-of-type)").fadeOut(100);
    // alert("left")
})

window.addEventListener("resize", sort);
window.addEventListener("load", sort);

function sort() {
    if (window.innerWidth <= 1170) {
        $("#week-day").appendTo("#top-left");
    } else {
        $("#week-day").appendTo("#top-cont");
    }
}

function getCast(city) {
    var url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            var day = 7;
            var night = 11;
            document.querySelectorAll(".card").forEach(element => {
                let iconCode = data.list[day].weather[0].icon;
                $(element).find("img").attr("src", `http://openweathermap.org/img/wn/${iconCode}@4x.png`);
                $(element).find(".higher").text(Math.round(data.list[day].main.temp - 273.15));
                $(element).find(".lower").text(Math.round(data.list[night].main.temp - 273.15));
                night += 8;
                day += 8;
            })
        })
        .catch((error) => console.error(error));
}

setTimeout(function () {
    $("body").fadeIn(300)
}, 500)