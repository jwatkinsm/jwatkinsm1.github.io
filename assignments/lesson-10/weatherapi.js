var weatherRequest= new XMLHttpRequest();
var apiURLstring= 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=1446b3571d31230010c918221292fee5';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload= function(){
    var weatherData= JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById('temp').innerHTML= weatherData.main.temp;
}