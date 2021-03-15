// getting the forecast for a given city over a number of days 
var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var mainDisplay = document.querySelector('.main');
var descripDisplay = document.querySelector('.description');
var mornDisplay = document.querySelector('.morning');
var nightDisplay = document.querySelector('.night');
var tempMinDisplay = document.querySelector('.temp.min');
var tempMaxDisplay = document.querySelector('.temp.max');
var pressDisplay = document.querySelector('.pressure');
var humiDisplay = document.querySelector('.humid');
var speedDisplay = document.querySelector('windSpeed');


button.addEventListener('click',function(){
    console.log(inputValue.value);
fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q='+inputValue.value+'&appid=eafdf72dfb9261e0e0a26195974fe105')
.then(response => response.json())
.then(data => {
    var weatherValue = data['weather'][0]['main'];
    var descripValue = data['weather'][0]['description'];
    var mornValue = data['temp']['morn'];
    var nightValue = data['temp']['night'];
    var tempMinValue = data['temp']['min'];
    var tempMaxValue = data['temp']['max'];
    var pressValue = data['pressure'];
    var humiValue = data['humidity'];
    var speedValue = data['speed'];

    mainDisplay.innerHTML = 'weather: '+ weatherValue;
    descripDisplay.innerHTML ='description'+descripValue;
    mornDisplay.innerHTML ='';
    nightDisplay.innerHTML ='';
    tempMinDisplay.innerHTML ='';
    tempMaxDisplay.innerHTML ='';
    pressDisplay.innerHTML ='';
    humiDisplay.innerHTML ='';
    speedDisplay.innerHTML ='';


})
.catch(err => alert('Wrong city name!'))
})

