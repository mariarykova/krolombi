  //window.onload = function () {

   // function sayHi() {
    //  let preloader = document.getElementById('preloader');
   //   let menu = document.getElementById('menu');
   //   let cover = document.getElementById('cover');
    //  preloader.style.display = 'none';
    //  menu.classList.add("hide");
    //  cover.classList.add("hide");
   // }
   // setTimeout(sayHi, 3000);
 // }

 window.addEventListener("load", function(){

  setTimeout(() => {
    let preloader = document.getElementById('preloader');
    let menu = document.getElementById('menu');
    let cover = document.getElementById('cover');
    menu.classList.add("hide");
    cover.classList.add("hide");
    preloader.remove();
  }, 3000);

  //let preloader = document.getElementById('preloader');
  //preloader.remove();
});

//document.addEventListener("DOMContentLoaded", () => {
  //let overlay = document.getElementsByClassName("overlay")[0];
  //let loading = document.getElementById('preloader');

  //setTimeout(() => {
    //loading.remove();
    //overlay.classList.add("loaded");
  //}, 3000);
//});

