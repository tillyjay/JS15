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
    //prevent default submission behaviour
    e.preventDefault();

    //get value from grocery input field
    const value = grocery.value;
    //generate a unique ID baded on current timestamp
    const id = new Date ().getTime().toString();

    //check if input value exists and not in edit mode
    if (value && !editFlag) {
        //create a new article ele to rep grocery item
        const element = document.createElement('article');
        //add class 
        element.classList.add('grocery-item');
        //create custom attribute 'data-id' to store item's ID
        const attr = document.createAttribute('data-id');
        //set val to generated ID
        attr.value = id;
        //attach attribute to ele
        element.setAttributeNode(attr);
        //set HTML of ele with grocery item details
        element.innerHTML = `<p class="title">${value}</p>
                            <div class="btn-container">
                                <button type="button" class="edit-btn">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button type="button" class="delete-btn">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>`
        //append new grocery item ele to list 
        list.appendChild(element);

        //display alert 
        displayAlert('item added to list', 'success');

        //show container 
        container.classList.add('show-container');
 
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
    }, 2000);
};


// ****** EVENT LISTENERS **********
//submit form 
form.addEventListener('submit', addItem);


// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
