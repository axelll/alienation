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
    const container = document.getElementById('scoreTable');
    container.innerHTML = '';

    // Создаем заголовки
    for (let minute = 9; minute <= 12; minute++) {
        const header = document.createElement('div');
        header.className = 'header';
        header.textContent = `${minute} min`;
        container.appendChild(header);
    }

    // Заполнение значений для каждых 10 секунд
    for (let second = 0; second < 60; second += 10) {
        for (let minute = 9; minute <= 12; minute++) {
            const totalSeconds = minute * 60 + second;
            const score = -60 * totalSeconds + 2000000;
            const value = document.createElement('div');
            value.className = 'value';
            value.textContent = `${second}s score: ${score.toLocaleString('ru-RU')}`;
            container.appendChild(value);
        }
    }
}
