const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Зупиняємо стандартну поведінку форми

  const emailInput = this.elements['email'];
  const passwordInput = this.elements['password'];

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (!emailValue || !passwordValue) {
    alert('All form fields must be filled in');
    return; // При пустих полях завершуємо виконання функції
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData); // Виводимо об'єкт із введеними даними в консоль
  this.reset(); // Очищаємо значення полів форми
});
