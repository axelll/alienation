document.getElementById('modeSelect').addEventListener('change', function() {
    const mode = this.value;
    if (mode === 'timeToValue') {
        document.getElementById('valueInputContainer').style.display = 'none';
        document.getElementById('timeInputContainer').style.display = 'block';
    } else {
        document.getElementById('valueInputContainer').style.display = 'block';
        document.getElementById('timeInputContainer').style.display = 'none';
    }
});

document.getElementById('calculateButton').addEventListener('click', function() {
    const mode = document.getElementById('modeSelect').value;
    const inputValue = document.getElementById('inputValue').value;
    const inputMinutes = document.getElementById('inputMinutes').value;
    const inputSeconds = document.getElementById('inputSeconds').value;
    const valuePerSecond = 60; // Adjust this based on the conversion rate

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

// Fill value table
const table = document.getElementById('valueTable');
const valuePerSecond = 60; // Adjust this based on the conversion rate
for (let minutes = 9; minutes <= 15; minutes++) {
    for (let seconds = 0; seconds < 60; seconds += 30) {
        const totalSeconds = (minutes * 60) + seconds;
        const value = totalSeconds / valuePerSecond;
        const row = table.insertRow();
        const timeCell = row.insertCell();
        const valueCell = row.insertCell();
        timeCell.textContent = `${minutes} minutes and ${seconds} seconds`;
        valueCell.textContent = value.toFixed(2);
    }
}
