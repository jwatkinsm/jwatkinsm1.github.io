/////////General/////////
var div = document.querySelector('.templeData');
var requestURL = 'https://jwatkinsm.github.io/assignments/final-term/script/temples.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
      var templeArray = request.response;
      showtemples(templeArray);
    }
   
    function showtemples(jsonObj) {
      var temples = jsonObj['temples'];
      for(var i = 0; i < temples.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myList = document.createElement('ul');
        var myimg = document.createElement('img');
        myH2.textContent = temples[i].name;
        myPara1.textContent = 'Address: ' + temples[i].address;
        myPara2.textcontent = temples[i].statecountry;
        myPara3.textContent = 'Phone: ' + temples[i].telephone;
        myPara4.textContent = 'History:';
        var powers = temples[i].history;
        for(var j = 0; j < powers.length; j++) {
          var listItem = document.createElement('li');
          listItem.textContent = powers[j];
          myList.appendChild(listItem);
        }
     
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myList);
        myArticle.appendChild(myimg)
        div.appendChild(myArticle);
      }
    }
//////////////Home/////////////
