const inputField = document.getElementById("inputField");
const result = document.getElementById("result");
const icon = document.getElementById("icon");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const region = document.getElementById("region");
const weather = document.querySelector('.weather');



result.addEventListener("click", function(){
    fetch(`https://holidayapi.com/v1/holidays?pretty&key=5807a054-23a5-477a-869a-240b45e39b14&country=IN&year=2020`)
    .then(res => 
        res.json()
        )      
    .then(data => {
        var nameValue = data.holidays[0].name;
        cityName.innerText = `${nameValue}`;
        inputField.value = "";
    })


    .catch(err => alert("wrong city name!"))
})