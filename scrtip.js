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


