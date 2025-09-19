document.addEventListener('DOMContentLoaded', function () {
  const correctCode = '281010';
  const activationLink = 'https://egypt-academy.github.io/uc/';
  const input = document.getElementById('subscription-code');
  const activateBtn = document.getElementById('activate-btn');
  const msg = document.getElementById('code-msg');

  input.addEventListener('input', function () {
    if (input.value.trim() === correctCode) {
      activateBtn.disabled = false;
      msg.textContent = '✅ الكود صحيح — يمكنك التفعيل الآن.';
      msg.style.color = 'green';
    } else {
      activateBtn.disabled = true;
      msg.textContent = '';
    }
  });

  activateBtn.addEventListener('click', function () {
    if (!activateBtn.disabled) {
      window.location.href = activationLink;
    }
  });
});