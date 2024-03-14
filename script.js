document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('modeSelect').addEventListener('change', function() {
        if (this.value === 'timeToValue') {
            document.getElementById('valueInputContainer').style.display = 'none';
            document.getElementById('timeInputContainer').style.display = 'block';
        } else {
            document.getElementById('valueInputContainer').style.display = 'block';
            document.getElementById('timeInputContainer').style.display = 'none';
        }
    });

    const valuePerSecond = 1956800 / 720; // Значение за секунду на основе 12 минут = 1956800

    document.getElementById('calculateButton').addEventListener('click', function() {
        const mode = document.getElementById('modeSelect').value;
        const inputValue = document.getElementById('inputValue').value;
        const inputMinutes = document.getElementById('inputMinutes').value;
        const inputSeconds = document.getElementById('inputSeconds').value;

        if (mode === 'valueToTime') {
            const totalSeconds = inputValue / valuePerSecond;
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = Math.round(totalSeconds % 60);
            document.getElementById('result').textContent = `Time: ${minutes} minutes and ${seconds} seconds`;
        } else if (mode === 'timeToValue') {
            const totalSeconds = (parseInt(inputMinutes, 10) * 60) + parseInt(inputSeconds, 10);
            const value = totalSeconds * valuePerSecond;
            document.getElementById('result').textContent = `Value: ${value.toFixed(0)}`;
        }
    });

    function fillValueTable() {
        const table = document.getElementById('valueTable');
        for (let minutes = 9; minutes <= 15; minutes++) {
            for (let seconds = 0; seconds <= 30; seconds += 30) {
                const totalSeconds = (minutes * 60) + seconds;
                const value = totalSeconds * valuePerSecond;
                const row = table.insertRow();
                const timeCell = row.insertCell();
                const valueCell = row.insertCell();
                timeCell.textContent = `${minutes}m ${seconds}s`;
                valueCell.textContent = value.toFixed(0);
            }
        }
    }

    fillValueTable();
});
