document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateButton').addEventListener('click', function() {
        const inputDigits = document.getElementById('inputValue').value;
        if (inputDigits.length !== 3 || isNaN(parseInt(inputDigits, 10))) {
            document.getElementById('result').textContent = 'Please enter exactly three digits.';
            return;
        }

        const fullValue = parseInt("19" + inputDigits + "00", 10);
        const totalSeconds = (2000000 - fullValue) / 60;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.floor(totalSeconds % 60);

        document.getElementById('result').textContent = `Time: ${minutes} minutes and ${seconds} seconds`;
    });

    function fillValueTable() {
        const container = document.getElementById('valueTable');
        container.innerHTML = ''; // Очищаем контейнер перед заполнением
        
        // Создаем колонки для каждой минуты от 9 до 12
        for (let minute = 9; minute <= 12; minute++) {
            const minuteDiv = document.createElement('div');
            minuteDiv.classList.add('minute-column');
            minuteDiv.innerHTML = `<strong>${minute} минуты</strong>`;
    
            // Добавляем временные интервалы в каждую колонку
            for (let second = 0; second < 60; second += 10) {
                const totalSeconds = (minute * 60) + second;
                const value = -60 * totalSeconds + 2000000;
                const middleValue = ((value - 1900000) / 100).toString().padStart(3, '0');
                const displayValue = `19${middleValue}00`;
                minuteDiv.innerHTML += `<br>${minute}m ${second}s: ${displayValue}`;
            }
    
            container.appendChild(minuteDiv);
        }
    }

    fillValueTable();
});
