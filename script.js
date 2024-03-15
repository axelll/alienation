document.addEventListener('DOMContentLoaded', function() {
    fillValueTable();
    displayVersion();
});

function fillValueTable() {
    const table = document.getElementById('scoreTable');
    const headerRow = table.insertRow();
    headerRow.insertCell().textContent = 'Seconds'; // Ячейка заголовка для секунд
    for (let minute = 9; minute <= 12; minute++) {
        const headerCell = headerRow.insertCell();
        headerCell.textContent = `${minute} minutes`;
    }

    for (let second = 0; second < 60; second += 10) {
        const row = table.insertRow();
        row.insertCell().textContent = `${second} seconds`;
        for (let minute = 9; minute <= 12; minute++) {
            const totalSeconds = minute * 60 + second;
            const score = 2000000 - totalSeconds * 60;
            const cell = row.insertCell();
            cell.textContent = score.toLocaleString('ru-RU');
        }
    }
}

function displayVersion() {
    const version = 'v1.0.4'; // Установленная версия
    const versionElement = document.createElement('div');
    versionElement.style.position = 'fixed';
    versionElement.style.bottom = '0';
    versionElement.style.right = '0';
    versionElement.style.padding = '10px';
    versionElement.style.backgroundColor = 'lightgrey';
    versionElement.textContent = `Version: ${version}`;
    document.body.appendChild(versionElement);
}
