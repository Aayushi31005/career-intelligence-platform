document
  .getElementById("getLearning")
  .addEventListener("click", async () => {
    const skillInput = document.getElementById("skill").value;
    const resultDiv = document.getElementById("learningResults");

    if (!skillInput) {
      resultDiv.innerHTML = "<p>Please enter a skill.</p>";
      return;
    }

    const skills = skillInput
      .toLowerCase()
      .split(",")
      .map(s => s.trim());

    const result = await postData("/learning", {
      missing_skills: skills,
    });

    if (result.error || !result.recommendations) {
      resultDiv.innerHTML = "<p>No recommendations available.</p>";
      return;
    }

    let html = "";

    for (const skill in result.recommendations) {
      html += `
        <h3>${skill}</h3>
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

    resultDiv.innerHTML = html || "<p>No resources found.</p>";
  });