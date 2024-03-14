document.getElementById('calculateButton').addEventListener('click', function() {
    const mode = document.getElementById('modeSelect').value;
    const inputValue = document.getElementById('inputValue').value;
    const inputSeconds = document.getElementById('inputSeconds').value;
    const valuePerSecond = 60; // Adjust this based on the conversion rate

    if (mode === 'valueToTime') {
        // Convert number to seconds
        const totalSeconds = inputValue * valuePerSecond;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        document.getElementById('result').textContent = `Time: ${minutes} minutes and ${seconds} seconds`;
    } else if (mode === 'timeToValue') {
        // Convert time to value
        const totalSeconds = (parseInt(inputValue, 10) * 60) + parseInt(inputSeconds, 10);
        const value = totalSeconds / valuePerSecond;
        document.getElementById('result').textContent = `Value: ${value}`;
    }
});
