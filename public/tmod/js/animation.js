//  Benefits TMOD intedrations

const expandButtons = document.querySelectorAll(".benefits-expand-btn");

function expandPanel(button) {
  const targetId = button.dataset.target;
  const bentoText = document.querySelector(
    `.bento-text[data-id="${targetId}"]`
  );
  const icon = button.querySelector(".expand-btn-arrow");
  const btnText = button.querySelector("span");

  if (bentoText) {
    bentoText.classList.toggle("active");
  }

  if (icon) {
    icon.classList.toggle("rotated");
  }

  btnText.textContent = icon.classList.contains("rotated")
    ? "Collaps"
    : "Expand";
}

function handleExpandClick(event) {
  expandPanel(event.currentTarget);
}

expandButtons.forEach((btn) => {
  btn.addEventListener("click", handleExpandClick);
});
