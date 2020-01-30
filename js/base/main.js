'use strict'

let config = {
    siteTitle : 'FitCalendar',
    mainPage : 'main',
    pages : {
        main : {
            title : 'Главная',
            menu : 'main'
        },
        report : {
            title : 'Отчет',
            menu : 'report'
        },
        plan : {
            title : 'План',
            menu : 'plan'
        },
        enter : {
            title : 'Вход',
            menu : 'enter'
        },
        registr : {
            title : 'Зарегистрироваться',
            menu : 'registr'
        },
        contacts : {
            title : 'Контакты', 
            menu : 'contacts'
        }
    }
};

let  ui = {
    $body : $('body'),
    $menu : $('#menu'),
    $pageTitle : $('#page-title'),
    $content : $('#content')
};

//work with events
function bindHandlers () {
    ui.$body.on ('click', 'div[data-link="ajax"]', navigate);
    window.onpopstate = popState;
}

//go/back buttons
function popState (e) {
    let page = (e.state && e.state.page) || config.mainPage;
    loadPage (page);
}

//click on link
function navigate (e) {
    //Прекращает передачу события, те всплытие события
    //e.stopPropagation ();
    //Отменяет выполнение события по умолчания, у примеру переход по сссылке
    //e.preventDefault (); */

    let page = $(e.target).attr ('data-menu');

    loadPage (page);
    history.pushState ({page : page}, '', page);
}

//upload content
function loadPage (page) {
    let url = '../../html/' + page + '.html';
    let pageTitle = config.pages[page].title;
    let menu = config.pages[page].menu;

    $.get (url, function (html) {
        document.title = pageTitle + ' | ' + config.siteTitle;
        console.log ('Работай!!!!')
        ui.$menu.find ('div').removeClass ('active');
        ui.$menu.find ('div[data-menu="' + menu + '"]').addClass ('active');
        ui.$pageTitle.html (pageTitle);
        ui.$content.html (html);
    })
}

 //initialization of application
 function init () {
    let page = document.location.pathname.substr (1) || config.mainPage;
    
    loadPage (page);
    
    bindHandlers ();
}

//start application
$(document).ready (init ());