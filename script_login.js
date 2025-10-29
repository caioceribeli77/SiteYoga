const passwordInput = document.getElementById('password');
const emailInput = document.getElementById('email');
const togglePasswordButton = document.getElementById('togglePassword');

togglePasswordButton.addEventListener('click', () => {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  togglePasswordButton.textContent = type === 'password' ? 'Mostrar' : 'Ocultar';
});