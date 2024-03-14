document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateButton').addEventListener('click', function() {
        const inputDigits = document.getElementById('inputValue').value;
        // Проверяем, что введено ровно три цифры
        if (inputDigits.length !== 3 || isNaN(parseInt(inputDigits, 10))) {
            document.getElementById('result').textContent = 'Please enter exactly three digits';
            return;
        }

        // Формируем полное значение из введенных цифр
        const fullValue = parseInt("19" + inputDigits + "00", 10);
        
        // Преобразование значения обратно во время
        const totalSeconds = (2000000 - fullValue) / 60;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.floor(totalSeconds % 60);
        
        document.getElementById('result').textContent = `Time: ${minutes} minutes and ${seconds} seconds`;
    });

    // Здесь оставляем функцию fillValueTable без изменений
});
