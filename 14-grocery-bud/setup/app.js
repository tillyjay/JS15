// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editID = '';


// ****** FUNCTIONS **********
const addItem = (e) => {
    e.preventDefault();

    const value = grocery.value;
    const id = new Date ().getTime().toString();

    if (value && !editFlag) {

        console.log('add item to list');
    } else if (value && editFlag) {
        
        console.log('editing');
    } else {

        displayAlert('please enter value', 'danger');
    }
};

//display alert 
const displayAlert = (text, action) => {
    
    //set message and make alert visible
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    //hide alert after 3 seconds 
    setTimeout(() => {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 3000);
};


// ****** EVENT LISTENERS **********
//submit form 
form.addEventListener('submit', addItem);


// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
