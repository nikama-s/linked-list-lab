# Реалізація зв'язного списку

Цей проект реалізує кільцевий однобічно зв'язаний список на JavaScript з повним покриттям unit-тестами та інтеграцією з CI.

## Опис проекту

У проєкті міститься клас `LinkedList`, який реалізує:
- Базові операції (додавання, вставка, видалення)
- Операції пошуку (перший/останній елемент)
- Сервісні операції (клонування, реверсування, очищення, розширення)
- Повне покриття unit-тестами
- Безперервну інтеграцію через GitHub Actions

## Розрахунок варіанту

Мій варіант - **2** (остача від ділення 14 на 4):
- **Початкова реалізація**: Список на базі масивів
- **Рефакторинг**: Кільцевий однобічно зв'язаний список

## Інструкції зі збірки та тестування

### Вимоги
- Node.js (v14 або новіше)
- npm

### Встановлення
```bash
git clone https://github.com/ваш-логін/linked-list-lab.git
cd linked-list-lab
npm install
```

### Запуск тестів
```bash
npm test
```

### Запуск демо
```bash
node demo.js
```

### Коміт з впавшими тестами
[Посилання на такий коміт, для демонстрації роботи CI.](https://github.com/nikama-s/linked-list-lab/commit/6282fbc14fce012821baa1eae11fa6f42f8e6e50)

### Висновки про unit-тестування
Unit-тести виявилися надзвичайно корисними під час роботи, наприклад, під час переходу від масивів до зв'язаного списку тести відразу виявили проблему з методом append(), яка з'явилася під час рефакторингу.
Тобто, можна сказати, що навіть для такого маленького застосунку час на написання тестів окупився, тож складно переоцінити, наскільки важливі тести для більших застосунків.
