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

        //select edit/delete btns that were added dynamically                    
        const deleteBtn = element.querySelector('.delete-btn');
        const editBtn = element.querySelector('.edit-btn');

        //add event listeners where there is access to btns
        deleteBtn.addEventListener('click', deleteItem);
        editBtn.addEventListener('click', editItem);

        //append new grocery item ele to list 
        list.appendChild(element);

        //display alert 
        displayAlert('item added to list', 'success');

        //show container 
        container.classList.add('show-container');

        //add to local storage
        addToLocalStorage(id, value);

        //set back to default
        setBackToDefault();
 
    } else if (value && editFlag) {
        //update innerHTML of editElement with new value
        editElement.innerHTML = value;

    

        //set back to default
        setBackToDefault();
      
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


//clear items 
const clearItems = () => {
    const items = document.querySelectorAll('.grocery-item');

    //if there is more than 1 item 
    //loop through grocery list and remove each item
    if(items.length > 0) {
        items.forEach((item) => {
            list.removeChild(item);
        });
    }
    //remove class and hide container
    container.classList.remove('show-container');

    //display alert
    displayAlert('empty list', 'danger');

    //set back
    setBackToDefault();

    //remove from local storage
    //localStorage.removeItem('list');
};


//delete item
const deleteItem = (e) => {
    //target article w class 'grocery-item'
    const element = e.currentTarget.parentElement.parentElement;
    //target 'grocery-item' id
    const id = element.dataset.id;

    //remove ele from parent list 
    list.removeChild(element);

    //if there are no items
    if(list.children.length === 0) {
        //remove class and hide container
        container.classList.remove('show-container');
    }

    //display alert
    displayAlert('item removed', 'danger');

    //set back
    setBackToDefault();

    //remove from local storage
    //removeFromLocalStorage(id);
};


//edit item
const editItem = (e) => {
    //target article w class 'grocery-item'
    const element = e.currentTarget.parentElement.parentElement;

    //set edit item 
    editElement = e.currentTarget.parentElement.previousElementSibling;

    //set form value
    grocery.value = editElement.innerHTML;

    //set edit flag
    editFlag = true;

    //target 'grocery-item' id
    const id = element.dataset.id;

    //set edit ID
    editID = id;

    submitBtn.textContent = 'Edit';

};


//set back to default 
const setBackToDefault = () => {
    //set input back to empty string
    grocery.value = '';
    editFlag = false;
    editID = '';
    submitBtn.textContent = 'submit';   
};


// ****** EVENT LISTENERS **********
//submit form 
form.addEventListener('submit', addItem);

//clear items
clearBtn.addEventListener('click', clearItems);

//


// ****** LOCAL STORAGE **********

const addToLocalStorage = (id, value) => {
    console.log('added to local storage');
};

const removeFromLocalStorage = (id) => {

};


// ****** SETUP ITEMS **********
