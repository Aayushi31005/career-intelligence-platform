document
  .getElementById("matchRoles")
  .addEventListener("click", async () => {
    const resumeText = document.getElementById("resume").value;
    const resultDiv = document.getElementById("roleResults");

    if (!resumeText) {
      resultDiv.innerHTML = `
        <p class="muted">Please paste your resume text.</p>
      `;
      return;
    }

    resultDiv.innerHTML = `<p class="muted">Matching suitable roles…</p>`;

    const result = await postData("/role-matching", {
      resume_text: resumeText,
    });

    if (result.error || !result.results) {
      resultDiv.innerHTML = `
        <p class="muted">
          Unable to match roles with the provided resume.
        </p>
      `;
      return;
    }

    resultDiv.innerHTML = `
      <div class="result-block">
        <h3>Results</h3>
        <ul>
          ${result.results
            .map(
              role => `
                <li>
                  <strong>${role.role}</strong><br />
                  Skill Coverage:
                  ${(role.skill_coverage * 100).toFixed(0)}%<br />
                  Fit Level:
                  <strong>${role.fit_level}</strong>
                </li>
              `
            )
            .join("")}
        </ul>
      </div>
    `;
  });