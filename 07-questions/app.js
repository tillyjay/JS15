//using selectors inside the element
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


// traversing the dom
