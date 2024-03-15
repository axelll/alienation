document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateTimeFromScore').addEventListener('click', function() {
        const score = parseInt(document.getElementById('inputScore').value, 10);
        if (isNaN(score)) {
            document.getElementById('resultFromScore').textContent = 'Please enter a valid score.';
            return;
        }
        
        const totalSeconds = Math.floor((2000000 - score) / 60);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        document.getElementById('resultFromScore').textContent = `Calculated time: ${minutes}:${seconds.toString().padStart(2, '0')}:00`;
    });

    document.getElementById('calculateScore').addEventListener('click', function() {
        const minutes = parseInt(document.getElementById('inputMinutes').value, 10);
        const seconds = parseInt(document.getElementById('inputSeconds').value, 10);
        if (isNaN(minutes) || isNaN(seconds)) {
            document.getElementById('timeResult').textContent = 'Please enter valid minutes and seconds.';
            return;
        }
        const totalSeconds = minutes * 60 + seconds;
        const score = 2000000 - totalSeconds * 60;
        document.getElementById('timeResult').textContent = `Score: ${score}`;
    });

    fillValueTable();
    displayVersionHash();
});

function fillValueTable() {
    const table = document.getElementById('scoreTable');
    const headerRow = table.insertRow();
    headerRow.insertCell().textContent = ''; // Пустая ячейка для секунд
    for (let minute = 0; minute <= 59; minute++) {
        const headerCell = headerRow.insertCell();
        headerCell.textContent = `${minute} minute${minute === 1 ? '' : 's'}`;
        headerCell.className = 'header';
    }

    for (let second = 0; second < 60; second++) {
        const row = table.insertRow();
        row.insertCell().textContent = `${second} second${second === 1 ? '' : 's'}`;
        for (let minute = 0; minute <= 59; minute++) {
            const totalSeconds = minute * 60 + second;
            const score = 2000000 - totalSeconds * 60;
            row.insertCell().textContent = score.toLocaleString('ru-RU');
        }
    }
}

function displayVersionHash() {
    const versionHash = 'v1.0.4'; // Обновлен номер версии
    const versionElement = document.createElement('div');
    versionElement.style.position = 'fixed';
    versionElement.style.bottom = '0';
    versionElement.style.right = '0';
    versionElement.style.padding = '10px';
    versionElement.style.backgroundColor = 'lightgrey';
    versionElement.textContent = `Version: ${versionHash}`;
    document.body.appendChild(versionElement);
}
