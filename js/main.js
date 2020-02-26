'use strict'

//ссылки для работы с JQuery
let  ui = {
    $body : $('body'),
    $menu : $('#menu'),
    $pageTitle : $('#page-title'),
    $content : $('#content')
};

//событие изменения хэша. когда происходит вызывается функция switchToStateFromURLHash
window.onhashchange = switchToStateFromURLHash;

//эта функция вызывается/срабатывает при изменении хэша, читает его и в соответстви с ним загружает html
function switchToStateFromURLHash () {
    let URLHash=window.location.hash;
    
    if (URLHash != '') {
        let stateStr=URLHash.substr(1);
        let newURL = 'html/' + stateStr + '.html';
        $.ajax(newURL, { type:'GET', dataType:'html', success:dataLoaded, error:errorHandler }
            );
        console.log ('будет переход по адресу ' + newURL); 
    } else {
        let stateStr = 'main';
        location.hash = stateStr;
        let newURL = 'html/' + stateStr + '.html';
        $.ajax(newURL, { type:'GET', dataType:'html', success:dataLoaded, error:errorHandler }
            );
        console.log ('будет переход по адресу ' + newURL);
    }
}

function dataLoaded(data) {
    document.getElementById('content').innerHTML=data;
    /* проба запустить скрипт галереи после того как произошла загрузка ее HTML */
    let URLHash=window.location.hash;
    if (URLHash == '#article5') {
      startGallWork ();
    }
}

function errorHandler(jqXHR,statusStr,errorStr) {
    alert(statusStr+' '+errorStr);
}


//этой функцией я буду отлавливать клики на менюшках
function bindHandlers () {
    ui.$body.on ('click', 'div[data-link="ajax"]', navigate);
}

//этой функцией я буду менять закладку
function navigate (e) {
    let clickTarget = e.currentTarget;
    location.hash = clickTarget.getAttribute ('data-menu');
    console.log ('клик был по ' + clickTarget.getAttribute ('data-menu'));
}


//запуская отлавливание кликов
bindHandlers ();

//загрузка страницы
switchToStateFromURLHash ();



/*  модификация для скрипта чтобы понять работает он вообще или нет*/
/*  */
/*  */
/*  */

function startGallWork () {
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

  forwardButton.onclick = previousFoto;
  backButton.onclick = nextFoto;
}

function nextFoto () {
  let visibleFoto = document.getElementsByClassName ('data-foto-show');
  let numOfShowFoto = parseInt (visibleFoto[0].getAttribute ('data-foto'));//аттрибут пути из которого я вырезу номер фото
  let nextFoto = numOfShowFoto;
  let fotoAtScreen = numOfShowFoto - 1;
  changeFoto (nextFoto, fotoAtScreen);
}

function previousFoto () {
  let visibleFoto = document.getElementsByClassName ('data-foto-show');
  let numOfShowFoto = parseInt (visibleFoto[0].getAttribute ('data-foto'));//аттрибут пути из которого я вырезу номер фото
  let nextFoto = numOfShowFoto - 2;
  let fotoAtScreen = numOfShowFoto - 1;
  changeFoto (nextFoto, fotoAtScreen);
};

function changeFoto (n, currentFoto) {
  console.log ('есть сигнал');
  console.log ('с экрана убрано фото  ' + currentFoto);
  console.log ('на экран выведено фото ' + n);


  let galleryContainer = document.getElementsByClassName ('data-foto');
  console.log ('фото которое сейчас отображается на экране имеет класс' + galleryContainer[currentFoto].className);
  galleryContainer[currentFoto].className = 'data-foto';//фото которое сейчас отображается на экране делаю невидимым
  console.log ('класс после изменения' + galleryContainer[currentFoto].className);
  currentFoto = (n + galleryContainer.length) % galleryContainer.length;
  galleryContainer[currentFoto].className = 'data-foto data-foto-show';
}