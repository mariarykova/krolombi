// Отправка информации на почту 

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form').addEventListener('submit', function(evt){
      var http = new XMLHttpRequest(), f = this;
      var th = this;
      evt.preventDefault();
      http.open("POST", "contact.php", true);
      http.onreadystatechange = function() {
        if (http.readyState == 3 && http.status == 200) {
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
   
  });

//document.addEventListener('DOMContentLoaded', function(){
//    let form = document.getElementById('form');
//   let submit = document.getElementById('submit');
 //   submit.addEventListener('submit', formSend);

 //   async function formSend(e) {
 //       e.preventDefault();
//
  //      let error = formValidate(form);
//
  //      console.log('pw');
    //}

  //  function formValidate(form){
    //    let error = 0;
    //    let formReq = document.querySelectorAll('._req');

      //  for (let index = 0; index < formReq.length; index++) {
        //    const input = formReq[index];

        //    if(input.classList.contains('_email')){
         //       if (emailTest(input)) {
         //           formAddError(input);
         //           error++;
         //           console.log("ошибка")
         //       }
         //   } else {
        //        if(input.value === ''){
        //            formAddError(input);
         //           console.log('hi');
         //           error++;
         //       }
         //   }


            
     //   }

     //   console.log(hello);
   // }

  //  function formAddError(input) {
     //   input.parentElement.classList.add('_error');
   //     input.classList.add('_error');
   //     console.log("ошибка")
  //  }
//
  //  function formRemoveError(input) {
    //    input.parentElement.classList.remove('_error');
    //    input.classList.remove('_error');
    //    console.log("ошибка")
 //   }

 //   function emailTest(input) {
  //      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.w{2,8})+$/.test(input.value);
 //   }

//});