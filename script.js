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

    // Функция для заполнения таблицы значений при загрузке страницы
    function fillValueTable() {
        const table = document.getElementById('valueTable');
        for (let minutes = 9; minutes <= 13; minutes++) {
            for (let seconds = 0; seconds < 60; seconds += 30) {
                const totalSeconds = (minutes * 60) + seconds;
                const value = "19" + ((2000000 - (totalSeconds * 60)) / 10000).toString().padStart(3, '0') + "00";
                const row = table.insertRow();
                const timeCell = row.insertCell();
                const valueCell = row.insertCell();
                timeCell.textContent = `${minutes}m ${seconds}s`;
                valueCell.textContent = value;
            }
        }
    }

    fillValueTable();
});
