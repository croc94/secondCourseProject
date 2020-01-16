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
    let changeMom = document.getElementById ('workBlock');
    let texting = '<div><input type="button" value="Войти" onclick="valid (document.getElementById ("forma"))"><input type="button" value="Зарегистрироваться" onclick="registr ()"></div>'
    changeMom.innerHTML = texting;
}