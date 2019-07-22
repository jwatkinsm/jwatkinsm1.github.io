var div = document.querySelector('div');
var requestURL = 'https://jwatkinsm.github.io/assignments/final term/script/temples.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var templeData = request.response;
    var templeArray = templeData['temples'];

    for (var i = 0; i < townArray.length; i++) {
        if (templeArray[i].name == 'Freiberg Germany Temple' || templeArray[i].name == 'Laie Hawaii Temple' || templeArray[i].name == 'Chicago Illinois Temple' || templeArray[i].name == '"Philadelphia Pennsylvania Temple') {

            var article = document.createElement('article')
            var h3 = document.createElement('h3');
            var para1 = document.createElement('p');
            var para2 = document.createElement('p');
            var para3 = document.createElement('p');
            var para4 = document.createElement('p');
            var image = document.createElement("img");

            h3.textContent = templeArray[i].name;
            para1.textContent = templeArray[i].address;
            para2.textContent = "Phone:  " + templeArray[i].telephone;
            para3.textContent = "email:  " + templeArray[i].email;
            para4.textContent = "history:  " + templeArray[i].history;

            
           
            
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

