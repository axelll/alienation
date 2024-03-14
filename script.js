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
            const totalSeconds = (minute * 60) + second;
            const calculatedValue = -60 * totalSeconds + 2000000;
            // Формируем окончательное значение с учетом формата 19XXX00
            const displayValue = `19${(calculatedValue - 1900000).toString().padStart(4, '0')}`;
            valueDiv.textContent = `${second}s: ${displayValue}`;
            minuteColumn.appendChild(valueDiv);
        }
    }
});
