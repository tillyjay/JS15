const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//get button element by its id
const btn = document.getElementById('btn');

//get span elelment with class color where color code is displayed
const color = document.querySelector('.color');

//add event listener for button click 
btn.addEventListener('click', () => {

    //call function randomHexCode passing hex arrau vals to get random hex code
    let randomHexCode = randomHex(hex);

    //set background colour of body to random colour
    document.body.style.backgroundColor = randomHexCode;

    //update text content of the 'color' span with chosen color
    color.textContent = randomHexCode;
});


//function to generate random hex code 
let randomHex = (hex) => {

    //hex code length
    const hexCodeLen = 6; 
    let hexCode = "";

    //loop through generating random element from hex array 6 times and added each ele to hexCode string
    for (let i = 0; i < hexCodeLen; i++) {
    const randomHexEl = hex[Math.floor(Math.random() * hex.length)];
        hexCode += randomHexEl;
    }

    console.log(hexCode);

}