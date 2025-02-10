# GitHub Repository for SEAL Дневник будущего 🌟

## Описание проекта 📝
Проект "SEAL Дневник будущего" представляет собой веб-приложение для управления домашними заданиями, новостями и профилем пользователя. Он включает в себя несколько страниц, таких как главная страница, страница с домашними заданиями и страница профиля пользователя.

## Структура проекта 📂
- **index.html**: Главная страница с последними новостями и наградами.
- **homework.html**: Страница с домашними заданиями, где пользователи могут загружать свои работы.
- **profile.html**: Страница профиля пользователя, где можно изменить личные данные и аватар.
- **script.js**: JavaScript файл, содержащий логику для загрузки файлов, изменения аватара и сохранения данных в `localStorage`.

## Сложные части кода 🔍

### 1. Работа с `localStorage` 💾
```javascript
localStorage.setItem('selectedAvatar', selectedAvatar); // Сохраняем выбранный аватар
```
#### Объяснение:
- **`localStorage`** — это встроенный объект в браузере, который позволяет хранить данные в формате ключ-значение. Данные сохраняются даже после закрытия вкладки или перезагрузки страницы.
- В данном случае мы сохраняем выбранный аватар пользователя. Это позволяет сохранить персонализацию интерфейса между сессиями пользователя.

### 2. Предварительный просмотр изображения 🖼️
```javascript
function previewImage(event) {
    const image = document.getElementById('profileImage');
    image.src = URL.createObjectURL(event.target.files[0]);
}
```
#### Объяснение:
- Эта функция срабатывает при загрузке нового изображения профиля.
- **`URL.createObjectURL()`** создает временный URL для загруженного файла, который позволяет отображать его в элементе `<img>`.
- Это обеспечивает мгновенный предварительный просмотр загружаемого изображения без необходимости загрузки файла на сервер.

### 3. Сохранение данных формы 💡
```javascript
function saveData(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Получаем значения из полей формы
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const socialLink = document.getElementById('socialLink').value;

    // Сохраняем данные в localStorage
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('address', address);
    localStorage.setItem('socialLink', socialLink);

    alert('Данные успешно сохранены! 🎉');
}
```
#### Объяснение:
- Функция `saveData` обрабатывает событие отправки формы.
- **`event.preventDefault()`** предотвращает стандартное поведение формы (отправку данных на сервер), что позволяет сохранять данные локально.
- Значения из полей формы извлекаются и сохраняются в `localStorage`, что позволяет пользователю сохранять свои данные между сессиями.

### 4. Заполнение формы данными из `localStorage` 🔄
```javascript
window.onload = function() {
    document.getElementById('firstName').value = localStorage.getItem('firstName') || '';
    document.getElementById('lastName').value = localStorage.getItem('lastName') || '';
    document.getElementById('email').value = localStorage.getItem('email') || '';
    document.getElementById('phone').value = localStorage.getItem('phone') || '';
    document.getElementById('address').value = localStorage.getItem('address') || '';
    document.getElementById('socialLink').value = localStorage.getItem('socialLink') || '';

    // Загружаем выбранный аватар
    const selectedAvatar = localStorage.getItem('selectedAvatar') || 'default-profile.png';
    document.getElementById('avatarSelect').value = selectedAvatar;
    document.getElementById('profileImage').src = `ava/${selectedAvatar}`;
};
```
#### Объяснение:
- При загрузке страницы данные из `localStorage` автоматически заполняют соответствующие поля формы.
- Это улучшает пользовательский опыт, позволяя пользователю видеть свои сохраненные данные и аватар сразу после загрузки страницы.

### 5. Загрузка файлов 📂
```javascript
function uploadFile(fileInputId, assignmentId) {
    const fileInput = document.getElementById(fileInputId);
    const file = fileInput.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Обработка загруженного файла
            console.log('Файл загружен:', e.target.result);
            document.querySelector(`#${assignmentId} .btn-danger`).style.display = 'block'; // Показываем кнопку удаления
        };
        reader.readAsDataURL(file);
    }
}
```
#### Объяснение:
- Функция `uploadFile` обрабатывает загрузку файла из элемента `<input>`.
- **`FileReader`** позволяет асинхронно читать содержимое файла, что позволяет обрабатывать его, не блокируя интерфейс пользователя.
- После успешной загрузки файла отображается кнопка для его удаления.

### 6. Удаление файла ❌
```javascript
function deleteFile(assignmentId) {
    const taskElement = document.getElementById(assignmentId);
    const fileInput = taskElement.querySelector('input[type="file"]');
    fileInput.value = ''; // Очищаем значение input
    taskElement.querySelector('.btn-danger').style.display = 'none'; // Скрываем кнопку удаления
    alert('Файл удалён! 🚫');
}
```
#### Объяснение:
- Функция `deleteFile` очищает поле загрузки файла и скрывает кнопку удаления.
- Это позволяет пользователю легко управлять загруженными файлами.

## Заключение 🎊
Проект "SEAL Дневник будущего" демонстрирует использование современных веб-технологий для создания интерактивного и персонализированного пользовательского интерфейса. Использование `localStorage` для хранения пользовательских данных и аватаров позволяет пользователям иметь непрерывный опыт работы с приложением.
## Связь 📫

Если у вас есть вопросы, предложения или вы хотите сообщить об ошибках, пожалуйста, свяжитесь с нами по электронной почте: [daniilstarikov2017@gmail.com](mailto:daniilstarikov2017@gmail.com).

---

Спасибо за интерес к проекту **SEAL Дневник будущего**! Мы надеемся, что он будет полезен для вас. Ваши отзывы и предложения помогут нам сделать его ещё лучше! 🌟
```
