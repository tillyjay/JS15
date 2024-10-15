//Toggle questions in 3 different ways 

//using selectors inside element
//select all elements with class question
const questions = document.querySelectorAll('.question');

//loop through each 'question' element in NodeList
questions.forEach(question => {
    //for each 'question', find button with class 'question-btn'
    const btn = question.querySelector('.question-btn');
    //add a 'click' event listener to the button
    btn.addEventListener('click', () => {
        //loop through all 'questions' again to handle other open questions
        questions.forEach(item => {
            //if item is not current question (one being clicked), remove 'show-text' class
            if (item !== question) {
                item.classList.remove('show-text');
            }
        });
        //toggle 'show-text' class on current question
        //either add or remove class for clicked question
        question.classList.toggle('show-text');
    });
});



//toggle and remove selectors
//select all elements individually 
const question = document.querySelector('.question');
const plusBtn = document.querySelector('.plus-icon');
const minusBtn = document.querySelector('.minus-icon');

//add event listner to show question text on plus button click 
plusBtn.addEventListener('click', () => {
    question.classList.toggle('show-text');
});

//add event listner to hide question text on minus button click
minusBtn.addEventListener('click', () => {
    question.classList.remove('show-text');
});



//traversing the dom
//select all elements with class 'question-btn'
const btns = document.querySelectorAll('.question-btn');

//loop through each element in 'btns' NodeList
btns.forEach(btn => {
    //for each button add click event listener
    btn.addEventListener('click', (e) => {
        //find grandparent element of clicked button
        //'e.currentTarget' refers to clicked button
        //'parentElement.parentElement' moves up two levels to grandparent element 
        const question = e.currentTarget.parentElement.parentElement
        //toggle 'show-text' class on grandparent element (question) to show or hide text
        question.classList.toggle('show-text');
    });
});