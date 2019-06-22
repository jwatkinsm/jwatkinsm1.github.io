
    var main = document.querySelector('main');
    var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        
      var townData = request.response;
      showTowns(townData);
    }
    
    function showTowns(jsonObj) {
      var towns = jsonObj['towns'];
      
      for(var i = 0; i < towns.length;i++) {
       towns.shift();
       towns.push();
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
       var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
     
        myH2.textContent = towns[i].name;
        myPara1.textContent = 'motto: ' + towns[i].motto;
        myPara2.textContent = 'yearFounded: ' + towns[i].yearFounded;
        myPara3.textContent = 'current population:' + towns[i].currentPopulation;
        myPara4.textContent = 'average rain fall: ' + towns[i].averageRainfall;
     
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        main.appendChild(myArticle);
      }
    }