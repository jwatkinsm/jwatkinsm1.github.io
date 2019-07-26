
var div = document.querySelector('.templegeneral');
var requestURL = 'https://jwatkinsm.github.io/assignments/final-term/script/temples.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
      var templeArray = request.response;
      showtemples(templeArray);
    }
   
   /////////General/////////
    function showtemples(jsonObj) {
      
      var temples = jsonObj['temples'];
      for(var i = 0; i < temples.length; i++) {
        if (temples[i].name == 'Philadelphia Pennsylvania Temple' || 
            temples[i].name == 'Freiberg Germany Temple' ||
            temples[i].name == 'Laie Hawaii Temple' ||
            temples[i].name == 'Chicago Illinois Temple'
            ){
        var myArticle = document.createElement('article');
        var myimg = document.createElement('img');
        var myH3 = document.createElement('h3');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myList = document.createElement('ul');
       
        var link =document.createElement('a');

        myH3.textContent = temples[i].name;
        myPara1.textContent = 'Address: ' + temples[i].address;
        myPara2.textcontent = temples[i].statecountry;
        myPara3.textContent = 'Phone: ' + temples[i].telephone;
        myPara4.textContent = 'History:';
        link.textContent = 'Learn More'
        var powers = temples[i].history;
        for(var j = 0; j < powers.length; j++) {
          var listItem = document.createElement('li');
          listItem.textContent = powers[j];
          myList.appendChild(listItem);
        }
        if (temples[i].name == 'Freiberg Germany Temple') {
          myArticle.setAttribute
          myimg.setAttribute("src", "images/celeste.jpg");
         myimg.setAttribute("alt", "Lakeside ");
         link.setAttribute("href", "contact.html");
        }
        myArticle.appendChild(myimg);
        myArticle.appendChild(myH3);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myList);
        
       myArticle.appendChild(link);
        div.appendChild(myArticle);
      }
      }
    }
    
//////////////Home/////////////

