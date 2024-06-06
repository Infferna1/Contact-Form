function highlightSelected() {
  let divs = document.querySelectorAll(".query");
  divs.forEach((div) => {
    let radio = div.querySelector('input[type="radio"]');
    if (radio.checked) {
      if (div.classList.contains("error")) {
        div.classList.remove("error");
      }
      div.classList.add("highlight");
    } else {
      div.classList.remove("highlight");
    }
  });

  // Hide error message when a radio button is selected
  let radioErrorMessage = document.querySelector(
    "fieldset section .error-message"
  );
  if (document.querySelector('input[type="radio"]:checked')) {
    radioErrorMessage.style.display = "none";
    document.querySelectorAll(".query").forEach(function (query) {
      query.classList.remove("error");
    });
  }
}

let inputs = document.querySelectorAll("input");
let textareas = document.querySelector("textarea");
let submitButton = document.querySelector("button");

submitButton.addEventListener("click", function (events) {
  events.preventDefault();

  let checkbox = document.querySelector("input[name='consent']");
  let textareas = document.querySelectorAll("textarea");
  let checkGroup = checkbox.closest(".check");
  let errorMessage = checkGroup.querySelector(".error-message");
  let isAnyRadioChecked = false;

  if (!checkbox.checked) {
    checkbox.classList.add("error");
    errorMessage.style.display = "block";
    isValid = false;
  } else {
    checkbox.classList.remove("error");
    errorMessage.style.display = "none";
  }

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      checkbox.classList.remove("error");
      let checkGroup = checkbox.closest(".check");
      let errorMessage = checkGroup.querySelector(".error-message");
      errorMessage.style.display = "none";
    }
  });

  document.querySelectorAll('input[type="radio"]').forEach(function (radio) {
    if (radio.checked) {
      isAnyRadioChecked = true;
    }
  });

  let radioErrorMessage = document.querySelector(
    "fieldset section .error-message"
  );
  if (!isAnyRadioChecked) {
    radioErrorMessage.style.display = "block";
    document.querySelectorAll(".query").forEach(function (query) {
      query.classList.add("error");
    });
  } else {
    radioErrorMessage.style.display = "none";
    document.querySelectorAll(".query").forEach(function (query) {
      query.classList.remove("error");
    });
  }

  textareas.forEach(function (textarea) {
    let inputGroup = textarea.closest(".input-group");
    if (inputGroup) {
      let errorMessage = inputGroup.querySelector(".error-message");

      if (textarea.name === "message" && textarea.value.trim() === "") {
        textarea.classList.add("error");
        errorMessage.style.display = "block";
        isValid = false;
      } else {
        textarea.classList.remove("error");
        errorMessage.style.display = "none";
      }
    }
  });

  textareas.forEach(function (textarea) {
    textarea.addEventListener("input", function () {
      let inputGroup = textarea.closest(".input-group");
      if (inputGroup) {
        let errorMessage = inputGroup.querySelector(".error-message");
        if (textarea.value.trim() !== "") {
          textarea.classList.remove("error");
          errorMessage.style.display = "none";
        }
      }
    });
  });

  let isTextareaValid = textarea.value.trim() !== "";

  inputs.forEach(function (input) {
    let inputGroup = input.closest(".input-group");
    if (inputGroup) {
      let errorMessage = inputGroup.querySelector(".error-message");

      if (input.name === "firstName" && input.value.trim() === "") {
        input.classList.add("error");
        errorMessage.style.display = "block";
        isValid = false;
      } else if (input.name === "lastName" && input.value.trim() === "") {
        input.classList.add("error");
        errorMessage.style.display = "block";
        isValid = false;
      } else if (
        input.name === "email" &&
        (input.value.trim() === "" ||
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim()))
      ) {
        input.classList.add("error");
        errorMessage.style.display = "block";
        isValid = false;
      } else {
        input.classList.remove("error");
        errorMessage.style.display = "none";
      }
    }
  });

  if (!isTextareaValid) {
    console.log("Please enter message.");
  }

  if (
    isTextareaValid &&
    isNameValid &&
    isSurnameValid &&
    isEmailValid &&
    isAnyRadioChecked &&
    isChecked
  ) {
    console.log("Form submitted successfully!");
    // Add code to submit the form here
  }
});

function hideError(input) {
  let inputGroup = input.closest(".input-group");
  if (inputGroup) {
    let errorMessage = inputGroup.querySelector(".error-message");
    input.classList.remove("error");
    errorMessage.style.display = "none";
  }
}
