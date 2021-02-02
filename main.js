const inputField = document.getElementById("inputField");
const result = document.getElementById("result");
const icon = document.getElementById("icon");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const region = document.getElementById("region");
const weather = document.querySelector('.weather');



result.addEventListener("click", function(){
    fetch(`http://api.weatherstack.com/current?access_key=78f7f79609b700854ad81e0ea2550662&query=${inputField.value}`)
    .then(res => 
        res.json()
        )
    .then(data => {
        var iconValue = data.current.weather_icons;
        var nameValue = data.location.name;
        var tempValue = data.current.temperature;
        var rgnValue = data.location.region;
        console.log(data.location.name);
        icon.setAttribute("src",`${iconValue}`);
        cityName.innerText = `${nameValue}`;
        temperature.innerText = `${tempValue}°c`;
        region.innerText = `${rgnValue}`;
        inputField.value = "";
    })


    .catch(err => alert("wrong city name!"))
})