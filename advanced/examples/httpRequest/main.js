

var MAINAPP = (function (app) {

    let jsonObj = {};
    let doc = document;

    let loadJSON = function (path) {
        let xobj = new XMLHttpRequest();
        xobj.overrideMimeType('application/json');
        xobj.open('GET', path);
        xobj.onreadystatechange = function () {
            if (xobj.readyState === 4) {
                jsonObj = JSON.parse(xobj.responseText);
                populateHTML();
            }
        }
        xobj.send(null);
    }

    let populateHTML = function () {
        doc.getElementsByTagName('h2')[0].innerHTML = jsonObj.heading;
        let li = doc.getElementsByTagName('li');
        for (let i = 0; i < li.length; i++) {
            li[i].innerHTML = jsonObj.bullets['b' + (i + 1)];
        }
    }

    loadJSON('http://localhost:4202/httpRequestSteps');

    app.populateHTML = populateHTML;

    return app;

})(MAINAPP || {});

