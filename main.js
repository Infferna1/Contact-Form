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
