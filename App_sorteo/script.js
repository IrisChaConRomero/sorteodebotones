document.addEventListener('DOMContentLoaded', () => {
    const choiceContainer = document.getElementById('choice-container');
    const resultContainer = document.getElementById('result-container');
    const resultMessage = document.getElementById('result-message');
    
    const btnRed = document.getElementById('btn-red');
    const btnBlue = document.getElementById('btn-blue');
    const btnRestart = document.getElementById('btn-restart');

    const handleChoice = () => {
        // Hide choices and show result container
        choiceContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');

        // Determine win or loss randomly (50% chance)
        const isWin = Math.random() >= 0.5;

        if (isWin) {
            resultMessage.textContent = '¡Has ganado!';
            resultMessage.className = 'win';
        } else {
            resultMessage.textContent = 'Has perdido';
            resultMessage.className = 'lose';
        }
    };

    btnRed.addEventListener('click', handleChoice);
    btnBlue.addEventListener('click', handleChoice);

    btnRestart.addEventListener('click', () => {
        // Reset UI
        resultContainer.classList.add('hidden');
        choiceContainer.classList.remove('hidden');
        resultMessage.textContent = '';
        resultMessage.className = '';
    });
});
