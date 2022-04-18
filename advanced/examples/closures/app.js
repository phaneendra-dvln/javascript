(function () {
    let logo = document.getElementById('logo');
    let clicked = false;
    if (logo) {
        logo.addEventListener('click', function () {
            if (clicked) {
                console.log(`you have clicked the logo again.`);
            } else {
                console.log(`you have clicked this logo for the first time.`);
            }
            clicked = true;
        });
    }
})();


(function () {
    let counter = 0;
    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');

    let print = function (printMessage) {
        console.log(printMessage);
    }

    if (btn1 && btn2) {
        btn1.addEventListener('click', function () {
            counter++;
            print(counter);
        });

        btn2.addEventListener('click', function () {
            counter++;
            print(counter);
        });
    }
})();


(function() {
    let counter = 0;
    let doc = this.document;
    let content = doc.getElementById('content');    
    let quotes = content.querySelectorAll('.quote');

    if (quotes) {
        window.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowDown') {
                if (counter < quotes.length) {
                    quotes[counter].style.visibility = 'visible';
                }            
            }
            counter++;
        });
    }
})();