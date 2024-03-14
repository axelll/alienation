document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('calculateButton').addEventListener('click', function() {
        const inputMinutes = parseInt(document.getElementById('inputMinutes').value, 10) || 0;
        const inputSeconds = parseInt(document.getElementById('inputSeconds').value, 10) || 0;
        const totalSeconds = inputMinutes * 60 + inputSeconds;
        const value = -60 * totalSeconds + 2000000;
        document.getElementById('result').textContent = `Value: ${value}`;
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
