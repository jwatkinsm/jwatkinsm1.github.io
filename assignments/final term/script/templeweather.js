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
      document.getElementById('windchill').innerHTML= result;}