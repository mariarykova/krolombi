// MODAL OPENING

function bindModal(triggerSelector, modalSelector, viewSelector, gridSeletor, itemSelector, closeSelector) {
  let trigger = document.querySelectorAll(triggerSelector);
  let modal = document.querySelector(modalSelector);
  let view = document.querySelector(viewSelector);
  let grid = document.querySelectorAll(gridSeletor);
  let close = document.querySelector(closeSelector);
  let items = document.querySelectorAll(itemSelector);

  trigger.forEach(item => {
      item.addEventListener('click', (e) => {
          if(e.target) {
              e.preventDefault();
          }

      modal.style.display = "block";
      document.body.style.overflow = "hidden";
      modal.style.overflow = "scroll";      
      });
  });

  
  close.addEventListener('click', () => {
    modal.style.display = "none";
    document.body.style.overflow = "visible";
});

if(modalSelector === '.january_2021'){
  view.addEventListener("click", () => {
  grid.forEach(item => {
      item.classList.toggle('listjanuary2021');
      items.forEach(item => {
        item.classList.toggle('grid-item');
        item.classList.toggle('grid-item-list');
        }); }); }); }
  
if(modalSelector === '.september_2019'){
  view.addEventListener("click", () => {
  grid.forEach(item => {
      item.classList.toggle('september2019_list');
      items.forEach(item => {
      item.classList.toggle('grid-item');
      item.classList.toggle('grid-item-list');
     }); }); }); }

if(modalSelector === '.december_2020_two'){
view.addEventListener("click", () => {
grid.forEach(item => {
    item.classList.toggle('december2020_two_list');
    items.forEach(item => {
    item.classList.toggle('grid-item');
    item.classList.toggle('grid-item-list');
    }); }); }); }

if(modalSelector === '.december_2020'){
view.addEventListener("click", () => {
grid.forEach(item => {
    item.classList.toggle('december2020_list');
    items.forEach(item => {
    item.classList.toggle('grid-item');
    item.classList.toggle('grid-item-list');
    }); }); }); }
        
if(modalSelector === '.february_2020'){
view.addEventListener("click", () => {
grid.forEach(item => {
    item.classList.toggle('february2020_list');
    items.forEach(item => {
    item.classList.toggle('grid-item');
    item.classList.toggle('grid-item-list');
    }); }); }); }

if(modalSelector === '.september_2020'){
view.addEventListener("click", () => {
grid.forEach(item => {
    item.classList.toggle('september2020_list');
    items.forEach(item => {
    item.classList.toggle('grid-item');
    item.classList.toggle('grid-item-list');
    }); }); }); }
                
if(modalSelector === '.colour_block'){
view.addEventListener("click", () => {
grid.forEach(item => {
    item.classList.toggle('list_colour_block');
    items.forEach(item => {
    item.classList.toggle('grid-item');
    item.classList.toggle('grid-item-list');
    }); }); }); }

if(modalSelector === '.december_2019'){
view.addEventListener("click", () => {
grid.forEach(item => {
    item.classList.toggle('december2019_list');
    items.forEach(item => {
    item.classList.toggle('grid-item');
    item.classList.toggle('grid-item-list');
    }); }); }); }


if(modalSelector === '.january_2020'){
view.addEventListener("click", () => {
grid.forEach(item => {
    item.classList.toggle('listjanuary2020');
    items.forEach(item => {
      item.classList.toggle('grid-item');
      item.classList.toggle('grid-item-list');
      }); }); }); }
                        

if(modalSelector === '.october_2020'){
  view.addEventListener("click", () => {
  grid.forEach(item => {
      item.classList.toggle('listoctober2020');
      items.forEach(item => {
        item.classList.toggle('grid-item');
        item.classList.toggle('grid-item-list');
        }); }); }); }


if(modalSelector === '.modal__gallery'){
view.addEventListener("click", () => {
grid.forEach(item => {
  item.classList.toggle('modal_grid_list');
  items.forEach(item => {
    item.classList.toggle('grid-item');
    item.classList.toggle('grid-item-list');
    }); }); }); }

if(modalSelector === '.test_shoot'){
  view.addEventListener("click", () => {
  grid.forEach(item => {
    item.classList.toggle('testshoot_list');
    items.forEach(item => {
      item.classList.toggle('grid-item');
      item.classList.toggle('grid-item-list');
      }); }); }); }

if(modalSelector === '.october_2019'){
  view.addEventListener("click", () => {
  grid.forEach(item => {
      item.classList.toggle('listoctober2019');
      items.forEach(item => {
        item.classList.toggle('grid-item');
        item.classList.toggle('grid-item-list');
        }); }); }); }                                         

}




bindModal(".january2021", ".january_2021", ".btn_change_view_january_2021", ".gridjanuary2021", "#january_2021 .item" , "#modal__gallery_btn_cross_jan2021");
bindModal(".september2019", ".september_2019", "#view_september_2019", ".modal__grid_september2019", "#september_2019 .item" , "#btn_cross_september_2019");
bindModal(".december2020Two", ".december_2020_two", "#view_december_2020_two", ".modal__grid_december2020_two", "#december_2020_two .item" , "#btn_cross_december_2020_two");
bindModal(".december2020", ".december_2020", "#view_december_2020", ".modal__grid_december2020", "#december_2020 .item" , "#btn_cross_december_2020");
bindModal(".february2020", ".february_2020", "#view_february_2020", ".modal__grid_february2020", "#grid-feb2020 .item" , "#btn_cross_february_2020");
bindModal(".september2020", ".september_2020", "#view_september_2020", ".modal__grid_september2020", "#september_2020 .item" , "#btn_cross_september_2020");
bindModal(".colourblock", ".colour_block", "#view_colour_block", ".modal__grid_colour_block", "#grid-colour-block .item" , "#btn_cross_colour_block");
bindModal(".december2019", ".december_2019", "#view_december_2019", ".modal__grid_december2019", "#december_2019 .item" , "#btn_cross_december_2019");
bindModal(".january2020", ".january_2020", ".btn_change_view_january_2020", ".gridjanuary2020", "#january_2020 .item" , "#modal__gallery_btn_cross_jan2020");
bindModal(".october2020", ".october_2020", ".btn_change_view_october_2020", ".gridoctober2020", "#october_2020 .item" , "#modal__gallery_btn_cross_oct2020");
bindModal(".click", ".modal__gallery", "#modal__gallery_btn_table", ".modal__grid", "#grid .item" , "#modal__gallery_btn_cross");
bindModal(".testshoot", ".test_shoot", "#view_test_shoot", ".gridtestshoot", "#grid-test-shoot .item" , "#btn_test_shoot_cross");
bindModal(".october2019", ".october_2019", "#view_october_2019", ".gridoctober2019", "#october_2019 .item" , "#modal__gallery_btn_cross_oct2019");







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
