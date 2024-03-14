document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('valueTable');
    // Очищаем контейнер
    container.innerHTML = '';

    // Генерация колонок для каждой минуты
    for (let minute = 9; minute <= 12; minute++) {
        const minuteColumn = document.createElement('div');
        minuteColumn.className = 'column';
        container.appendChild(minuteColumn);

        const header = document.createElement('div');
        header.textContent = `${minute} minutes`;
        header.className = 'header';
        minuteColumn.appendChild(header);

        // Добавление значений для каждых 10 секунд
        for (let second = 0; second < 60; second += 10) {
            const valueDiv = document.createElement('div');
            valueDiv.className = 'value';
            // Здесь должен быть ваш расчет или просто пример значения
            valueDiv.textContent = `${second}s: 19...00`; // Пример текста
            minuteColumn.appendChild(valueDiv);
        }
    }
});
