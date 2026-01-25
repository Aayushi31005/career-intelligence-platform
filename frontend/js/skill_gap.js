document
  .getElementById("analyzeSkillGap")
  .addEventListener("click", async () => {
    const resume = document.getElementById("resume").value;
    const role = document.getElementById("role").value;
    const resultsDiv = document.getElementById("results");

    if (!resume || !role) {
      resultsDiv.innerHTML = "<p>Please provide resume and role.</p>";
      return;
    }

    const skills = resume
      .toLowerCase()
      .split(/[\s,]+/)
      .filter(w => w.length > 2);

    const result = await postData("/skill-gap", {
      user_skills: skills,
      target_role: role,
    });

    if (result.error) {
      resultsDiv.innerHTML = "<p>Error analyzing skill gap.</p>";
      return;
    }

    resultsDiv.innerHTML = `
      <p><strong>Existing skills:</strong></p>
      <ul>${result.existing_skills.map(s => `<li>${s}</li>`).join("")}</ul>

      <p><strong>Missing skills:</strong></p>
      <ul>${result.missing_skills
        .map(s => `<li>${s.skill} (${s.importance})</li>`)
        .join("")}</ul>
    `;
  });