var elModalOpenButton = document.querySelector(".drink__order-link");
var elModal = document.querySelector(".modal");
var elModalsclose = document.querySelector(".modal__link-tablet")


elModalOpenButton.addEventListener("click", function(){
  elModal.classList.add("modal__show");
})


var elModalCloseButton = document.querySelector(".modal__link");

elModalCloseButton.addEventListener("click" , function (){
  elModal.classList.remove("modal__show");
})

elModalsclose.addEventListener("click" , function (){
  elModal.classList.remove("modal__show");
})