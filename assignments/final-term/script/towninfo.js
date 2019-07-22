var div = document.querySelector('.templeData');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var townData = request.response;
    var townArray = townData['towns'];

    for (var i = 0; i < townArray.length; i++) {
        if (townArray[i].name == 'Fish Haven' || townArray[i].name == 'Preston' || townArray[i].name == 'Soda Springs') {

            var article = document.createElement('article')
            var h3 = document.createElement('h3');
            var para1 = document.createElement('p');
            var para2 = document.createElement('p');
            var para3 = document.createElement('p');
            var para4 = document.createElement('p');
            var image = document.createElement("img");

            h3.textContent = townArray[i].name;
            para1.textContent = townArray[i].motto;
            para2.textContent = "Year Founded:  " + townArray[i].yearFounded;
            para3.textContent = "Population:  " + townArray[i].currentPopulation;
            para4.textContent = "Average Rainfall:  " + townArray[i].averageRainfall + " in";

            
           
            
            if (townArray[i].name == 'Fish Haven') {
                image.setAttribute("src", "images/fishhaventown.jpg");
                image.setAttribute("alt", "Lakeside ");
            } else if (townArray[i].name == 'Preston') {
                image.setAttribute("src", "images/prestontown.jpg");
                image.setAttribute("alt", "Town sign");
            } else if (townArray[i].name == 'Soda Springs') {
                image.setAttribute("src", "images/sodaspringstown.jpg");
                image.setAttribute("alt", "Geyser ");
            }
            article.appendChild(h3);
            article.appendChild(para1);
            article.appendChild(para2);
           article.appendChild(para3);
            article.appendChild(para4);
            article.appendChild(image);
            
            div.appendChild(article);
        }
    }

}


