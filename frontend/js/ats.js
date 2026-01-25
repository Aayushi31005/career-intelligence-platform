document
  .getElementById("checkATS")
  .addEventListener("click", async () => {
    const resume = document.getElementById("resume").value;
    const role = document.getElementById("role").value;
    const resultDiv = document.getElementById("atsResults");

    if (!resume || !role) {
      resultDiv.innerHTML = "<p>Please provide resume and target role.</p>";
      return;
    }

    const result = await postData("/ats-readiness", {
      resume_text: resume,
      target_role: role,
    });

    if (result.error) {
      resultDiv.innerHTML = "<p>Unable to evaluate ATS readiness.</p>";
      return;
    }

    resultDiv.innerHTML = `
      <p><strong>Skill Coverage:</strong> ${(result.skill_coverage * 100).toFixed(0)}%</p>
      <p><strong>Readiness Level:</strong> ${result.readiness_level}</p>

      <p><strong>Matched Skills:</strong></p>
      <ul>${result.matched_skills.map(s => `<li>${s}</li>`).join("")}</ul>

      <p><strong>Missing Skills:</strong></p>
      <ul>${result.missing_skills.map(s => `<li>${s}</li>`).join("")}</ul>
    `;
  });