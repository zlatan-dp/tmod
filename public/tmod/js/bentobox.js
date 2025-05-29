function isMobile() {
  return window.innerWidth < 760;
}

// bentobox 1

const boxName1 = "bentobox-1 ";
const boxName2 = "bentobox-2 ";

const bentoBox1 = document.querySelector(".bentobox-1");
const elements1 = document.querySelectorAll(".bento-item");

function setBentoBoxClass(box, boxName, classname) {
  box.className = boxName + classname;
}

elements1.forEach((element, index) => {
  const className = "hover-" + (index + 1);
  const title = element.querySelector(".bento-title");
  const text = element.querySelector(".bento-text");

  element.addEventListener("mouseenter", () => {
    if (!isMobile()) {
      setBentoBoxClass(bentoBox1, boxName1, className);
      title?.classList.add("active");
      text?.classList.add("active");
    }
  });
  element.addEventListener("mouseleave", () => {
    if (!isMobile()) {
      setBentoBoxClass(bentoBox1, boxName1, "default");
      title?.classList.remove("active");
      text?.classList.remove("active");
    }
  });
});

// bentobox 2

const bentoBox2 = document.querySelector(".bentobox-2");
const elements2 = document.querySelectorAll(".bento2-item");

elements2.forEach((element, index) => {
  const className = "hover-" + (index + 1);
  const title = element.querySelector(".bento-title");
  const text = element.querySelector(".bento-text");

  element.addEventListener("mouseenter", () => {
    if (!isMobile()) {
      setBentoBoxClass(bentoBox2, boxName2, className);
      title?.classList.add("active");
      text?.classList.add("active");
    }
  });
  element.addEventListener("mouseleave", () => {
    if (!isMobile()) {
      setBentoBoxClass(bentoBox2, boxName2, "default");
      title?.classList.remove("active");
      text?.classList.remove("active");
    }
  });
});
