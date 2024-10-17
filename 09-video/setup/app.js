
//select elements 
const video = document.querySelector('.video-container');
const btn = document.querySelector('.switch-btn');
const preloader = document.querySelector('.preloader')


//when page fully loads hide preloader 
window.addEventListener('load', () => {
    preloader.classList.add('hide-preloader');
});
  

//add event listener for button 'click'
btn.addEventListener('click', () => {
    //check if btn already has 'slide' class
    if (btn.classList.contains('slide')) {
        //if it does, remove 'slide' and pause video
        btn.classList.remove('slide');
        video.pause();
    } else {
        //otherwise, toffle 'slide' and play video
        btn.classList.add('slide');
        video.play();
        //vid attributes
        video.loop = true;
        video.muted = true;
        video.controls = true;
    }
});

