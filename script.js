document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateTimeFromScore').addEventListener('click', function() {
        const score = parseInt(document.getElementById('inputScore').value, 10);
        if (isNaN(score)) {
            document.getElementById('resultFromScore').textContent = 'Please enter a valid score.';
            return;
        }
        const totalSeconds = (2000000 - score) / 60;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.floor(totalSeconds % 60);
        document.getElementById('resultFromScore').textContent = `Calculated time: ${minutes} minutes and ${seconds} seconds`;
    });

    document.getElementById('calculateScore').addEventListener('click', function() {
        const minutes = parseInt(document.getElementById('inputMinutes').value, 10);
        const seconds = parseInt(document.getElementById('inputSeconds').value, 10);
        if (isNaN(minutes) || isNaN(seconds)) {
            document.getElementById('timeResult').textContent = 'Please enter valid minutes and seconds.';
            return;
        }
        const totalSeconds = minutes * 60 + seconds;
        const score = -60 * totalSeconds + 2000000;
        document.getElementById('timeResult').textContent = `Score: ${score.toLocaleString('ru-RU')}`;
    });

    fillValueTable();
});

function fillValueTable() {
    const table = document.getElementById('scoreTable');
    const headerRow = table.insertRow();

    // Первая ячейка заголовка с оранжевым фоном
    const firstHeaderCell = headerRow.insertCell();
    firstHeaderCell.textContent = 'Time';
    firstHeaderCell.className = 'orange-bg';

    // Заполнение заголовков синим фоном
    for (let minute = 9; minute <= 12; minute++) {
        const headerCell = headerRow.insertCell();
        headerCell.textContent = `${minute} minutes`;
        headerCell.className = 'header';
    }
    
    // Заполнение данных таблицы
    for (let second = 0; second < 60; second += 10) {
        const row = table.insertRow();

        // Первая ячейка данных с оранжевым фоном
        const firstDataCell = row.insertCell();
        firstDataCell.textContent = `${second} seconds`;
        firstDataCell.className = 'orange-bg';

        // Оставшиеся ячейки данных
        for (let minute = 9; minute <= 12; minute++) {
            // ... Ваш код для заполнения ячеек данными ...
        }
    }
}
