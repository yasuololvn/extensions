window.onscroll = function (e) {
// called when the window is scrolled.
    let elements = document.querySelectorAll("[data-pagelet='FeedUnit_{n}']");
    elements.forEach(function (ele, i) {
        if (elements[i].innerHTML.indexOf("Được tài trợ") !== -1) {
            elements[i].remove();
        }
    })
}
