'use strict'

/* let app = (function () {
    
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
        }
    };
    
    let  ui = {
        $body : $('body'),
        $menu : $('#menu'),
        $pageTitle : $('#page-title'),
        $content : $('#content')
    };

    //upload content
    function loadPage (page) {
        let url = 'html' + page + '.html';
        let pageTitle = config.pages[page].title;
        let menu = config.pages[page].menu;

        $.get (url, function (html) {
            document.title = pageTitle + ' | ' + config.siteTitle;
            ui.$menu.find ('div').removeClass ('active');
            ui.$menu.find ('div[data-menu="' + menu + '"]').addClass ('active');
            ui.$pageTitle.html (pageTitle);
            ui.$content.html (html);
        })
    }

    //click on link
    function navigate (e) {
        e.stopPropagation ();
        e.preventDefault ();

        let page = $(e.target).attr ('data-menu');

        loadPage (page);
        history.pushState ({page : page}, '', page);
    }

    //go/back buttons
    function popState (e) {
        let page = (e.state && e.state.page) || config.mainPage;
        loadPage (page);
    }

    //work with events
    function bindHandlers () {
        ui.$body.on ('click', 'div[data-link="ajax"]', navigate);
        window.onpopstate = popState;
    }

    

    //initialization of application
    function init () {
        let page = document.location.pathname.substr (1) || config.mainPage;
        loadPage (page);
        
        bindHandlers ();
    }

    //return outside
    return {init : init}
}) ();

//start application
$(document).ready (app.init); */

