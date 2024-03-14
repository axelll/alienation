document.addEventListener('DOMContentLoaded', function() {
    // Обработчик для калькулятора "Calculate Time"
    document.getElementById('calculateTime').addEventListener('click', function() {
        const inputDigits = document.getElementById('inputValue').value;
        if (!inputDigits || inputDigits.length !== 3 || isNaN(parseInt(inputDigits, 10))) {
            document.getElementById('result').textContent = 'Please enter exactly three digits.';
            return;
        }
        const fullValue = "19" + inputDigits + "00";
        const totalSeconds = (2000000 - parseInt(fullValue, 10)) / 60;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.floor(totalSeconds % 60);
        document.getElementById('result').textContent = `Time: ${minutes} minutes and ${seconds} seconds`;
    });

    // Обработчик для калькулятора "Calculate Value"
    document.getElementById('calculateValue').addEventListener('click', function() {
        const minutes = parseInt(document.getElementById('inputMinutes').value, 10);
        const seconds = parseInt(document.getElementById('inputSeconds').value, 10);
        if (isNaN(minutes) || isNaN(seconds)) {
            document.getElementById('timeResult').textContent = 'Please enter valid minutes and seconds.';
            return;
        }
        const totalSeconds = minutes * 60 + seconds;
        const value = -60 * totalSeconds + 2000000;
        document.getElementById('timeResult').textContent = `Value: 19${((value - 1900000) / 100).toString().padStart(3, '0')}00`;
    });

    fillValueTable();
});

function fillValueTable() {
    const container = document.getElementById('valueTable');
    // Проверка на существование контейнера
    if (!container) {
        console.error('Container for value table does not exist');
        return;
    }
    
    container.innerHTML = ''; // Очищаем контейнер перед заполнением
    
    for (let minute = 9; minute <= 12; minute++) {
        const minuteColumn = document.createElement('div');
        minuteColumn.className = 'column';
        const header = document.createElement('div');
        header.className = 'header';
        header.textContent = `${minute} minutes`;
        minuteColumn.appendChild(header);
        
        for (let second = 0; second < 60; second += 10) {
            const valueDiv = document.createElement('div');
            valueDiv.className = 'value';
            const totalSeconds = (minute * 60) + second;
            const calculatedValue = -60 * totalSeconds + 2000000;
            valueDiv.textContent = `${second}s: 19${((calculatedValue - 1900000) / 100).toString().padStart(3, '0')}00`;
            minuteColumn.appendChild(valueDiv);
        }
        
        container.appendChild(minuteColumn);
    }
}
