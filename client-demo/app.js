document.addEventListener("DOMContentLoaded", () => {
  const fetchButton = document.getElementById("fetchButton");
  const resultDiv = document.getElementById("result");

  fetchButton.addEventListener("click", async () => {
    try {
      const response = await fetch("http://localhost:8088/api/redirect", {
        method: "GET",
        credentials: "include", // Gửi cookies nếu cần
      });

      if (response.redirected) {
        console.log("Redirected to:", response.url);
      }

      const data = await response.text();
      resultDiv.textContent = data;
    } catch (error) {
      console.error("Error:", error);
      resultDiv.textContent = "An error occurred: " + error.message;
    }
  });
});
