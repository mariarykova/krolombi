let clickElement = document.querySelectorAll(".click");
let galleryModal = document.getElementById("modal__gallery");
let crossBtn = document.getElementById("modal__gallery_btn_cross");
let tableBtn = document.getElementById("modal__gallery_btn_table");
let grid = document.getElementById("grid");

console.log(galleryModal);

for (let element of clickElement) {
    element.addEventListener("click", myFunction);
}

crossBtn.addEventListener("click", closeModal);
tableBtn.addEventListener("click", changeView);

//clickElement.forEach(element => element.addEventListener("click", myFunction));

function myFunction() {
    galleryModal.style.display = "block";
    document.body.style.overflow = 'hidden';
    galleryModal.style.overflow = "scroll";
  }

  function closeModal() {
    galleryModal.style.display = "none";
    document.body.style.overflow = "visible";
  }

  function changeView() {
    grid.classList.toggle('modal__grid');
  }
