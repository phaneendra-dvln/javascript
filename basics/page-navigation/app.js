//When the window loads, call this initialize function
function init(event) {
    var pages = ["page1.html", "page2.html", "page3.html"],
        win = window,
        locParts = win.location.href.split("/"),
        curPage = locParts[locParts.length - 1],
        pageCounter = 0,
        leftArrow = document.getElementById('leftArrow'),
        rightArrow = document.getElementById('rightArrow');

    for (let i = 0; i < pages.length; i++) {
        if (curPage === pages[i]) {
            pageCounter = i;
        }
    }

    //Add function for going to next and previous page.

    function navigateToNextPage() {
        var nextPage = pages[pageCounter + 1];

        if (nextPage) {
            win.location.href = win.location.href.replace(curPage, nextPage);
        }
    }

    function navigateToPrevPage() {
        var prevPage = pages[pageCounter - 1];

        if (prevPage) {
            win.location.href = win.location.href.replace(curPage, prevPage);
        }
    }

    //Add Event listeners for key and mouse click.

    rightArrow.addEventListener('click', navigateToNextPage);
    leftArrow.addEventListener('click', navigateToPrevPage);

    win.addEventListener('keydown', function (e) {
        if (e.keyCode == '37') {
            navigateToPrevPage();
        } else if (e.keyCode == '39') {
            navigateToNextPage();
        }
    });
}

init();
