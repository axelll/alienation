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

    document.getElementById('calculateTimeFromScore').addEventListener('click', function() {
        const score = parseInt(document.getElementById('inputScore').value, 10);
        if (isNaN(score)) {
            document.getElementById('resultFromScore').textContent = 'Please enter a valid score.';
            return;
        }
        const totalCentiseconds = (2000000 - score) / 0.6; // Преобразуем score в сотые доли секунды
        const minutes = Math.floor(totalCentiseconds / 6000);
        const seconds = Math.floor((totalCentiseconds % 6000) / 100);
        const centiseconds = Math.floor(totalCentiseconds % 100);
        document.getElementById('resultFromScore').textContent = `Calculated time: ${minutes}:${seconds.toString().padStart(2, '0')}:${centiseconds.toString().padStart(2, '0')}`;
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
