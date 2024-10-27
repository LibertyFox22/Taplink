var visable = document.querySelector('.special');
var secret = document.querySelector('.secret');

visable.onclick = function() {
    secret.classList.toggle('close'); //Активация и закрытие меню
   }