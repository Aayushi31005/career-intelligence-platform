document.getElementById("atsBtn").addEventListener("click", async () => {
  const resumeText = document.getElementById("resume").value.trim();
  const role = document.getElementById("role").value.trim();
  const output = document.getElementById("atsResult");

  if (!resumeText || !role) {
    output.innerHTML = "<p>Please provide resume text and target role.</p>";
    return;
  }

  output.innerHTML = "<p>Analyzing...</p>";

  const response = await postData("/ats-readiness", {
    resume_text: resumeText,
    target_role: role
  });

  if (response.error) {
    output.innerHTML = "<p>ATS analysis failed.</p>";
    return;
  }

  output.innerHTML = `
    <p><strong>Readiness:</strong> ${response.readiness_level}</p>
    <p><strong>Skill coverage:</strong> ${(response.skill_coverage * 100).toFixed(0)}%</p>
    <p><strong>Matched skills:</strong> ${response.matched_skills.join(", ")}</p>
    <p><strong>Missing skills:</strong> ${response.missing_skills.join(", ")}</p>
  `;
});