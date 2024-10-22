// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
//get current year and set it in the element with id 'date'
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
//get elements for navigation toggle button, links container, links
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

//add click event listener for the nav toggle button
navToggle.addEventListener('click', () => {
   
    //determine current height of links container and links
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    //if container height is 0, set it to height of links
    if(containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        //otherwise collapse container
        linksContainer.style.height = 0;
    }
});

// ********** fixed navbar ************
//get navbar and back-to-top link elements
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

//add scroll event listener to window
window.addEventListener('scroll', () => {
     //get current scroll height and navbar height
    const scrollHeight = window.scrollY;
    const navHeight = navbar.getBoundingClientRect().height;

    //if scroll height is greater than navbar height, add 'fixed-nav' class
    if(scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    } else {
         //otherwise, remove 'fixed-nav' class
        navbar.classList.remove('fixed-nav');
    }

    if(scrollHeight > 500) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
});

// ********** smooth scroll ************
// select links
