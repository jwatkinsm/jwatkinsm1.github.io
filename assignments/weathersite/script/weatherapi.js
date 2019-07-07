function getTownIdURL(){
  let town =document.getElementById("tid");
  let ID = town.getAttribute("data-id");
  let urlTemplate = "https://api.openweathermap.org/data/2.5/weather?id=" + ID + "&units=imperial&APPID=f1032fc36d05c17197425dc4e32cd89e";
  return urlTemplate;
}

var weatherRequest= new XMLHttpRequest();
var apiURLstring= getTownIdURL();
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
    
    
    var forecastTemps = [];

    var forecastDays = [];
  
    var forecastImg = [];
  
    var forecastDesc = [];
  
  
  
    var day = 1;
  
    var dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  
  
    forecastData.list.forEach(hour => {
  
      if (hour.dt_txt.includes("18:00:00")) {
  
        forecastTemps[day] = hour.main.temp;
  
        var d = new Date(hour.dt_txt);
  
        forecastDays[day] = dayNames[d.getDay()];
  
        forecastImg[day] = hour.weather[0].icon;
  
        forecastDesc[day] = hour.weather[0].description;
  
        day++;
  
      }
  
    });
  
  
  
    for (var i = 1; i < 7; i++) {
      document.getElementById('day'+i).innerHTML = forecastDays[i];
      document.getElementById('pic'+i).setAttribute('src', 'https://openweathermap.org/img/w/' + forecastImg[i] + '.png');
      document.getElementById('pic'+i).setAttribute('alt', forecastDesc[i]);
      document.getElementById('temp'+i).innerHTML = forecastTemps[i].toFixed(0);
  
    }
  
  }