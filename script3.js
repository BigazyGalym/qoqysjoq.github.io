// Получаем данные из локального хранилища
var savedUsername = localStorage.getItem('username');
var loginLogoutButton = document.getElementById('loginLogoutButton');

// Проверяем наличие данных пользователя
if (savedUsername) {
  // Если данные пользователя есть, меняем текст на "Выйти"
  loginLogoutButton.innerHTML = '<a href="./index1232231.html" onclick="logout()">Выйти</a>';
}

function logout() {
  // Удаляем данные пользователя из локального хранилища
  localStorage.removeItem('username');
  localStorage.removeItem('password');

  // После выхода перезагружаем страницу (или перенаправляем куда-то еще)
  window.location.reload();
}