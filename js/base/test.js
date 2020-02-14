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