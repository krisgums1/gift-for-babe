function checkPassword() {
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  if (password === "7/06/2025") {
    window.location.href = "main.html"; // redirect to 2nd page
  } else {
    errorMsg.style.display = "block";
  }
}
