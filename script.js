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

        for (let minutes = 9; minutes <= 12; minutes++) {
            for (let seconds = 0; seconds < 60; seconds += 10) {
                const totalSeconds = (minutes * 60) + seconds;
                const value = -60 * totalSeconds + 2000000;
                const displayValue = `19${((value - 1900000) / 100).toString().padStart(3, '0')}00`;
                const div = document.createElement('div');
                div.textContent = `${minutes}m ${seconds}s: ${displayValue}`;
                container.appendChild(div);
            }
        }
    }

    fillValueTable();
});
