//mapping individual element to variable
var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var nameDisplay = document.querySelector('.name');
var descDisplay = document.querySelector('.desc');
var tempDisplay = document.querySelector('.temp');
var feelsDisplay = document.querySelector('.feels_like');
var humidDisplay = document.querySelector('.humid');


//when it`s clicked, it triggers entire events
button.addEventListener('click',function(){
    console.log(inputValue.value);
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=eafdf72dfb9261e0e0a26195974fe105')
.then(response => response.json())
.then(data  => {
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var feelsValue = data['main']['feels_like'];
    var descValue = data['weather'][0]['description'];
    var humidValue = data['main']['humidity'];

    //updating each individual element with their corresponding value
    nameDisplay.innerHTML = 'City Name: '+nameValue;
    tempDisplay.innerHTML = 'Temperature: '+tempValue;
    descDisplay.innerHTML = 'Description: '+descValue;
    feelsDisplay.innerHTML = 'Feels like: '+feelsValue;
    humidDisplay.innerHTML = 'Humidity: '+humidValue;

})
// if there is an error, it alerts you.
.catch(err => alert("Wrong city name!"))
})


// getting the forecast for a given city over a number of days 
// var button2 = document.querySelector('.button2');
// var inputValue2 = document.querySelector('.inputValue2');
// var mainDisplay = document.querySelector('.main');
// var descripDisplay = document.querySelector('.description');
// var mornDisplay = document.querySelector('.morning');
// var nightDisplay = document.querySelector('.night');
// var tempMinDisplay = document.querySelector('.temp.min');
// var tempMaxDisplay = document.querySelector('.temp.max');
// var pressDisplay = document.querySelector('.pressure');
// var humiDisplay = document.querySelector('.humid');
// var speedDisplay = document.querySelector('windSpeed');


// button.addEventListener('click',function(){
//     console.log(inputValue2.value);
// fetch('https://api.openweathermap.org/data/2.5/forecast/daily?id='+inputValue2+'&appid=eafdf72dfb9261e0e0a26195974fe105')
// .then(response => response.json())
// .then(data => {
//     var weatherValue = data['weather'][0['main'];
//     var descripValue = data['weather'][0]['description'];
//     var mornValue = data['temp']['morn'];
//     var nightValue = data['temp']['night'];
//     var tempMinValue = data['temp']['min'];
//     var tempMaxValue = data['temp']['max'];
//     var pressValue = data['pressure'];
//     var humiValue = data['humidity'];
//     var speedValue = data['speed'];

//     mainDisplay.innerHTML = 'weather: '+mainValue;

// })
// .catch(err => alert('Wrong city name!'))
// })


// table += "<tr>";
// 		table += "<td><img src='http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png'/></td>";
// 		table += "<td>" + data.list[i].weather[0].main + "</td>";
// 		table += "<td>" + data.list[i].weather[0].description + "</td>";
// 		table += "<td>" + data.list[i].temp.morn + "&deg;C</td>";
// 		table += "<td>" + data.list[i].temp.night + "&deg;C</td>";
// 		table += "<td>" + data.list[i].temp.min + "&deg;C</td>";
// 		table += "<td>" + data.list[i].temp.max + "&deg;C</td>";
// 		table += "<td>" + data.list[i].pressure + "hPa</td>";
// 		table += "<td>" + data.list[i].humidity + "%</td>";
// 		table += "<td>" + data.list[i].speed + "m/s</td>";
// 		table += "</tr>";