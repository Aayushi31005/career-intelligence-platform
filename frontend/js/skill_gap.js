document
  .getElementById("analyzeSkillGap")
  .addEventListener("click", async () => {

    const skillsInput = document.getElementById("skills").value;
    const role = document.getElementById("role").value;
    const resultsCard = document.getElementById("skillGapResults");
    const resultsContent = document.getElementById("resultsContent");

    if (!skillsInput || !role) {
      resultsContent.innerHTML = `
        <p class="muted">Please enter skills and select a role.</p>
      `;
      resultsCard.classList.remove("hidden");
      return;
    }

    const userSkills = skillsInput
      .split(",")
      .map(s => s.trim().toLowerCase())
      .filter(Boolean);

    resultsCard.classList.remove("hidden");
    resultsContent.innerHTML = `<p class="muted">Analyzing your profile…</p>`;

    const result = await postData("/skill-gap", {
      user_skills: userSkills,
      target_role: role
    });

    if (result.error) {
      resultsContent.innerHTML = `
        <p class="muted">
          Unable to analyze skill gap right now. Please try again.
        </p>
      `;
      return;
    }

    resultsContent.innerHTML = `
      <div class="result-block">
        <h3>Results</h3>

        <p><strong>Target Role:</strong> ${result.role}</p>

        <p><strong>Existing Skills:</strong></p>
        <ul>
          ${result.existing_skills.map(skill => `<li>${skill}</li>`).join("")}
        </ul>

        <p><strong>Missing Skills:</strong></p>
        <ul>
          ${result.missing_skills
            .map(s => `<li>${s.skill} — <em>${s.importance}</em></li>`)
            .join("")}
        </ul>
      </div>
    `;
  });