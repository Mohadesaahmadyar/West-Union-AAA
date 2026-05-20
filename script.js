const allowedZips = [

  // West / Beaverton / Hillsboro
  "97003", "97005", "97006", "97007", "97008",
  "97024", "97123", "97124",
  "97075", "97076", "97077", "97078", "97079",

  // Portland Core
  "97201", "97202", "97203", "97204", "97205",
  "97206", "97209", "97210", "97211", "97212",
  "97213", "97214", "97215", "97216", "97217",
  "97218", "97219", "97220", "97221", "97222",
  "97223", "97224", "97225", "97227", "97229",
  "97230", "97231", "97232", "97233", "97236",
  "97239", "97258", "97266",

  // Gresham / East Side
  "97030", "97035", "97060", "97080",

  // South / Oregon City / Clackamas / Milwaukie
  "97015", "97027", "97034",
  "97045", "97068", "97086",
  "97089", "97267"

];

const signupForm = document.querySelector(".signup__form");

const signupZip = document.getElementById("signupZip");
const signupZipResult = document.getElementById("signupZipResult");

const secondVehicle = document.getElementById("secondVehicle");
const secondVehicleQuestions = document.getElementById("secondVehicleQuestions");

const isYourVehicle = document.getElementById("isYourVehicle");
const familyVehicleQuestions = document.getElementById("familyVehicleQuestions");

/* =========================
   ZIP CODE CHECK
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

    signupZipResult.textContent =
      "Good news! We cover your area.";

    signupZipResult.style.color = "#16a34a";

  });

}

/* =========================
   SECOND VEHICLE
========================= */

if (secondVehicle) {

  secondVehicle.addEventListener("change", function () {

    if (secondVehicle.value === "yes") {

      secondVehicleQuestions.classList.remove("hidden");

    } else {

      secondVehicleQuestions.classList.add("hidden");

      familyVehicleQuestions.classList.add("hidden");

    }

  });

}

/* =========================
   FAMILY VEHICLE QUESTIONS
========================= */

if (isYourVehicle) {

  isYourVehicle.addEventListener("change", function () {

    if (isYourVehicle.value === "no") {

      familyVehicleQuestions.classList.remove("hidden");

    } else {

      familyVehicleQuestions.classList.add("hidden");

    }

  });

}