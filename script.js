/* =========================
   ZIP CODES
========================= */

const allowedZips = [
  "97003", "97005", "97006", "97007", "97008",
  "97024", "97123", "97124",
  "97075", "97076", "97077", "97078", "97079",

  "97201", "97202", "97203", "97204", "97205",
  "97206", "97209", "97210", "97211", "97212",
  "97213", "97214", "97215", "97216", "97217",
  "97218", "97219", "97220", "97221", "97222",
  "97223", "97224", "97225", "97227", "97229",
  "97230", "97231", "97232", "97233", "97236",
  "97239", "97258", "97266",

  "97030", "97035", "97060", "97080",

  "97015", "97027", "97034",
  "97045", "97068", "97086",
  "97089", "97267"
];


/* =========================
   NAV / MOBILE MENU
========================= */

function openMenu() {
  document.body.classList.add("menu--open");
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}


/* =========================
   LANDING PAGE BUTTONS
========================= */

const joinBtn = document.getElementById("joinBtn");

if (joinBtn) {
  joinBtn.addEventListener("click", function () {
    window.location.href = "signup.html";
  });
}


/* =========================
   PRICING TOGGLE
========================= */

const billingToggle = document.getElementById("billingToggle");
const price = document.getElementById("price");
const duration = document.getElementById("duration");

if (billingToggle && price && duration) {
  billingToggle.addEventListener("change", function () {
    if (billingToggle.checked) {
      price.innerHTML = "$79.99";
      duration.innerHTML = "Yearly";
    } else {
      price.innerHTML = "$7.99";
      duration.innerHTML = "Monthly";
    }
  });
}


/* =========================
   LAUNCH OFFER COUNTDOWN
========================= */

let currentMembers = 380;
const maxOfferMembers = 499;

const countdownText = document.getElementById("countdownText");

if (countdownText) {
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
}


/* =========================
   PAYMENT LINKS
========================= */

const monthlyPaymentLink = "YOUR_STRIPE_MONTHLY_LINK";
const yearlyPaymentLink = "YOUR_STRIPE_YEARLY_LINK";

const joinTodayBtn = document.getElementById("joinTodayBtn");

if (joinTodayBtn && billingToggle) {
  joinTodayBtn.addEventListener("click", function (event) {
    event.preventDefault();

    if (billingToggle.checked) {
      window.location.href = yearlyPaymentLink;
    } else {
      window.location.href = monthlyPaymentLink;
    }
  });
}


/* =========================
   SIGNUP ELEMENTS
========================= */

const signupForm = document.querySelector(".signup__form");

const signupZip = document.getElementById("signupZip");
const signupZipResult = document.getElementById("signupZipResult");

const secondVehicle = document.getElementById("secondVehicle");
const secondVehicleQuestions = document.getElementById("secondVehicleQuestions");

const isYourVehicle = document.getElementById("isYourVehicle");
const familyVehicleQuestions = document.getElementById("familyVehicleQuestions");

const continueBtn = document.getElementById("continueBtn");

const signupStep1 = document.getElementById("signupStep1");
const signupStep2 = document.getElementById("signupStep2");

const agreeRules = document.getElementById("agreeRules");
const rulesError = document.getElementById("rulesError");

const driverLicense = document.getElementById("driverLicense");
const registration = document.getElementById("registration");


/* =========================
   SECOND VEHICLE QUESTIONS
========================= */

if (secondVehicle && secondVehicleQuestions && familyVehicleQuestions) {
  secondVehicle.addEventListener("change", function () {
    const secondVehicleFields =
      secondVehicleQuestions.querySelectorAll("input, select");

    if (secondVehicle.value === "yes") {
      secondVehicleQuestions.classList.remove("hidden");

      secondVehicleFields.forEach(function (field) {
        field.required = true;
      });
    } else {
      secondVehicleQuestions.classList.add("hidden");
      familyVehicleQuestions.classList.add("hidden");

      secondVehicleFields.forEach(function (field) {
        field.required = false;
        field.value = "";
      });
    }
  });
}


/* =========================
   FAMILY VEHICLE QUESTIONS
========================= */

if (isYourVehicle && familyVehicleQuestions) {
  isYourVehicle.addEventListener("change", function () {
    const familyFields =
      familyVehicleQuestions.querySelectorAll("input, select");

    if (isYourVehicle.value === "no") {
      familyVehicleQuestions.classList.remove("hidden");

      familyFields.forEach(function (field) {
        field.required = true;
      });
    } else {
      familyVehicleQuestions.classList.add("hidden");

      familyFields.forEach(function (field) {
        field.required = false;
        field.value = "";
      });
    }
  });
}


/* =========================
   SIGNUP EMAIL MESSAGE
========================= */

function getSignupEmailMessage() {
  if (!driverLicense || !registration) return "";

  const hasLicense = driverLicense.files.length > 0;
  const hasRegistration = registration.files.length > 0;

  if (hasLicense && hasRegistration) {
    return "You have successfully signed up. You may now log in to your account.";
  }

  return "You have successfully signed up. Please upload your driver’s license and registration to complete your membership.";
}


