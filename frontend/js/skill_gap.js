document.getElementById("analyzeBtn").addEventListener("click", async () => {
  const resumeText = document.getElementById("resume").value;
  const role = document.getElementById("role").value;

  if (!resumeText || !role) {
    alert("Please paste your resume and select a role.");
    return;
  }

  // simple extraction (backend does real intelligence)
  const userSkills = resumeText
    .toLowerCase()
    .split(/[\s,]+/)
    .filter(word => word.length > 2);

  const payload = {
    user_skills: userSkills,
    target_role: role,
  };

  const result = await postData("/skill-gap", payload);

  if (result.error) {
    alert("Skill gap analysis failed.");
    return;
  }

  localStorage.setItem("skillGapResult", JSON.stringify(result));
  localStorage.setItem("resumeText", resumeText);
  localStorage.setItem("targetRole", role);

  window.location.href = "skill_gap.html";
});