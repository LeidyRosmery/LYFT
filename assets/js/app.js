var mostrar = document.getElementById("mostrar");
var inputForm = document.getElementsByClassName("input-form");
var logo = document.getElementById("logo");
var sign = document.getElementById("sign");
var login = document.getElementById("login");
var inputs = document.getElementsByClassName("hidden");
var tamaño = document.getElementsByClassName("turn");
var menu = document.getElementsByClassName("menu");
var item = document.getElementsByClassName("item");
var redexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
mostrar.addEventListener("click", function() {
    inputs[1].style.display = "inline-block";
    inputs[2].style.display = "inline-block";
    inputs[3].style.display = "inline-block";
    inputs[4].style.display = "block";
    inputs[5].style.display = "inline-block";
    inputs[6].style.display = "inline-block";

});

var empty = function(e) {
    console.log(e.target.value.length);
    if (e.target.value.length == 0) {
        e.target.style.borderBottomColor = "red";
    }
}

var validaLetras = function(e) {
    var codigoTecla = e.keyCode;
    if ((codigoTecla >= 97 && codigoTecla <= 122) || (codigoTecla >= 65 && codigoTecla <= 90) || codigoTecla == 39 || codigoTecla == 32) {
                return true;
    } else {
        return false;
    }
}

var validaNumeros = function(e) {
    var codigoTecla = e.keyCode;
    if ((codigoTecla >= 97 && codigoTecla <= 122) || (codigoTecla >= 65 && codigoTecla <= 90) || codigoTecla == 39 || codigoTecla == 32) {
                return false;
    } else {
        return true;
    }
}

inputForm[0].onkeypress = validaNumeros;
inputForm[2].onkeypress = validaLetras;
inputForm[3].onkeypress = validaLetras;
inputForm[0].onblur = empty;
inputForm[1].onblur = empty;
inputForm[2].onblur = empty;
inputForm[3].onblur = empty;
inputForm[4].onblur = empty;
inputForm[5].onblur = empty;

var lastScrollTop = 0;
window.addEventListener("scroll", function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        sign.style.left = "0px";
        logo.src = "assets/img/logo-pink.png";
        login.style.border = "#333447 solid 1px";
        menu[0].style.background = "#fff";
        item[0].style.color = "#000";
        item[1].style.color = "#000";
        item[2].style.color = "#000";
        item[3].style.color = "#000";
    } else {
        if (currentScroll <= 3) {
            login.style.border = "#fff solid 1px";
            sign.style.left = " 212px";
            logo.src = "assets/img/logo-white.png";
            menu[0].style.background = "transparent";
            item[0].style.color = "#fff";
            item[1].style.color = "#fff";
            item[2].style.color = "#fff";
            item[3].style.color = "#fff";
        }
    }
    lastScrollTop = currentScroll;
}, false);
