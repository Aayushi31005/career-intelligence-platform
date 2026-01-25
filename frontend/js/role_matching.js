document
  .getElementById("matchRoles")
  .addEventListener("click", async () => {
    const resumeText = document.getElementById("resume").value;
    const resultDiv = document.getElementById("roleResults");

    if (!resumeText) {
      resultDiv.innerHTML = "<p>Please paste your resume text.</p>";
      return;
    }

    const result = await postData("/role-matching", {
      resume_text: resumeText,
    });

    if (result.error || !result.results) {
      resultDiv.innerHTML = "<p>Unable to fetch role matching data.</p>";
      return;
    }

    resultDiv.innerHTML = `
      <ul>
        ${result.results
          .map(
            role => `
            <li>
              <strong>${role.role}</strong><br />
              Skill Coverage: ${(role.skill_coverage * 100).toFixed(0)}%<br />
              Fit Level: <strong>${role.fit_level}</strong>
            </li>
          `
          )
          .join("")}
      </ul>
    `;
  });