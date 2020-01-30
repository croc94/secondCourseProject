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
        },
        article1 : {
            title : 'Польза приседаний',
            menu : 'article1'
        },
        article2 : {
            title : 'Виды приседаний',
            menu : 'article2'
        },
        article3 : {
            title : 'Рекорд',
            menu : 'article3'
        },
        article4 : {
            title : 'Техника',
            menu : 'article4'
        },
        article5 : {
            title : 'Галерея изображений',
            menu : 'article5'
        },
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

    let page = $(e.currentTarget).attr ('data-menu');

    loadPage (page);
    history.pushState ({page : page}, '', page);
}

//upload content
function loadPage (page) {
    let url = '';
    if ((page == 'main') || (page == 'report') || (page == 'plan') || (page == 'enter') || (page == 'registr') || (page == 'contacts')) {
        url = '../../html/' + page + '.html';
    } else {
        url = '../../html/articles/' + page + '.html';
    }
    console.log ('переход будет по урлу ' + url);
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
