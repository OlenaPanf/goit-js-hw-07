const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', function () {
  const inputValue = this.value.trim(); // Отримуємо значення з інпута та очищуємо від пробілів по краях
  nameOutput.textContent = inputValue || 'Anonymous'; // Встановлюємо текст у спан в залежності від значення інпута
});
