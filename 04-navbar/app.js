//select nav toggle and links
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

//add an event listener to navToggle button
navToggle.addEventListener('click', () => {
    //toggle 'show-links' class on links, will either add or remove the class
    links.classList.toggle('show-links');
});