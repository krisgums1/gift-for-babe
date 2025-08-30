// script.js - password logic (make sure file is named exactly "script.js")
document.addEventListener('DOMContentLoaded', function () {
  const ENTER_BTN = document.getElementById('enterBtn');
  const PASSWORD_INPUT = document.getElementById('password');
  const ERROR = document.getElementById('errorMsg');

  if (!ENTER_BTN || !PASSWORD_INPUT) return; // page might be main.html which doesn't have these

  function showError(msg) {
    if (!ERROR) return;
    ERROR.textContent = msg || 'Wrong password babe 😢';
    ERROR.style.display = 'block';
    // hide after 3s so it's less annoying
    setTimeout(() => { ERROR.style.display = 'none'; }, 3000);
  }

  function checkPassword() {
    const raw = PASSWORD_INPUT.value.trim();
    // Accept exact "7/06/2025" and a few common variants
    const allowed = [
      '7/06/2025',
      '07/06/2025',
      '7/6/2025',
      '07/6/2025'
    ];
    if (allowed.includes(raw)) {
      // redirect to main.html
      window.location.href = 'main.html';
    } else {
      showError('Wrong password babe 😢');
    }
  }

  ENTER_BTN.addEventListener('click', checkPassword);
  PASSWORD_INPUT.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') checkPassword();
  });
});
