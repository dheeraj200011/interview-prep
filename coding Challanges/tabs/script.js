const tabButton = document.querySelectorAll(".btn");
const tabText = document.querySelector(".tab-content");

tabButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabText.innerHTML = "";

    // reset all buttons color first
    tabButton.forEach((b) => {
      b.style.backgroundColor = "";
    });

    // set clicked button color
    btn.style.backgroundColor = "green";

    const tabTextHeading = document.createElement("h1");
    const tabTextParagraph = document.createElement("p");

    tabTextHeading.textContent = btn.textContent;
    tabTextParagraph.textContent = `this is the text of ${btn.textContent}`;

    tabText.appendChild(tabTextHeading);
    tabText.appendChild(tabTextParagraph);
  });
});

// ye tab 1 ko bydefaulkt open kar dega
tabButton[0].click();
