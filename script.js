document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateTimeFromScore').addEventListener('click', function() {
        const score = parseInt(document.getElementById('inputScore').value, 10);
        if (isNaN(score)) {
            document.getElementById('resultFromScore').textContent = 'Please enter a valid score.';
            return;
        }
        // Здесь должна быть ваша логика преобразования score во время
        // Например, это может быть заглушка:
        document.getElementById('resultFromScore').textContent = `Calculated time: ...`;
    });

    document.getElementById('calculateScore').addEventListener('click', function() {
        const minutes = parseInt(document.getElementById('inputMinutes').value, 10);
        const seconds = parseInt(document.getElementById('inputSeconds').value, 10);
        if (isNaN(minutes) || isNaN(seconds)) {
            document.getElementById('timeResult').textContent = 'Please enter valid minutes and seconds.';
            return;
        }
        // Здесь должна быть ваша логика преобразования времени в score
        // Пример расчёта и форматирования:
        const totalSeconds = minutes * 60 + seconds;
        const calculatedScore = -60 * totalSeconds + 2000000; // Примерная формула
        document.getElementById('timeResult').textContent = `Score: ${calculatedScore.toLocaleString('en-US')}`;
    });

    // Здесь может быть функция заполнения таблицы, если нужно
});
