const menuButton = document.querySelector(".menu-button");
const menuPanel = document.getElementById("menuPanel");

menuButton.addEventListener("click", () => {
  menuPanel.classList.toggle("hidden");
});

document.querySelectorAll(".theme-button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.body.setAttribute("data-theme", btn.dataset.theme);
  });
});