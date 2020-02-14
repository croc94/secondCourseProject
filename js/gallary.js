'use strict'

let forwardButton = document.getElementById ('forward');
let backButton = document.getElementById ('back');
let galleryContainer = document.getElementsByClassName ('data-foto');

//фон
let galleryFotoNum = 1;
for (let i = 0; i < galleryContainer.length; i++) {
    galleryContainer[i].style.backgroundImage = 'url("img/gallery_' + galleryFotoNum + '.jpg")';
    galleryFotoNum = galleryFotoNum + 1;
}

let currentFoto = 0;
galleryContainer[currentFoto].className = 'data-foto data-foto-show'

forwardButton.onclick = nextFoto;
backButton.onclick = previousFoto;

function nextFoto () {
    changeFoto (currentFoto + 1) 
}

function previousFoto () {
    changeFoto (currentFoto - 1) 
};

function changeFoto (n) {
    
    galleryContainer[currentFoto].className = 'data-foto';
    currentFoto = (n + galleryContainer.length) % galleryContainer.length;
    galleryContainer[currentFoto].className = 'data-foto data-foto-show';
}