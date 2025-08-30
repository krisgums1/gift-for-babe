 function checkPassword() {
      const password = document.getElementById("password").value.trim();
      const secretContent = document.getElementById("secretContent");
      const errorMsg = document.getElementById("errorMsg");

      // Password is 7/06/2025
      if (password === "7/06/2025") {
        secretContent.style.display = "block";
        errorMsg.style.display = "none";
        document.getElementById("loginBox").style.display = "none";
      } else {
        errorMsg.style.display = "block";
      }
    }
