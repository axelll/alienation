document.addEventListener('DOMContentLoaded', function() {
    displayGameInfo();
    fillValueTable();
    displayVersion();
});

function displayGameInfo() {
    const appElement = document.getElementById('app');
    const headerElement = document.querySelector('h1'); // Находим заголовок

    const infoElement = document.createElement('p');
    infoElement.textContent = 'This calculator is for the game Alienation on PlayStation 4 and 5.';
    infoElement.style.textAlign = 'center';
    infoElement.style.marginBottom = '10px';

    const noteElement = document.createElement('p');
    noteElement.textContent = 'Note: Due to the way time is calculated from the score, the centiseconds value may vary by ±1. ' +
                             'This is a result of rounding errors inherent in the conversion process between the score and the time format.';
    noteElement.style.textAlign = 'center';
    noteElement.style.marginBottom = '20px';

    // Вставляем описание и примечание после заголовка
    headerElement.insertAdjacentElement('afterend', noteElement);
    headerElement.insertAdjacentElement('afterend', infoElement);
}

function fillValueTable() {
    const table = document.getElementById('scoreTable');
    // Создаём строку для секунд и заголовков минут
    const headerRow = table.insertRow();
    const firstHeaderCell = headerRow.insertCell();
    firstHeaderCell.outerHTML = "<th>Seconds</th>"; // Используем элемент th для первой ячейки

    // Заполняем заголовки минут
    for (let minute = 9; minute <= 12; minute++) {
        const headerCell = document.createElement("th");
        headerCell.textContent = `${minute} minutes`;
        headerRow.appendChild(headerCell);
    }

    // Заполняем строки для каждой секунды
    for (let second = 0; second < 60; second += 10) {
        const row = table.insertRow();
        const firstCell = row.insertCell();
        firstCell.outerHTML = `<th>${second} seconds</th>`; // Используем элемент th для первой ячейки

        for (let minute = 9; minute <= 12; minute++) {
            const totalSeconds = minute * 60 + second;
            const score = 2000000 - totalSeconds * 60;
            const cell = row.insertCell();
            cell.textContent = new Intl.NumberFormat('ru-RU').format(score);
        }
    }
}


function displayVersion() {
    const version = 'v1.0.9'; // Обновленная версия
    const versionElement = document.createElement('div');
    versionElement.style.position = 'fixed';
    versionElement.style.bottom = '0';
    versionElement.style.right = '0';
    versionElement.style.padding = '10px';
    versionElement.style.backgroundColor = 'lightgrey';
    versionElement.textContent = `Version: ${version}`;
    document.body.appendChild(versionElement);
}

