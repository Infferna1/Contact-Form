function highlightSelected() {
  let divs = document.querySelectorAll(".query");
  divs.forEach((div) => {
    let radio = div.querySelector('input[type="radio"]');
    if (radio.checked) {
      div.classList.add("highlight");
    } else {
      div.classList.remove("highlight");
    }
  });
}

let inputs = document.querySelectorAll("input");
let textarea = document.querySelector("textarea");
let submitButton = document.querySelector("button");

submitButton.addEventListener("click", function (events) {
  events.preventDefault();

  let isAnyRadioChecked = false;
  let isNameValid = false;
  let isSurnameValid = false;
  let isEmailValid = false;
  let isChecked = false;
  let isValid = false;

  inputs.forEach(function (input) {
    if (input.type === "radio" && input.checked) {
      isAnyRadioChecked = true;
    } else if (input.type === "checkbox" && input.checked) {
      isChecked = true;
    } else if (input.name === "firstName" && input.value.trim() !== "") {
      isNameValid = true;
    } else if (input.name === "lastName" && input.value.trim() !== "") {
      isSurnameValid = true;
    } else if (
      (input.name =
        "email" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim()))
    ) {
      isEmailValid = true;
    }
  });

  if (textarea.hasAttribute("required") && textarea.value.trim() !== "") {
    isValid = true;
  }

  if (!isValid) {
    console.log("Please enter message.");
  }

  if (!isNameValid) {
    console.log("Please enter your name.");
  }

  if (!isSurnameValid) {
    console.log("Please enter your surname.");
  }

  if (!isEmailValid) {
    console.log("Please enter a valid email address.");
  }

  if (!isAnyRadioChecked) {
    console.log("Please select at least one option for the radio buttons.");
  }

  if (!isChecked) {
    console.log("Please check contacting.");
  }
});
