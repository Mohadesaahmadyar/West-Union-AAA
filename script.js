const joinBtn = document.getElementById("joinBtn");

joinBtn.addEventListener("click", function () {
  alert("Thank you for your interest! Please call us to start your membership.");
});

const giftBtn = document.querySelector(".gift__btn");

giftBtn.addEventListener("click", function () {
  alert("Gift membership feature coming soon!");
});




import { createIcons, phoneCall } from 'lucide';

createIcons({
  icons: {
    phoneCall
  }
});


<i data-lucide="phone-call"></i>  