/* =========================
   CONTINUE BUTTON / STEP 1 VALIDATION
========================= */

if (continueBtn && signupStep1 && signupStep2) {
  continueBtn.addEventListener("click", function () {
    const requiredFields = signupStep1.querySelectorAll("[required]");

    let formValid = true;

    requiredFields.forEach(function (field) {
      if (!field.value.trim()) {
        field.style.borderColor = "#dc2626";
        formValid = false;
      } else {
        field.style.borderColor = "#dbeafe";
      }
    });

    if (!formValid) {
      alert("Please fill out all required sections.");
      return;
    }

    const zip = signupZip.value.trim();

    if (!allowedZips.includes(zip)) {
      signupZipResult.textContent =
        "Sorry, we do not currently cover this ZIP code.";

      signupZipResult.style.color = "#dc2626";

      return;
    }

    signupZipResult.textContent = "";

    signupStep1.classList.add("hidden");
    signupStep2.classList.remove("hidden");
  });
}


/* =========================
   FINAL SIGNUP SUBMIT
========================= */

if (signupForm && agreeRules && rulesError) {
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!agreeRules.checked) {
      rulesError.textContent =
        "Please agree to the membership rules before continuing.";
      return;
    }

    rulesError.textContent = "";

    const emailMessage = getSignupEmailMessage();

    console.log("Email to customer:", emailMessage);

    alert(emailMessage);

    window.location.href = "login.html";
  });
}


/* =========================
   MEMBER SERVICE SLOTS
========================= */

const requestForm = document.querySelector(".request__form");

let usedSlots = 0;

if (requestForm) {
  requestForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (usedSlots >= 4) {
      alert("You have already used all 4 service calls.");
      return;
    }

    usedSlots++;

    const currentSlot = document.getElementById(`slot${usedSlots}`);

    if (!currentSlot) return;

    const serviceType = document.getElementById("serviceType").value;
    const serviceLocation = document.getElementById("serviceLocation").value;
    const serviceReason = document.getElementById("serviceReason")
      ? document.getElementById("serviceReason").value
      : "";

    currentSlot.classList.add("slot--used");

    currentSlot.innerHTML = `
      <h3>Service Slot ${usedSlots}</h3>
      <p class="slot__status">Status: Used</p>
      <p>Type: ${serviceType}</p>
      <p>Reason: ${serviceReason}</p>
      <p>Date/Time: ${new Date().toLocaleString()}</p>
      <p>Location: ${serviceLocation}</p>
    `;

    alert("Service request submitted successfully.");

    requestForm.reset();
  });
}


/* =========================
   USE CURRENT LOCATION
========================= */

const locationBtn = document.getElementById("locationBtn");
const serviceLocationInput = document.getElementById("serviceLocation");
const locationResult = document.getElementById("locationResult");

if (locationBtn && serviceLocationInput && locationResult) {
  locationBtn.addEventListener("click", function () {
    if (!navigator.geolocation) {
      locationResult.textContent =
        "Location is not supported by this browser.";
      locationResult.style.color = "#dc2626";
      return;
    }

    locationResult.textContent = "Getting your location...";
    locationResult.style.color = "#64748b";

    navigator.geolocation.getCurrentPosition(
      function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        )
          .then(response => response.json())
          .then(data => {
        
            serviceLocationInput.value = data.display_name;
        
            locationResult.textContent =
              "Location added successfully.";
        
            locationResult.style.color = "#16a34a";
        
            const mapBox =
              document.getElementById("mapBox");
        
            const locationMap =
              document.getElementById("locationMap");
        
            mapBox.classList.remove("hidden");
        
            locationMap.src =
              `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
        
          })
          .catch(() => {
        
            serviceLocationInput.value =
              `${latitude}, ${longitude}`;
        
          });

        locationResult.textContent = "Location added successfully.";
        locationResult.style.color = "#16a34a";
        
        const mapBox = document.getElementById("mapBox");
        const locationMap = document.getElementById("locationMap");
        
        mapBox.classList.remove("hidden");
        
        locationMap.src =
          `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
      },
      function () {
        locationResult.textContent =
          "Unable to get your location. Please allow location access or enter address manually.";
        locationResult.style.color = "#dc2626";
      }
    );
  });
}

function initAutocomplete() {
  const serviceLocationInput = document.getElementById("serviceLocation");

  if (!serviceLocationInput) return;

  const autocomplete = new google.maps.places.Autocomplete(serviceLocationInput, {
    componentRestrictions: { country: "us" },
    fields: ["formatted_address", "geometry"]
  });

  autocomplete.addListener("place_changed", function () {
    const place = autocomplete.getPlace();

    if (!place.geometry || !place.geometry.location) return;

    const latitude = place.geometry.location.lat();
    const longitude = place.geometry.location.lng();

    serviceLocationInput.value = place.formatted_address;

    const mapBox = document.getElementById("mapBox");
    const locationMap = document.getElementById("locationMap");

    mapBox.classList.remove("hidden");

    locationMap.src =
      `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
  });
}