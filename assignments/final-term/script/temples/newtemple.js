var temples = document.getElementById("temple");

var templesURL = 'https://jwatkinsm.github.io/assignments/final-term/script/newtemple.json';

let templesRequest = new XMLHttpRequest();
templesRequest.open('GET', templesURL, true);
templesRequest.send();
templesRequest.onload = function() {
  let templesData = JSON.parse(templesRequest.responseText);
  console.log(templesData);

  for (var t=0; t<templesData.temples.length; t++) {
    displayTemple(templesData.temples[t]);
  }
}

function displayTemple(templeData) {
  var cityId = templeData.weatherId;
  var weatherURL = "https://api.openweathermap.org/data/2.5/weather?id="+cityId+"&units=imperial&appid=aadb3e9026e527123d5ce724b990870e";
  let weatherRequest = new XMLHttpRequest();
  weatherRequest.open('GET', weatherURL, true);
  weatherRequest.send();
  weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    var templeD = document.createElement("div");
    templeD.className = "temple-details";
    templeD.innerHTML = ''
      + '<h3>' + templeData.name + '</h3>'
      + '<aside>'
      + '  <img src="https://jwatkinsm.github.io/assignments/final-term/images/' + templeData.photo + '" alt="' + templeData.name + '" class="temple-photo">'
      + '  <p>'
      + '    Currently: ' + weatherData.weather[0].main + '<br>'
      + '    High: ' + weatherData.main.temp_max + 'º F<br>'
      + '    Humidity: ' + weatherData.main.humidity + '%<br>'
      + '    Wind Speed: ' + weatherData.wind.speed + ' mph<br>'
      + '  </p>'
      + '</aside>'
      + '<div class="main-info'+ templeData.weatherId +'">'
      + templeData.history
      + '<ul>'
      + '<li><b>Address:</b> ' + templeData.address + '</li>'
      + '<li><b>Phone number:</b> ' + templeData.phone + '</li>'
      + '<li><b>Services:</b> ' + templeData.services + '</li>'
      + '<li><b>Schedule:</b><ul>'
      + '  <li><b>Baptism:</b> ' + templeData.schedules.baptism + '</li>'
      + '  <li><b>Initiatory:</b> ' + templeData.schedules.initiatory + '</li>'
      + '  <li><b>Endowment:</b> ' + templeData.schedules.endowment + '</li>'
      + '  <li><b>Sealing:</b> ' + templeData.schedules.sealing + '</li>'
      + '</ul></li>'
      + '<li><b>Closures:</b> ' + templeData.closures + '</li>'
      + '<li>More Info at <a title="ChurchofJesusChrist.org: ' + templeData.name + '" href="' + templeData.link + '">ChurchofJesusChrist.org</a>.</li>'
      + '</ul>'
      + '</div>';
    temples.appendChild(templeD);
  }
}