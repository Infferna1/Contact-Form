document.addEventListener("DOMContentLoaded", function () {
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

  function validateInput(input) {
    let inputGroup = input.closest(".input-group");
    if (inputGroup) {
      let errorMessage = inputGroup.querySelector(".error-message");

      if (input.name === "firstName" && input.value.trim() === "") {
        input.classList.add("error");
        errorMessage.style.display = "block";
        return false;
      } else if (input.name === "lastName" && input.value.trim() === "") {
        input.classList.add("error");
        errorMessage.style.display = "block";
        return false;
      } else if (
        input.name === "email" &&
        (input.value.trim() === "" ||
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim()))
      ) {
        input.classList.add("error");
        errorMessage.style.display = "block";
        return false;
      } else {
        input.classList.remove("error");
        errorMessage.style.display = "none";
        return true;
      }
    }
    return true;
  }

  function validateTextarea(textarea) {
    let inputGroup = textarea.closest(".input-group");
    if (inputGroup) {
      let errorMessage = inputGroup.querySelector(".error-message");

      if (textarea.name === "message" && textarea.value.trim() === "") {
        textarea.classList.add("error");
        errorMessage.style.display = "block";
        return false;
      } else {
        textarea.classList.remove("error");
        errorMessage.style.display = "none";
        return true;
      }
    }
    return true;
  }

  function validateCheckbox(checkbox) {
    let checkGroup = checkbox.closest(".check");
    let errorMessage = checkGroup.querySelector(".error-message");

    if (!checkbox.checked) {
      checkbox.classList.add("error");
      errorMessage.style.display = "block";
      return false;
    } else {
      checkbox.classList.remove("error");
      errorMessage.style.display = "none";
      return true;
    }
  }

  function validateRadio() {
    let isAnyRadioChecked = false;
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
      return false;
    } else {
      radioErrorMessage.style.display = "none";
      document.querySelectorAll(".query").forEach(function (query) {
        query.classList.remove("error");
      });
      return true;
    }
  }

  function hideError(event) {
    let input = event.target;
    let inputGroup = input.closest(".input-group");
    if (inputGroup) {
      let errorMessage = inputGroup.querySelector(".error-message");
      input.classList.remove("error");
      errorMessage.style.display = "none";
    }
  }

  function showSuccessMessage() {
    let successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";
    document.addEventListener("click", function hideMessage(event) {
      successMessage.style.display = "none";
      document.removeEventListener("click", hideMessage);
    });
  }

  let inputs = document.querySelectorAll("input");
  let textareas = document.querySelectorAll("textarea");
  let submitButton = document.querySelector("button");
  let checkbox = document.querySelector("input[name='consent']");

  inputs.forEach(function (input) {
    input.addEventListener("focus", hideError);
  });

  textareas.forEach(function (textarea) {
    textarea.addEventListener("input", hideError);
  });

  checkbox.addEventListener("change", function () {
    validateCheckbox(checkbox);
  });

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    let isValid = true;

    inputs.forEach(function (input) {
      if (!validateInput(input)) {
        isValid = false;
      }
    });

    textareas.forEach(function (textarea) {
      if (!validateTextarea(textarea)) {
        isValid = false;
      }
    });

    if (!validateCheckbox(checkbox)) {
      isValid = false;
    }

    if (!validateRadio()) {
      isValid = false;
    }

    if (isValid) {
      let successMessage = document.getElementById("success-message");
      successMessage.style.display = "block";

      // Додаткові дії, наприклад, відправка форми на сервер
      // console.log("Form submitted successfully!");
      // Add code to submit the form here

      // Сховати повідомлення через 5 секунд
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 5000);
    }
  });

  window.highlightSelected = highlightSelected;
});
