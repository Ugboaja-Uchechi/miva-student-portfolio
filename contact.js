let formInputs = document.querySelectorAll(".input");
let formBtn = document.querySelector(".form-btn");
let errCover = document.querySelector(".err-msg-cover");
let form = document.querySelector("form");
let emailErr = document.querySelector(".email-err");
let emailInput = document.querySelector("#email");

const validateEmail = (email) => {

  if (emailInput.value !== "" && !regex.test(emailInput.value)) {
    emailErr.textContent = "Please enter a valid email address";
  }

}


formBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const regex = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
  const emailValue = emailInput.value.trim();

  // Remove the old error message if it exists
  const existingErr = form.querySelector(".err-msg");
  if (existingErr) {
    existingErr.remove();
  }

  // Check if any input is empty
  let hasEmptyInput = false;

  // Check if any input is empty
  formInputs.forEach(input => {
    if (input.value.trim() === "") {
      hasEmptyInput = true;
    }
  });

  //If there is an empty input, create and append the error just once
  if (hasEmptyInput) {
    const errorMsg = document.createElement("p");
    errorMsg.textContent = "Please fill out all inputs";
    errorMsg.classList.add("err-msg");
    errCover.appendChild(errorMsg);
  } else {
    formInputs.forEach(input => {
      input.value = "";
    });
  }

 if (!regex.test(emailValue)) {
    emailErr.textContent = "Please enter a valid email address.";
    isValid = false;
  } else {
    emailErr.textContent = "";
    isValid = true;
  }
});r