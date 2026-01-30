// ===== Inject menu HTML so it exists on EVERY page =====

const menuPanel = document.getElementById("menuPanel");

if (menuPanel) {
  menuPanel.innerHTML = `
    <nav class="menu-section">
      <a href="index.html">Home</a>
      <a href="skill_gap.html">Skill Gap</a>
      <a href="ats.html">ATS Readiness</a>
      <a href="role_matching.html">Role Matching</a>
      <a href="learning.html">Learning</a>
      <a href="network.html">Networking</a>
    </nav>

    <div class="menu-section">
      <p class="menu-title">Theme</p>
      <div class="theme-row">
        <button class="theme-button theme-blue" data-theme="blue"></button>
        <button class="theme-button theme-teal" data-theme="teal"></button>
        <button class="theme-button theme-lavender" data-theme="lavender"></button>
        <button class="theme-button theme-rose" data-theme="rose"></button>
      </div>
    </div>
  `;
}

// ===== Menu toggle =====

const menuButton = document.querySelector(".menu-button");

if (menuButton && menuPanel) {
  menuButton.addEventListener("click", () => {
    menuPanel.classList.toggle("hidden");
  });
}

// ===== Theme switching =====

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".theme-button");
  if (!btn) return;

  const theme = btn.dataset.theme;
  if (theme) {
    document.body.setAttribute("data-theme", theme);
  }
});