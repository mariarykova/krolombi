let clickElement = document.querySelectorAll(".click");
let galleryModal = document.getElementById("modal__gallery");
let crossBtn = document.getElementById("modal__gallery_btn_cross");
let tableBtn = document.getElementById("modal__gallery_btn_table");
let grid = document.getElementById("grid");
let items = document.querySelectorAll(".item");

console.log(items);

for (let element of clickElement) {
    element.addEventListener("click", openModal);
}

crossBtn.addEventListener("click", closeModal);
tableBtn.addEventListener("click", changeView);

//clickElement.forEach(element => element.addEventListener("click", myFunction));

function openModal() {
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
    grid.classList.toggle('modal_grid_list');
    items.forEach(item => {
      item.classList.toggle('grid-item');
      item.classList.toggle('grid-item-list');
    })
  }

  /* TABS */

  let editorialBtn = document.getElementById('editorial');
  let commercialBtn = document.getElementById('commercial');
  let editorialBlock = document.getElementById('editorialBlock');
  let commercialBlock = document.getElementById('commercialBlock');

  editorialBtn.addEventListener('click', showEditorial);
  commercialBtn.addEventListener('click', showCommercial);

  function showCommercial() {
    commercialBlock.style.display = "flex";
    editorialBlock.style.display = "none";
    commercialBtn.classList.add("chosen");
    editorialBtn.classList.remove("chosen");
  }

  function showEditorial() {
    commercialBlock.style.display = "none";
    editorialBlock.style.display = "flex";
    commercialBtn.classList.remove("chosen");
    editorialBtn.classList.add("chosen");
  }





  

