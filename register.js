// Отримуємо посилання на форму реєстрації
const registrationForm = document.getElementById("registration-form");

// Додаємо прослуховувач події надіслання форми
registrationForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Зупиняємо стандартну поведінку форми

  // Отримуємо значення полів форми
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  // Перевіряємо, чи пароль і підтвердження пароля співпадають
  if (password !== confirmPassword) {
    alert("Пароль та підтвердження пароля не співпадають");
    return;
  }

  // Формуємо об'єкт з даними для відправки
  const userData = {
    username: username,
    email: email,
    password: password
  };

  // Відправляємо дані на сервер (методом POST)
  fetch("https://example.com/registration", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  })
    .then(response => {
      if (response.ok) {
        alert("Реєстрація успішна");
        registrationForm.reset(); // Скидаємо значення полів форми
      } else {
        throw new Error("Помилка при реєстрації");
      }
    })
    .catch(error => {
      alert(error.message);
    });
});
