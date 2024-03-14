document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateButton').addEventListener('click', function() {
        const inputDigits = document.getElementById('inputValue').value;
        // Проверяем, что введено ровно три цифры
        if (inputDigits.length !== 3 || isNaN(parseInt(inputDigits, 10))) {
            document.getElementById('result').textContent = 'Please enter exactly three digits.';
            return;
        }

        // Формируем полное значение из введенных цифр
        const fullValue = parseInt("19" + inputDigits + "00", 10);

        // Исправляем расчет обратного времени, учитывая правильное формирование числа
        // Обновленный расчет с учетом добавления префикса "19" и суффикса "00"
        const totalSeconds = (2000000 - fullValue) / 60;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.floor(totalSeconds % 60);

        document.getElementById('result').textContent = `Time: ${minutes} minutes and ${seconds} seconds`;
    });

    function fillValueTable() {
        const table = document.getElementById('valueTable');
        // Очищаем таблицу перед заполнением, кроме заголовка
        while (table.rows.length > 1) {
            table.deleteRow(1);
        }
    
        for (let minutes = 9; minutes <= 12; minutes++) {
            for (let seconds = 0; seconds < 60; seconds += 10) {
                const totalSeconds = (minutes * 60) + seconds;
                // Используем формулу для расчета соответствующего значения
                const value = -60 * totalSeconds + 2000000;
                // Корректное формирование строки значения
                const displayValue = `19${((value - 1900000) / 100).toString().padStart(3, '0')}00`;
                const row = table.insertRow(-1);
                const timeCell = row.insertCell(0);
                const valueCell = row.insertCell(1);
                timeCell.textContent = `${minutes}m ${seconds}s`;
                valueCell.textContent = displayValue;
            }
        }
    }

    fillValueTable();
});
