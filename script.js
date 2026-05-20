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
   ELEMENTS
========================= */

const signupForm = document.querySelector(".signup__form");

const signupZip = document.getElementById("signupZip");

const signupZipResult = document.getElementById("signupZipResult");

const secondVehicle = document.getElementById("secondVehicle");

const secondVehicleQuestions =
  document.getElementById("secondVehicleQuestions");

const isYourVehicle =
  document.getElementById("isYourVehicle");

const familyVehicleQuestions =
  document.getElementById("familyVehicleQuestions");

const continueBtn =
  document.getElementById("continueBtn");

const signupStep1 =
  document.getElementById("signupStep1");

const signupStep2 =
  document.getElementById("signupStep2");

const agreeRules =
  document.getElementById("agreeRules");

const rulesError =
  document.getElementById("rulesError");

/* =========================
   ZIP VALIDATION
========================= */

if (signupForm && signupZip) {

  signupForm.addEventListener("submit", function (event) {

    const zip = signupZip.value.trim();

    if (!allowedZips.includes(zip)) {

      event.preventDefault();

      signupZipResult.textContent =
        "Sorry, we do not currently cover this ZIP code.";

      signupZipResult.style.color = "#dc2626";

      return;
    }

  });

}

/* =========================
   SECOND VEHICLE
========================= */

if (secondVehicle) {

  secondVehicle.addEventListener("change", function () {

    const secondVehicleFields =
      secondVehicleQuestions.querySelectorAll("input, select");

    if (secondVehicle.value === "yes") {

      secondVehicleQuestions.classList.remove("hidden");

      secondVehicleFields.forEach(field => {
        field.required = true;
      });

    } else {

      secondVehicleQuestions.classList.add("hidden");

      familyVehicleQuestions.classList.add("hidden");

      secondVehicleFields.forEach(field => {
        field.required = false;
      });

    }

  });

}

/* =========================
   FAMILY QUESTIONS
========================= */

if (isYourVehicle) {

  isYourVehicle.addEventListener("change", function () {

    const familyFields =
      familyVehicleQuestions.querySelectorAll("input, select");

    if (isYourVehicle.value === "no") {

      familyVehicleQuestions.classList.remove("hidden");

      familyFields.forEach(field => {
        field.required = true;
      });

    } else {

      familyVehicleQuestions.classList.add("hidden");

      familyFields.forEach(field => {
        field.required = false;
      });

    }

  });

}

/* =========================
   CONTINUE BUTTON
========================= */

if (continueBtn) {

  continueBtn.addEventListener("click", function () {

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
   RULES CHECKBOX
========================= */

if (signupForm) {

  signupForm.addEventListener("submit", function (event) {

    if (!agreeRules.checked) {

      event.preventDefault();

      rulesError.textContent =
        "Please agree to the membership rules before continuing.";

    }

  });

}

/* =========================
   REQUIRED FIELD CHECK
========================= */

if (continueBtn) {

  continueBtn.addEventListener("click", function () {

    const requiredFields =
      signupStep1.querySelectorAll("[required]");

    let formValid = true;

    requiredFields.forEach(field => {

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