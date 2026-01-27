document
  .getElementById("analyzeSkillGap")
  .addEventListener("click", async () => {

    const skillsInput = document.getElementById("skills").value;
    const role = document.getElementById("role").value;
    const resultsCard = document.getElementById("skillGapResults");
    const resultsContent = document.getElementById("resultsContent");

    if (!skillsInput || !role) {
      alert("Please enter skills and select a role.");
      return;
    }

    const userSkills = skillsInput
      .split(",")
      .map(s => s.trim().toLowerCase())
      .filter(Boolean);

    const payload = {
      user_skills: userSkills,
      target_role: role
    };

    resultsContent.innerHTML = "Analyzing...";
    resultsCard.classList.remove("hidden");

    const result = await postData("/skill-gap", payload);

    if (result.error) {
      resultsContent.innerHTML =
        "<p>Unable to analyze skill gap.</p>";
      return;
    }

    resultsContent.innerHTML = `
      <p><strong>Target Role:</strong> ${result.role}</p>

      <p><strong>Existing Skills:</strong></p>
      <ul>
        ${result.existing_skills
          .map(skill => `<li>${skill}</li>`)
          .join("")}
      </ul>

      <p><strong>Missing Skills:</strong></p>
      <ul>
        ${result.missing_skills
          .map(
            s =>
              `<li>${s.skill} — <em>${s.importance}</em></li>`
          )
          .join("")}
      </ul>
    `;
});