let blogRow = document.querySelector('.blog__wrapper'); //контейнер для блоков с игрушками
let loadingBlock = document.querySelector('.blog__article');//контейнер для предзагрузчика
let blogModal = document.querySelector('#blogModal');//все модальное окно
let modalBody = document.querySelector('#modal_text');//основной текст в модальном окне
let modalTitle = document.querySelector('#modal_date');//заголовок модального окна
let closeBtns = document.querySelector('#blog_cross');//кнопки для закрытия модального окна вверху и вниз
let modalTags = document.querySelector('#modal_tags');
let modalImg = document.querySelector('.blog__modal_image');


let myData = JSON.parse(data);

//let xhr = new XMLHttpRequest();//для формирования AJAX-запроса

//xhr.open('GET', '../js/blog.js', true);// загружаем json-файл
//xhr.responseType = 'json';//говорим браузеру о том, какой формат файла будем получать
//xhr.onreadystatechange = function () {
  //  if (xhr.readyState == 4) {
    //    if (xhr.status == 200) {
            // console.log(xhr.response);//данные в виде массива объектов
      //      showProducts(xhr.response);
        //}
    //}
//};
//xhr.send(null); //отсылаем AJAX-запрос
//xhr.onerror = function () {
 //   alert(`Ошибка соединения`);
//};

function showProducts(data) {
    let productsStr = ''; //строка для формирования разметки

    data.forEach(obj => {
        productsStr += `<div class="blog__article">
                <img class="blog__image" src="${obj.img}"alt="${obj.name}">
                <div class="blog__inner">
                    <div class="date">${obj.date}</div>
                    <div class="text">${obj.text}</div>
                    <div class="text tags">${obj.tags}</div>
                    <div class="arrow"><img class="arrow__img" onclick="openModal(event)" data-id="${obj.id}" src="./images/arrow.svg" alt=""></div>
                </div>
        </div>`;
    });

    blogRow.innerHTML = productsStr;// вставляем разметку в контейнер для нее
}

showProducts(myData);

function openModal (e) { //открываем модальное окно
    e.preventDefault();
    let link = e.target;
    blogModal.style.display = 'block';
    blogModal.classList.add('show');
    document.body.classList.add('modal-open');
    
    let blogText = link.closest('.blog__inner').querySelector('.text');
    let blogData = link.closest('.blog__inner').querySelector('.date');
    let blogTags = link.closest('.blog__inner').querySelector('.tags');
    let blogImg = link.closest('.blog__article').querySelector('.blog__image').getAttribute('src');
    modalBody.innerHTML = blogText.textContent;
    modalTitle.innerHTML = blogData.textContent;
    modalTags.innerHTML = blogTags.textContent;
    modalImg.src = blogImg;
}

function closeModal(e) { //закрываем модальное окно
    //if(e.target!== e.currentTarget) return; //если щелкаем не по кнопкам или по фону
    blogModal.style.display = 'none';
    blogModal.classList.remove('show');
    document.body.classList.remove('modal-open');
}