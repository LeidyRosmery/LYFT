var mostrar=document.getElementById("mostrar");
var inputs=document.getElementsByClassName("oculto");
var tamaño=document.getElementsByClassName("turn");
mostrar.addEventListener("click",function(){
    tamaño[0].style.height="556px";
  inputs[0].style.display="block";
    inputs[1].style.display="block";
      inputs[2].style.display="block";

});
