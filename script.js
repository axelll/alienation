document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateTimeFromScore').addEventListener('click', function() {
        const score = parseInt(document.getElementById('inputScore').value, 10);
        if (isNaN(score)) {
            document.getElementById('resultFromScore').textContent = 'Please enter a valid score.';
            return;
        }
        // Откорректированное вычисление времени из score для более точного результата
        const totalCentiseconds = Math.round((2000000 - score) * 100 / 60); // Переводим score в сотые доли секунды
        const minutes = Math.floor(totalCentiseconds / 6000);
        const seconds = Math.floor((totalCentiseconds % 6000) / 100);
        const centiseconds = totalCentiseconds % 100; 

        document.getElementById('resultFromScore').textContent = `Calculated time: ${minutes}:${seconds.toString().padStart(2, '0')}:${centiseconds.toString().padStart(2, '0')}`;
    });

    document.getElementById('calculateScore').addEventListener('click', function() {
        const minutes = parseInt(document.getElementById('inputMinutes').value, 10);
        const seconds = parseInt(document.getElementById('inputSeconds').value, 10);
        const centiseconds = parseInt(document.getElementById('inputCentiseconds').value, 10);
        if (isNaN(minutes) || isNaN(seconds) || isNaN(centiseconds)) {
            document.getElementById('timeResult').textContent = 'Please enter valid time.';
            return;
        }
        // Используем секунды и сотые для более точного расчета score
        const totalCentiseconds = (minutes * 60 + seconds) * 100 + centiseconds;
        const score = Math.round((2000000 - totalCentiseconds * 0.6) / 1); // Убираем десятичные для точности

        document.getElementById('timeResult').textContent = `Score: ${score.toLocaleString('ru-RU')}`;
    });

    fillValueTable();
});

function fillValueTable() {
    const table = document.getElementById('scoreTable');
    const headerRow = table.insertRow();
    
    // Заполнение заголовков
    headerRow.insertCell().textContent = ''; // Пустая ячейка для секунд
    for (let minute = 9; minute <= 12; minute++) {
        const headerCell = headerRow.insertCell();
        headerCell.textContent = `${minute} minutes`;
        headerCell.className = 'header';
    }
    
    // Заполнение данных таблицы
    for (let second = 0; second < 60; second += 10) {
        const row = table.insertRow();
        row.insertCell().textContent = `${second} seconds`;
        for (let minute = 9; minute <= 12; minute++) {
            const totalSeconds = minute * 60 + second;
            const score = -60 * totalSeconds + 2000000;
            row.insertCell().textContent = score.toLocaleString('ru-RU');
        }
    }
}
