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
const zipInput = document.getElementById("zipInput");
const zipBtn = document.getElementById("zipBtn");
const zipResult = document.getElementById("zipResult");

const coveredZips = [

  // West / Beaverton / Hillsboro
  "97003",
  "97005",
  "97006",
  "97007",
  "97008",
  "97024",
  "97123",
  "97124",
  "97078",
  "97077",
  "97079",
  "97075",
  "97076",

  // Portland Core
  "97201",
  "97202",
  "97203",
  "97204",
  "97205",
  "97206",
  "97209",
  "97210",
  "97211",
  "97212",
  "97213",
  "97214",
  "97215",
  "97216",
  "97217",
  "97218",
  "97219",
  "97220",
  "97221",
  "97222",
  "97223",
  "97224",
  "97225",
  "97227",
  "97229",
  "97230",
  "97231",
  "97232",
  "97233",
  "97236",
  "97239",
  "97266",
  "97258",

  // Gresham / East Side
  "97030",
  "97080",
  "97035",
  "97060",

  // South / Oregon City / Clackamas / Milwaukie
  "97015",
  "97027",
  "97034",
  "97045",
  "97068",
  "97086",
  "97089",
  "97267"
];

zipBtn.addEventListener("click", function () {

  const zip = zipInput.value.trim();

  if (coveredZips.includes(zip)) {

    zipResult.innerHTML =
      "Good news! We cover your area.";

    zipResult.style.color = "#16a34a";

  } else {

    zipResult.innerHTML =
      "Sorry, we do not currently cover this ZIP code.";

    zipResult.style.color = "#dc2626";
  }

});


const joinTodayBtn = document.getElementById("joinTodayBtn");

joinTodayBtn.addEventListener("click", function (event) {
  event.preventDefault();

  if (billingToggle.checked) {
    window.location.href = "YOUR_YEARLY_PAYMENT_LINK";
  } else {
    window.location.href = "YOUR_MONTHLY_PAYMENT_LINK";
  }
});