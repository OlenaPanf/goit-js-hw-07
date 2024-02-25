const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const emailInput = event.currentTarget.elements['email'];
  const passwordInput = event.currentTarget.elements['password'];

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (!emailValue || !passwordValue) {
    alert('All form fields must be filled in');
    return;
  }

  const info = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(info);
  event.currentTarget.reset();
});
