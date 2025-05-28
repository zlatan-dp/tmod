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

// Partner Faq

const questionWraps = document.querySelectorAll(".faq-question-wrap");

function showAnswer(wrap) {
  const answer = wrap.nextElementSibling;
  const icon = wrap.querySelector(".question-icon");

  if (answer) {
    answer.classList.toggle("active");
  }

  if (icon) {
    icon.classList.toggle("rotated");
  }
}

function handleFaqClick(event) {
  showAnswer(event.currentTarget);
}

questionWraps.forEach((wrap) => {
  wrap.addEventListener("click", handleFaqClick);
});
