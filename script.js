const joinBtn = document.getElementById("joinBtn");

joinBtn.addEventListener("click", function () {
  alert("Thank you for your interest! Please call us to start your membership.");
});

const giftBtn = document.querySelector(".gift__btn");

giftBtn.addEventListener("click", function () {
  alert("Gift membership feature coming soon!");
});

// Activate Lucide icons
lucide.createIcons();




import { createIcons, phoneCall } from 'lucide';

createIcons({
  icons: {
    phoneCall
  }
});


<i data-lucide="phone-call"></i>  

const billingToggle = document.getElementById("billingToggle");
const price = document.getElementById("price");
const duration = document.getElementById("duration");
const offer = document.getElementById("offer");

billingToggle.addEventListener("change", function () {
  if (billingToggle.checked) {
    price.textContent = "$79.99";
    duration.textContent = "Yearly";
    offer.textContent = "Launch Offer: $49.99 first year";
  } else {
    price.textContent = "$7.99";
    duration.textContent = "Monthly";
    offer.textContent = "";
  }
});