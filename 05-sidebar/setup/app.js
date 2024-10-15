
//select sidebar toggle, close button, and links
const sidebarToggle = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

//add event listner to sidebar toggle button
sidebarToggle.addEventListener('click', () => {
    //toggle 'show-sidebar' class on links 
    sidebar.classList.toggle('show-sidebar');
    console.log(sidebar.classList);
});

//add event listner to clost button 
closeBtn.addEventListener('click', () => {
    //remove 'show-sidebar' class on links
    sidebar.classList.remove('show-sidebar');
});