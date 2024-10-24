
//select elements 
const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

//add event listener to about element
about.addEventListener('click', (e) => {
    //get value of the data-id attribute from clicked element
    const id = e.target.dataset.id;

    //check if element has a data-id attribute
    if (id) {
        //loop through buttons
        btns.forEach((btn) => {
            //remove active class from other buttons 
            btn.classList.remove('active');
            //add active class to clicked button
            e.target.classList.add('active');
        });

        //loop through articles and hide them by removing active class
        articles.forEach((article) => {

            article.classList.remove('active');

            //if article id matches clicked button's data-id add active class
            if (article.id === id) {
                article.classList.add('active');
            }
        });
    } 

});