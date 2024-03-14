document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateButton').addEventListener('click', function() {
        const inputDigits = document.getElementById('inputValue').value;
        if (inputDigits.length !== 3 || isNaN(parseInt(inputDigits, 10))) {
            document.getElementById('result').textContent = 'Please enter exactly three digits.';
            return;
        }

        const fullValue = "19" + inputDigits + "00";
        const totalSeconds = (2000000 - parseInt(fullValue, 10)) / 60;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.floor(totalSeconds % 60);

        document.getElementById('result').textContent = `Time: ${minutes} minutes and ${seconds} seconds`;
    });

    fillValueTable();
});

function fillValueTable() {
    const container = document.getElementById('valueTable');
    for (let minute = 9; minute <= 12; minute++) {
        const column = document.createElement('div');
        column.className = 'column';
        const header = document.createElement('div');
        header.className = 'header';
        header.textContent = `${minute} minutes`;
        column.appendChild(header);

        for (let second = 0; second < 60; second += 10) {
            const valueDiv = document.createElement('div');
            valueDiv.className = 'value';
            valueDiv.textContent = `${second}s: 19...00`;
            column.appendChild(valueDiv);
        }

        container.appendChild(column);
    }
}
