const data = JSON.parse(localStorage.getItem("skillGapResult"));
const container = document.getElementById("results");

if (!data) {
  container.innerHTML = "<p>No analysis data found.</p>";
} else {
  container.innerHTML = `
    <p><strong>Role:</strong> ${data.role}</p>

    <p><strong>Existing Skills:</strong></p>
    <ul>
      ${data.existing_skills.map(skill => `<li>${skill}</li>`).join("")}
    </ul>

    <p><strong>Missing Skills:</strong></p>
    <ul>
      ${data.missing_skills
        .map(s => `<li>${s.skill} (${s.importance})</li>`)
        .join("")}
    </ul>
  `;
}