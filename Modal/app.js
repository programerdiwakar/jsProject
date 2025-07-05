const modalbtn = document.querySelector('.modal-btn');
const closebtn = document.querySelector('.close-btn');
const modaloverlay = document.querySelector('.modal-overlay');


modalbtn.addEventListener('click', () => {
    modaloverlay.classList.add('open-modal');
});

console.log(closebtn.classList)

closebtn.addEventListener("click", function () {
  modaloverlay.classList.remove("open-modal");
});