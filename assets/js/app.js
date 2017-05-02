var mostrar=document.getElementById("mostrar");
var inputs=document.getElementsByClassName("oculto");
var tamaño=document.getElementsByClassName("turn");
var menu=document.getElementsByClassName("inicio");
var letras=document.getElementsByClassName("letra");
mostrar.addEventListener("click",function(){
    tamaño[0].style.height="556px";
  inputs[0].style.display="block";
    inputs[1].style.display="block";
      inputs[2].style.display="block";

});

var lastScrollTop = 0;
window.addEventListener("scroll", function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
       menu[0].style.background= "#fff";
      letras[0].style.color= "#000";
      letras[1].style.color= "#000";
      letras[2].style.color= "#000";
      letras[3].style.color= "#000";
    }
    else{
      if( currentScroll <= 3 ){
        menu[0].style.background= "#000";
        letras[0].style.color= "#fff";
        letras[1].style.color= "#fff";
        letras[2].style.color= "#fff";
        letras[3].style.color= "#fff";
      }
    }
    lastScrollTop = currentScroll;
}, false);
