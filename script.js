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
        
        // Генерируем шапку таблицы с минутами
        const headerDiv = document.createElement('div');
        headerDiv.style.display = 'flex';
        const minutes = ['9 minutes', '10 minutes', '11 minutes', '12 minutes'];
        minutes.forEach(minute => {
            const minuteHeader = document.createElement('div');
            minuteHeader.textContent = minute;
            minuteHeader.style.flex = '1';
            minuteHeader.style.padding = '0 10px';
            headerDiv.appendChild(minuteHeader);
        });
        container.appendChild(headerDiv);
        
        // Генерируем строки для каждых 10 секунд каждой минуты
        for (let second = 0; second < 60; second += 10) {
            const rowDiv = document.createElement('div');
            rowDiv.style.display = 'flex';
            
            // Для каждой минуты добавляем ячейку секунд и значением
            for (let minute = 9; minute <= 12; minute++) {
                const totalSeconds = (minute * 60) + second;
                const value = -60 * totalSeconds + 2000000;
                const cellDiv = document.createElement('div');
                cellDiv.style.flex = '1';
                cellDiv.style.padding = '0 10px';
                cellDiv.innerHTML = `${second}s: 19${((value - 1900000) / 100).toString().padStart(3, '0')}00`;
                rowDiv.appendChild(cellDiv);
            }
            
            container.appendChild(rowDiv);
        }
    }
    
    document.addEventListener('DOMContentLoaded', fillValueTable);


    fillValueTable();
});
