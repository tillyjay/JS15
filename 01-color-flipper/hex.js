const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//get button element by its id
const btn = document.getElementById('btn');

//get span elelment with class color where color code is displayed
const color = document.querySelector('.color');

//add event listener for button click 
btn.addEventListener('click', () => {

    //begining hash
    const hash = "#"
    //call function randomHexCode passing hex array vals to get random hex code
    const hexMinusHash = randomHex(hex);
    //combine # and hexCode to create full random hex code
    const randomHexCode = hash + hexMinusHash;

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

    return hexCode;
}