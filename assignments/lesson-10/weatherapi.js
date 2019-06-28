var weatherRequest= new XMLHttpRequest();
var apiURLstring= 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=1446b3571d31230010c918221292fee5';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload= function(){
    var weatherData= JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById('temp').innerHTML = weatherData.main.temp;
    document.getElementById('current').innerHTML = weatherData.weather[0].description;
    document.getElementById('humidity').innerHTML = weatherData.main.humidity;
    document.getElementById('windspeed').innerHTML = weatherData.wind.speed;

    /*wind chill*/
    var t = parseInt(document.getElementById('temp').innerHTML);
    var s = parseInt(document.getElementById('windspeed').innerHTML);
    var f = 35.74 + (0.6215*t) - (35.75*Math.pow(s, 0.16))+(0.4275*t*Math.pow(s, 0.16));
    var result = f.toFixed(0)
    document.getElementById('windchill').innerHTML= result;
}
/*forecat*/
var forecastRequest= new XMLHttpRequest();
var apiURLstring= 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=1446b3571d31230010c918221292fee5';
forecastRequest.open('Get', apiURLstring, true);
forecastRequest.send();

var lsits= [];
forecastRequest.onload= function(){
    var forecastData= JSON.parse(forecastRequest.responseText);
    console.log(forecastData);
    for (i= 0; f< forecastData.list.length; i++){
        if (forecastData.lsit[i].dt_txt.includes("18:00:00"));
        console.log(forecastData.list[i]);
    }
    document.getElementById('day1').innerHTML= lists[0].main.temp;
}