const sections = document.querySelectorAll(".section");

sections.forEach((sec) => {
  sec.querySelector(".title").addEventListener("click", () => {
    // close all sections
    sections.forEach((s) => s.classList.remove("active"));

    // open clicked section
    sec.classList.add("active");
  });
});

sections[0].classList.add("active");
