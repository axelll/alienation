document.addEventListener('DOMContentLoaded', function() {
    // Обработчик для калькулятора "Calculate Time from Score"
    document.getElementById('calculateTimeFromScore').addEventListener('click', function() {
        const score = parseInt(document.getElementById('inputScore').value, 10);
        if (isNaN(score)) {
            document.getElementById('resultFromScore').textContent = 'Please enter a valid score.';
            return;
        }
        // Пример логики преобразования score во время (замените формулой вашего расчета)
        const totalSeconds = (2000000 - score) / 60;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.floor(totalSeconds % 60);
        document.getElementById('resultFromScore').textContent = `Calculated time: ${minutes} minutes and ${seconds} seconds`;
    });

    // Обработчик для калькулятора "Calculate Score from Time"
    document.getElementById('calculateScore').addEventListener('click', function() {
        const minutes = parseInt(document.getElementById('inputMinutes').value, 10);
        const seconds = parseInt(document.getElementById('inputSeconds').value, 10);
        if (isNaN(minutes) || isNaN(seconds)) {
            document.getElementById('timeResult').textContent = 'Please enter valid minutes and seconds.';
            return;
        }
        const totalSeconds = minutes * 60 + seconds;
        const score = -60 * totalSeconds + 2000000; // Примерная формула
        // Форматируем вывод с пробелами в качестве разделителей тысяч
        document.getElementById('timeResult').textContent = `Score: ${score.toLocaleString('ru-RU')}`;
    });

    fillValueTable();
});

function fillValueTable() {
    const container = document.getElementById('scoreTable');
    container.innerHTML = ''; // Очистка контейнера перед заполнением

    // Пример заполнения таблицы, замените данными вашего расчета
    for (let minute = 9; minute <= 12; minute++) {
        for (let second = 0; second < 60; second += 10) {
            const totalSeconds = minute * 60 + second;
            const score = -60 * totalSeconds + 2000000; // Примерная формула
            const scoreFormatted = score.toLocaleString('ru-RU'); // Форматирование для вывода

            const row = document.createElement('div');
            row.textContent = `${minute}m ${second}s: ${scoreFormatted}`;
            container.appendChild(row);
        }
    }
}
