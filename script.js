const homeBtn = document.getElementById("homeBtn");
const aboutBtn = document.getElementById("aboutBtn");

const homePage = document.getElementById("homePage");
const aboutPage = document.getElementById("aboutPage");

function showPage(page) {
  homePage.classList.remove("active");
  aboutPage.classList.remove("active");

  page.classList.add("active");
}

homeBtn.addEventListener("click", () => showPage(homePage));
aboutBtn.addEventListener("click", () => showPage(aboutPage));