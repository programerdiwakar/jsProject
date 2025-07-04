const navtoggle = document.querySelector('.nav-toggle');
const Link = document.querySelector('.links');

navtoggle.addEventListener('click', () => {
    Link.classList.toggle('show-links');
})