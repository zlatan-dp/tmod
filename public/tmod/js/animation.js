//  Benefits TMOD intedrations

const expandButtons = document.querySelectorAll(".expand-btn");

function expandPanel(panel) {
  const bentoText = panel.previousElementSibling;
  const icon = panel.querySelector(".expand-btn-arrow");
  console.log("bentoText", bentoText);

  bentoText.classList.toggle("active");
  icon.classList.toggle("rotated");
}

function handleExpandClick(event) {
  console.log("kyky");

  expandPanel(event.currentTarget);
}

expandButtons.forEach((btn) => {
  btn.addEventListener("click", handleExpandClick);
});
