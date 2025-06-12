(function() {
  const versionUrl = "https://raw.githubusercontent.com/leky98345/mathrealize.github.io/refs/heads/main/board/board.txt";

  fetch(versionUrl)
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.text();
    })
    .then(data => {
      const formatted = data
        .replace(/--BR--/g, "<br>")
        .replace(/--HR--/g, "<hr>");
      document.getElementById("remoteText").innerHTML = formatted;
    })
    .catch(error => {
      console.error("Error loading remote text:", error);
    });
})();
