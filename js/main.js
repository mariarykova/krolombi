// Плавная прокрутка до элемента на странице при клике 

let scroll = new SmoothScroll('a[href*="#"]');

// Отправка информации на почту 

function sendInfo() {
    document.getElementById('ajax-contact-form').addEventListener('submit', function(evt){
      let http = new XMLHttpRequest(), f = this;
      let th = this;
      evt.preventDefault();
      http.open("POST", "contact.php", true);
      http.onreadystatechange = function() {
        if (http.readyState == 4 && http.status == 200) {
          alert(http.responseText);
          if (http.responseText.indexOf(f.nameFF.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
            th.trigger("reset");
          }
        }
      }
      http.onerror = function() {
        alert('Ошибка, попробуйте еще раз');
      }
      http.send(new FormData(f));
    }, false);
 
  }

  sendInfo();