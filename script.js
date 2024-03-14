document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('calculateButton').addEventListener('click', function() {
        const inputValue = parseInt(document.getElementById('inputValue').value, 10) || 0;
        // Преобразование значения обратно во время
        const totalSeconds = (2000000 - inputValue) / 60;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.floor(totalSeconds % 60);
        document.getElementById('result').textContent = `Time: ${minutes} minutes and ${seconds} seconds`;
    });

    function fillValueTable() {
        const table = document.getElementById('valueTable');
        for (let minutes = 9; minutes <= 13; minutes++) {
            for (let seconds = 0; seconds < 60; seconds += 30) {
                const totalSeconds = (minutes * 60) + seconds;
                const value = -60 * totalSeconds + 2000000;
                const row = table.insertRow();
                const timeCell = row.insertCell();
                const valueCell = row.insertCell();
                timeCell.textContent = `${minutes}m ${seconds}s`;
                valueCell.textContent = value;
            }
        }
    }

    fillValueTable();
});
