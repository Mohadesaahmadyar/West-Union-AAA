const joinBtn = document.getElementById("joinBtn");

joinBtn.addEventListener("click", function () {
  alert("Thank you for your interest! Please call us to start your membership.");
});

const giftBtn = document.querySelector(".gift__btn");


giftBtn.addEventListener("click", function () {
  alert("Gift membership feature coming soon!");
});
function openMenu() {
  document.body.classList.add("menu--open");
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

const billingToggle = document.getElementById("billingToggle");
const price = document.getElementById("price");
const duration = document.getElementById("duration");

billingToggle.addEventListener("change", function () {
  if (billingToggle.checked) {
    price.innerHTML = "$79.99";
    duration.innerHTML = "Yearly";
  } else {
    price.innerHTML = "$7.99";
    duration.innerHTML = "Monthly";
  }
});

let currentMembers = 380;
const maxOfferMembers = 499;

const countdownText = document.getElementById("countdownText");

if (currentMembers >= 381) {
  const spotsLeft = maxOfferMembers - currentMembers;

  countdownText.innerHTML =
    `Only ${spotsLeft} launch offer spots remaining before pricing returns to normal.`;
} else {
  countdownText.innerHTML =
  countdownText.innerHTML =
  `First 499 members get their first year for only 
   <span class="launch__highlight">$49.99</span>`;
}
