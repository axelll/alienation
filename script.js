document.addEventListener('DOMContentLoaded', function() {
    // Обработка нажатия на кнопку "Calculate Time"
    document.getElementById('calculateButton').addEventListener('click', function() {
        const inputDigits = document.getElementById('inputValue').value;
        if (!inputDigits || inputDigits.length !== 3 || isNaN(parseInt(inputDigits, 10))) {
            document.getElementById('result').textContent = 'Please enter exactly three digits.';
            return;
        }

        // Формируем полное значение, добавляя префикс "19" и суффикс "00"
        const fullValue = parseInt("19" + inputDigits + "00", 10);

        // Рассчитываем время, используя обратную формулу
        const totalSeconds = (2000000 - fullValue) / 60;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.floor(totalSeconds % 60);

        // Выводим результат
        document.getElementById('result').textContent = `Time: ${minutes} minutes and ${seconds} seconds`;
    });

    fillValueTable();
});

function fillValueTable() {
    const container = document.getElementById('valueTable');
    container.innerHTML = ''; // Очищаем контейнер перед заполнением

    // Генерация колонок для каждой минуты от 9 до 12
    for (let minute = 9; minute <= 12; minute++) {
        const minuteColumn = document.createElement('div');
        minuteColumn.className = 'column minute-column';
        const header = document.createElement('div');
        header.className = 'header';
        header.textContent = `${minute} minutes`;
        minuteColumn.appendChild(header);

        // Добавляем значения для каждых 10 секунд
        for (let second = 0; second < 60; second += 10) {
            const valueDiv = document.createElement('div');
            valueDiv.className = 'value';
            const totalSeconds = (minute * 60) + second;
            const calculatedValue = -60 * totalSeconds + 2000000;
            const displayValue = `19${((calculatedValue - 1900000) / 100).toString().padStart(3, '0')}00`;
            valueDiv.textContent = `${second}s: ${displayValue}`;
            minuteColumn.appendChild(valueDiv);
        }

        container.appendChild(minuteColumn);
    }
}
