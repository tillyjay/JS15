
//select elements 
const video = document.querySelector('.video-container');
const btn = document.querySelector('.switch-btn');

//add event listener for button 'click'
btn.addEventListener('click', () => {
    //check if btn already has 'slide' class
    if (btn.classList.contains('slide')) {
        //if it does, remove 'slide' and pause video
        btn.classList.remove('slide');
        video.pause();
    } else {
        //otherwise, toffle 'slide' and play video
        btn.classList.toggle('slide');
        video.play();
    }
});
