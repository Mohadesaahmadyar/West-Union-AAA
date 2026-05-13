const joinBtn = document.getElementById("joinBtn");

joinBtn.addEventListener("click", function () {
  window.location.href = "#Pricing";
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

  countdownText.innerHTML = `
    Only ${spotsLeft} launch offer spots remaining before pricing returns to normal.
    Get your first year for only
    <span class="launch__highlight">$49.99</span>
  `;
} else {
  countdownText.innerHTML = `
    First 499 members get their first year for only
    <span class="launch__highlight">$49.99</span>
  `;
}

const joinTodayBtn = document.getElementById("joinTodayBtn");

joinTodayBtn.addEventListener("click", function (event) {
  event.preventDefault();

  if (billingToggle.checked) {
    window.location.href = "YOUR_YEARLY_PAYMENT_LINK";
  } else {
    window.location.href = "YOUR_MONTHLY_PAYMENT_LINK";
  }
});