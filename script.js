//function that takes an element and adds a class to it
function addClass(element, className) {
    element.classList.add(className);
}

//function that takes an element and removes a class from it
function removeClass(element, className) {
    element.classList.remove(className);
}

//function that takes an element and toggles a class on it
function toggleClass(element, className) {
    element.classList.toggle(className);
}

//function that takes an element and checks if it has a class
function hasClass(element, className) {
    return element.classList.contains(className);
}

//function that checks if the nav linked was cliced and toggles the class on the nav
function toggleNav() {
    var navLink = document.getElementByClassName('navLink');
    toggleClass(navLink, 'nav-link-cliked');
}

//listener that listens for a click on the nav link and calls the toggleNav function
document.getElementById('navLink').addEventListener('click', toggleNav);