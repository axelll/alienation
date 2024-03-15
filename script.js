document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateTimeFromScore').addEventListener('click', function() {
        const score = parseInt(document.getElementById('inputScore').value, 10);
        if (isNaN(score)) {
            document.getElementById('resultFromScore').textContent = 'Please enter a valid score.';
            return;
        }
        // Изменяем формулу для точного соответствия заданному score и времени
        const totalCentiseconds = (2000000 - score) * 100 / 60;
        const minutes = Math.floor(totalCentiseconds / 6000);
        const seconds = Math.floor((totalCentiseconds % 6000) / 100);
        const centiseconds = Math.round(totalCentiseconds % 100); // Добавляем округление для centiseconds

        document.getElementById('resultFromScore').textContent = `Calculated time: ${minutes}:${seconds.toString().padStart(2, '0')}:${centiseconds.toString().padStart(2, '0')}`;
    });

    document.getElementById('calculateScore').addEventListener('click', function() {
        const minutes = parseInt(document.getElementById('inputMinutes').value, 10);
        const seconds = parseInt(document.getElementById('inputSeconds').value, 10);
        const centiseconds = 0; // Учитываем, что сотые доли секунды не вводятся, но можно добавить поле для ввода, если нужно
        if (isNaN(minutes) || isNaN(seconds)) {
            document.getElementById('timeResult').textContent = 'Please enter valid minutes and seconds.';
            return;
        }
        const totalCentiseconds = (minutes * 60 + seconds) * 100 + centiseconds;
        const score = 2000000 - (totalCentiseconds * 60 / 100);
        document.getElementById('timeResult').textContent = `Score: ${Math.round(score)}`;
    });

    fillValueTable();
    displayVersionHash();
});

function fillValueTable() {
    const table = document.getElementById('scoreTable');
    const headerRow = table.insertRow();
    
    headerRow.insertCell().textContent = ''; // Пустая ячейка для секунд
    for (let minute = 9; minute <= 12; minute++) {
        const headerCell = headerRow.insertCell();
        headerCell.textContent = `${minute} minutes`;
        headerCell.className = 'header';
    }
    
    for (let second = 0; second < 60; second += 10) {
        const row = table.insertRow();
        row.insertCell().textContent = `${second} seconds`;
        for (let minute = 9; minute <= 12; minute++) {
            const totalSeconds = minute * 60 + second;
            const score = 2000000 - (totalSeconds * 60);
            row.insertCell().textContent = score.toLocaleString('ru-RU');
        }
    }
}

function displayVersionHash() {
    const versionHash = 'v1.0.2'; // Обновите этот хэш при каждом изменении кода
    const versionElement = document.createElement('div');
    versionElement.style.position = 'fixed';
    versionElement.style.bottom = '0';
    versionElement.style.right = '0';
    versionElement.style.padding = '10px';
    versionElement.style.backgroundColor = 'lightgrey';
    versionElement.textContent = `Version: ${versionHash}`;
    document.body.appendChild(versionElement);
}
