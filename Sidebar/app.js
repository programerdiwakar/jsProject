const sidebartoggle = document.querySelector('.sidebar-toggle');
const closebtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

sidebartoggle.addEventListener('click', () => {
    console.log(sidebar.classList);
    sidebar.classList.toggle('show-sidebar');
})

closebtn.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar');
});