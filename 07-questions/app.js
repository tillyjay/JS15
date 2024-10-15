//using selectors inside element
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
        console.log(e.currentTarget.parentElement.parentElement)
    })
}) 