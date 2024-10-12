//array of colors to randomly select from
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

//get button element by its id
const btn = document.getElementById('btn');

//get span elelment with class color where color code is displayed
const color = document.querySelector('.color');

//add event listener for button click 
btn.addEventListener('click', () => {

    //call function randomNumber passing colors array as val and get random index    
    const randomIndex = randomNumber(colors);

    //set background colour of body to random colour
    document.body.style.backgroundColor = colors[randomIndex];
    
    //update text content of the 'color' span with chosen color
    color.textContent = colors[randomIndex];

});

//function to generate random index based off of length of colors array
let randomNumber = (colors) => {

    //get total numbers of colours available
    let colorLen = colors.length;
    //generate a random number between 0 and length of colors array
    let randomNum = Math.floor(Math.random() * colorLen);
    //return random number (index) to be used for colour selection
    return randomNum;
}



