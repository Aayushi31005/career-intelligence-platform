document.getElementById("networkBtn").addEventListener("click", async () => {
  const userName = document.getElementById("userName").value.trim();
  const targetName = document.getElementById("targetName").value.trim();
  const container = document.getElementById("networkResults");

  if (!userName || !targetName) {
    container.innerHTML = `
      <p class="muted">Please enter both names.</p>
    `;
    return;
  }

  container.innerHTML = `<p class="muted">Finding connection paths…</p>`;

  const result = await postData("/network/paths", {
    user: { name: userName },
    target: { name: targetName }
  });

  if (result.error || !result.path) {
    container.innerHTML = `
      <p class="muted">
        Unable to find a meaningful connection path.
      </p>
    `;
    return;
  }

  container.innerHTML = `
    <div class="result-block">
      <h3>Connection Path</h3>
      <p><strong>Path:</strong> ${result.path.join(" → ")}</p>
      <p><em>${result.explanation}</em></p>
    </div>
  `;
});