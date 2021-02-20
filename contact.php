<?php
if (isset ($_POST['contactFF'])) {
  $to = "maria.reekova@gmail.com";
  $subject = "Заполнена контактная форма на сайте ".$_SERVER['HTTP_REFERER'];
  $message = "Имя пользователя: ".$_POST['nameFF']."\nEmail пользователя ".$_POST['contactFF']."\nТелефон пользователя ".$_POST['telFF']."\nСообщение: ".$_POST['projectFF']."\n\nАдрес сайта: ".$_SERVER['HTTP_REFERER'];
 }
?>
