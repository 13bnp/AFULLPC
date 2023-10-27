//popup
const serviceButton = document.querySelector('.services2');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');

serviceButton.addEventListener('click', () => {
    popup.style.display = 'flex';
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});