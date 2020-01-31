'use strict'

function move () {
    let head = document.getElementById ('svgHead');
    let body = document.getElementById ('svgBody');
    let arm = document.getElementById ('svgArm');
    let hip = document.getElementById ('svgHip');
    let shin = document.getElementById ('svgShin');
    //запомнил когда началась анимация
    let startAnim = Date.now ();
    let timer = setInterval (function () {
        //время прошедшее с начала анимации
        let timePass = Date.now () - startAnim;

        if (timePass < 1000) {
            drawDown (timePass, head, body, arm, hip, shin);
        } else if (timePass > 2000) {
            head.setAttribute ('cy', '5rem');
            body.setAttribute ('cy', '9.5rem');
            arm.setAttribute ('cy', '9.5rem');
            arm.setAttribute ('transform', 'rotate (0)');
            hip.setAttribute ('transform', 'rotate (0)');
            shin.setAttribute ('transform', 'rotate (180)');
            clearInterval (timer);
            return;
        } else {
            drawUp (timePass, head, body, arm, hip, shin);
        }
    }, 100)
}

function drawUp (timePass, head, body, arm, hip, shin) {
    let headCY = head.getAttribute ('cy');
    headCY = parseFloat (headCY)
    headCY = headCY - 0.1;
    head.setAttribute ('cy', headCY + 'rem');

    let bodyCY = body.getAttribute ('cy');
    bodyCY = parseFloat (bodyCY)
    bodyCY = bodyCY - 0.1;
    body.setAttribute ('cy', bodyCY + 'rem');
    
    let armCY = arm.getAttribute ('cy');
    armCY = parseFloat (armCY)
    armCY = armCY - 0.1;
    arm.setAttribute ('cy', armCY + 'rem');

    //поворот руки
    let armTr = arm.getAttribute ('transform');
    let armTr2 = armTr.substr (8);
    armTr = parseFloat (armTr2);
    armTr = armTr + 7;
    arm.setAttribute ('transform', 'rotate (' + armTr + ')');

    //опускание бедра
    let hipTr = hip.getAttribute ('transform');
    hipTr = hipTr.substr (8);
    hipTr = parseFloat (hipTr);
    hipTr = hipTr + 4;
    hip.setAttribute ('transform', 'rotate (' + hipTr + ')');

    //голень
    let shinTr = shin.getAttribute ('transform');
    shinTr = shinTr.substr (8);
    shinTr = parseFloat (shinTr);
    shinTr = shinTr - 4;
    shin.setAttribute ('transform', 'rotate (' + shinTr + ')');

}

function drawDown (timePass, head, body, arm, hip, shin) {
    let headCY = head.getAttribute ('cy');
    headCY = parseFloat (headCY)
    headCY = headCY + 0.1;
    head.setAttribute ('cy', headCY + 'rem');

    let bodyCY = body.getAttribute ('cy');
    bodyCY = parseFloat (bodyCY)
    bodyCY = bodyCY + 0.1;
    body.setAttribute ('cy', bodyCY + 'rem');
    
    let armCY = arm.getAttribute ('cy');
    armCY = parseFloat (armCY)
    armCY = armCY + 0.1;
    arm.setAttribute ('cy', armCY + 'rem')

    //поворот руки
    let armTr = arm.getAttribute ('transform');
    let armTr2 = armTr.substr (8);
    armTr = parseFloat (armTr2);
    armTr = armTr - 7;
    arm.setAttribute ('transform', 'rotate (' + armTr + ')');

    //опусканиебедра
    let hipTr = hip.getAttribute ('transform');
    hipTr = hipTr.substr (8);
    hipTr = parseFloat (hipTr);
    hipTr = hipTr - 4;
    hip.setAttribute ('transform', 'rotate (' + hipTr + ')')

    //голень
    let shinTr = shin.getAttribute ('transform');
    shinTr = shinTr.substr (8);
    shinTr = parseFloat (shinTr);
    shinTr = shinTr + 4;
    shin.setAttribute ('transform', 'rotate (' + shinTr + ')');
}

function time () {
    //чтобы мув выаолнялся каждые две секунды
    let timer2 = setInterval (move, 2000);
    let timerSquat = 10000;
    //let stopTimer2 = clearInterval (timer2;)
    //чтобы через 20 секунды запустилась остановка интервала
    setTimeout (() =>{clearInterval (timer2)}, timerSquat);
}

function clickBut (timing) {
    if (!timing) {
        return
    } else {
        let timerSquat = timing;
        return timerSquat;
    }
}
