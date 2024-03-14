document.addEventListener('DOMContentLoaded', function () {
    // Переключение видимости полей ввода в зависимости от выбранного режима
    document.getElementById('modeSelect').addEventListener('change', function() {
        if (this.value === 'timeToValue') {
            document.getElementById('valueInputContainer').style.display = 'none';
            document.getElementById('timeInputContainer').style.display = 'block';
        } else {
            document.getElementById('valueInputContainer').style.display = 'block';
            document.getElementById('timeInputContainer').style.display = 'none';
        }
    });

    // Расчёт и вывод результата
    document.getElementById('calculateButton').addEventListener('click', function() {
        const mode = document.getElementById('modeSelect').value;
        const inputValue = document.getElementById('inputValue').value;
        const inputMinutes = document.getElementById('inputMinutes').value;
        const inputSeconds = document.getElementById('inputSeconds').value;
        const valuePerSecond = 60; // Это значение можно скорректировать

        if (mode === 'valueToTime') {
            const totalSeconds = inputValue * valuePerSecond;
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;
            document.getElementById('result').textContent = `Time: ${minutes} minutes and ${seconds} seconds`;
        } else if (mode === 'timeToValue') {
            const totalSeconds = (parseInt(inputMinutes, 10) * 60) + parseInt(inputSeconds, 10);
            const value = totalSeconds / valuePerSecond;
            document.getElementById('result').textContent = `Value: ${value}`;
        }
    });

    // Заполнение таблицы значений
    function fillValueTable() {
        const table = document.getElementById('valueTable');
        const valuePerSecond = 60; // Это значение можно скорректировать
        for (let minutes = 9; minutes <= 15; minutes++) {
            for (let seconds = 0; seconds <= 30; seconds += 30) {
                const totalSeconds = (minutes * 60) + seconds;
                const value = totalSeconds / valuePerSecond;
                const row = table.insertRow();
                const timeCell = row.insertCell();
                const valueCell = row.insertCell();
                timeCell.textContent = `${minutes}m ${seconds}s`;
                valueCell.textContent = value.toFixed(2);
            }
        }
    }

    fillValueTable();
});
