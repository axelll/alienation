document.getElementById('calculateButton').addEventListener('click', function() {
    const number = document.getElementById('numberInput').value;
    const valuePerSecond = 60; // Adjust this based on the conversion rate

    // Convert number to seconds
    const seconds = number * valuePerSecond;

    // Convert seconds to time format
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    // Display the result
    document.getElementById('result').textContent = `Time: ${minutes} minutes and ${remainingSeconds} seconds`;
});
