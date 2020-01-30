'use strict'

let configArticle = {
    siteTitle : 'YourSquat',
    mainPage : 'main',
    articles : {
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

let  uiArticle = {
    $body : $('body'),
    $menu : $('#menu'),
    $pageTitle : $('#page-title'),
    $content : $('#content')
};

//work with events
function bindHandlersArticle () {
    uiArticle.$body.on ('click', 'div[data-articleLink="ajax"]', navigateArticle);
    window.onpopstate = popStateArticle;
}

//go/back buttons
function popStateArticle (e) {
    let page = (e.state && e.state.articles) || configArticle.mainPage;
    loadPageArticle (page);
}

//click on link
function navigateArticle (e) {
    let page = $(e.currentTarget).attr ('data-article');
    
    loadPageArticle (page);
    history.pushState ({page : page}, '', page);
}

//upload content
function loadPageArticle (page) {
    let url = '../html/articles/' + page + '.html';

    let pageTitle = configArticle.articles[page].title;

    $.get (url, function (html) {
        document.title = pageTitle + ' | ' + configArticle.siteTitle;
        uiArticle.$pageTitle.html (pageTitle);
        uiArticle.$content.html (html);
    })
}

function initarAr () {
    let page = document.location.pathname.substr (1) || config.mainPage;
    
    loadPageArticle (page);
    
    bindHandlersArticle ();
}

//start application
$(document).ready (initarAr ());