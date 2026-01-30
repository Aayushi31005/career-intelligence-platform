document
  .getElementById("getLearning")
  .addEventListener("click", async () => {
    const skillInput = document.getElementById("skill").value;
    const resultDiv = document.getElementById("learningResults");

    if (!skillInput) {
      resultDiv.innerHTML = `
        <p class="muted">Please enter at least one skill.</p>
      `;
      return;
    }

    const skills = skillInput
      .toLowerCase()
      .split(",")
      .map(s => s.trim())
      .filter(Boolean);

    resultDiv.innerHTML = `<p class="muted">Finding learning recommendations…</p>`;

    const result = await postData("/learning", {
      missing_skills: skills,
    });

    if (result.error || !result.recommendations) {
      resultDiv.innerHTML = `
        <p class="muted">
          Unable to generate learning recommendations right now.
        </p>
      `;
      return;
    }

    let html = "";

    for (const skill in result.recommendations) {
      html += `
        <h4>${skill}</h4>
        <ul>
          ${result.recommendations[skill]
            .map(
              r => `
                <li>
                  <strong>${r.title}</strong><br />
                  Platform: ${r.platform}<br />
                  Level: ${r.difficulty}
                </li>
              `
            )
            .join("")}
        </ul>
      `;
    }

    resultDiv.innerHTML = `
      <div class="result-block">
        <h3>Results</h3>
        ${html}
      </div>
    `;
  });