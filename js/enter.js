'use strict'

function valid (form) {
    let fail = false;
    let login = form.login.value;
    let password = form.password.value;
    if (login == '' || login == ' ') {
        fail = 'Вы не верно ввели логин'
    } else if (password == '') {
            fail = 'Вы не ввели пароль'
        }
    if (fail) {
        alert (fail);
    } else {
        window.location = 'https://www.google.com'
    }
}

function registr () {
    /* переход и подгрузка от первой ко второй странице регистрации */
    let blockHTML= document.getElementById ('workBlock');
    blockHTML.innerHTML = dataObj['page2']['html'];

    let blockCSS= document.getElementById ('ChangeStyle');
    blockCSS.innerHTML = dataObj['page2']['css'];

    let blockJS= document.getElementById ('ChangeScript');
    blockJS.innerHTML = dataObj['page2']['js'];
}