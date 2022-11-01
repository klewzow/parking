
function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
        }
    }
}
ibg();

 
var burger = document.querySelector('.burger__menu-button');
burger.addEventListener('click', function () {
    document.querySelector('.burger__menu-button').classList.toggle("burger__close");
    document.querySelector('.burger__menu-body').classList.toggle("_active");
    document.querySelector('body').classList.toggle("lock");
    
}
  );


function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
        }
    }
}
ibg();






