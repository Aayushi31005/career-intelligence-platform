document.getElementById("networkBtn").addEventListener("click", async () => {
  const userName = document.getElementById("userName").value.trim();
  const targetName = document.getElementById("targetName").value.trim();

  const container = document.getElementById("networkResults");

  if (!userName || !targetName) {
    container.innerHTML = "<p>Please enter both names.</p>";
    return;
  }

  const payload = {
    user: { name: userName },
    target: { name: targetName }
  };

  container.innerHTML = "Finding paths...";

  const result = await postData("/network/paths", payload);

  if (result.error || !result.path) {
    container.innerHTML = "<p>No connection path found.</p>";
    return;
  }

  container.innerHTML = `
    <h3>Connection Path</h3>
    <p><strong>Path:</strong> ${result.path.join(" → ")}</p>
    <p><em>${result.explanation}</em></p>
  `;
});