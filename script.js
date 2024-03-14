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
        container.innerHTML = ''; // Очистка контейнера перед заполнением
    
        // Создание шапки таблицы с названиями минут
        const headerDiv = document.createElement('div');
        headerDiv.className = 'row header';
        ['9 minutes', '10 minutes', '11 minutes', '12 minutes'].forEach(minute => {
            const minuteHeader = document.createElement('div');
            minuteHeader.className = 'cell';
            minuteHeader.textContent = minute;
            headerDiv.appendChild(minuteHeader);
        });
        container.appendChild(headerDiv);
    
        // Создаем строки таблицы
        for (let second = 0; second < 60; second += 10) {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'row';
    
            for (let minute = 9; minute <= 12; minute++) {
                const cellDiv = document.createElement('div');
                cellDiv.className = 'cell';
                
                const totalSeconds = (minute * 60) + second;
                const value = -60 * totalSeconds + 2000000;
                // Форматируем значение как "XXs: 19XXX00"
                cellDiv.textContent = `${second}s: 19${((value - 1900000) / 100).toString().padStart(3, '0')}00`;
    
                rowDiv.appendChild(cellDiv);
            }
            
            container.appendChild(rowDiv);
        }
    }
    
    document.addEventListener('DOMContentLoaded', fillValueTable);



    fillValueTable();
});
