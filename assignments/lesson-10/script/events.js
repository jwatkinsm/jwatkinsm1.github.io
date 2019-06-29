
var section = document.querySelector('.events');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var request = new XMLHttpRequest();



request.open('GET', requestURL);

request.responseType = 'json';

request.send();



request.onload = function () {

    var townData = request.response;

    showData(townData);

}



function showData(jsonObj) {

    var towns = jsonObj['towns'];



    for (var i = 0; i < towns.length; i++) {

        var myList = document.createElement('ul');

        if (towns[i].name == "Preston") {

            var events = towns[i].events;

            for (var j = 0; j < events.length; j++) {

                var listItem = document.createElement('li');

                listItem.textContent = events[j];

                myList.appendChild(listItem);



            }

            section.appendChild(myList);

        }

    }

}