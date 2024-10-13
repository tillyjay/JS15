//set initial count 
let count = 0;

//select value and buttons 
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

//loop through nodr list, add event listner to each button on click
btns.forEach((btn) => {
    btn.addEventListener('click', () => {

        //change span value by applying count depending on btn class
        if (btn.classList.contains('decrease')) {
            count -= 1;
            value.textContent = count;
        } else if (btn.classList.contains('increase')) {
            count += 1;
            value.textContent = count;
        } else if (btn.classList.contains('reset')) {
            count = 0;
            value.textContent = count;
        }

        //change span value colour depending on above, below, or 0
        if(count >= 1) {
            value.style.color = 'green';
        } else if (count <= -1) {
            value.style.color = 'red';
        } else {
            value.style.color = 'black';
        }
        
    });

});




