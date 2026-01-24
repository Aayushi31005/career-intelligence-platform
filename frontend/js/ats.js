(async function () {
  const resumeText = localStorage.getItem("resumeText");
  const role = localStorage.getItem("targetRole");

  const result = await postData("/ats-readiness", {
    resume_text: resumeText,
    target_role: role,
  });

  const container = document.getElementById("atsResult");

  if (result.error) {
    container.innerHTML = "<p>Unable to load ATS readiness.</p>";
    return;
  }

  container.innerHTML = `
    <p><strong>Skill Coverage:</strong> ${result.skill_coverage * 100}%</p>
    <p><strong>Readiness Level:</strong> ${result.readiness_level}</p>
    <p><strong>Matched Skills:</strong> ${result.matched_skills.join(", ")}</p>
    <p><strong>Missing Skills:</strong> ${result.missing_skills.join(", ")}</p>
  `;
})();