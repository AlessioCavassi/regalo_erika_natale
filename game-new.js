// Game Logic for Christmas Treasure Hunt
document.addEventListener('DOMContentLoaded', () => {
    // Initial White Screen Handling
    setTimeout(() => {
        const whiteScreen = document.querySelector('.initial-white-screen');
        whiteScreen.style.opacity = '0';
        document.body.classList.add('loaded');
        
        setTimeout(() => {
            whiteScreen.remove();
        }, 1000);
    }, 10000);

    // Start Button Setup
    const startButton = document.getElementById('startButton');
    const content = document.querySelector('.content');
    
    startButton.onclick = function() {
        startButton.classList.add('hidden');
        content.classList.add('visible');
        document.getElementById('step1').classList.add('active');
    };

    // Game Progress Tracking
    let currentStep = 1;

    // Funzione per mostrare il popup
function showPopup(message) {
    // Rimuovi eventuali popup esistenti
    const existingPopup = document.querySelector('.success-popup');
    if (existingPopup) {
        existingPopup.remove();
    }

    const popup = document.createElement('div');
    popup.className = 'success-popup';
    popup.innerHTML = `
        <div class="popup-content">
            <h2>Corretto! 🎉</h2>
            <p>${message}</p>
            <div class="progress-bar"></div>
        </div>
    `;
    document.body.appendChild(popup);

    // Rimuovi il popup dopo 10 secondi
    setTimeout(() => {
        popup.remove();
    }, 10000);
}

    // Answer Verification Function
    window.checkAnswer = function(step) {
        const answer = document.getElementById(`answer${step}`).value.toLowerCase().trim();
        const feedback = document.getElementById(`feedback${step}`);
        
        switch(step) {
            case 1:
                if (answer === 'moka' || answer === 'la moka' || answer === 'caffettiera' || answer === 'la caffettiera') {
                    showPopup("Bravaaaa! Sono il tuo primo bigliettino, cercami lì dentro! ☕");
                    setTimeout(() => showSuccess(step), 10000);
                } else {
                    feedback.textContent = "Mmm... non proprio. Ripensa a come prepari il caffè! ☕";
                }
                break;
            case 2:
                if (answer === 'scarpe' || answer === 'le scarpe') {
                    showPopup("Perfetto! Sono dentro le tue scarpineeee! 👟");
                    setTimeout(() => showSuccess(step), 10000);
                } else {
                    feedback.textContent = "Non proprio... pensa a cosa usi per camminare! 👣";
                }
                break;
            case 3:
                if (answer === 'bottiglia' || answer === 'la bottiglia' || answer === 'bottiglia acqua' || answer === 'bottiglia dell acqua') {
                    showPopup("Esatto! Trovami vicino al fardello dell'acqua! 💧");
                    setTimeout(() => showSuccess(step), 10000);
                } else {
                    feedback.textContent = "Ripensa a cosa usi per bere... 🚰";
                }
                break;
            case 4:
                if (answer === 'frigo' || answer === 'frigorifero' || answer === 'il frigo' || answer === 'nel frigo') {
                    showPopup(`
                        <div class="final-message">
                            <h2>Congratulazioni! 🎉🎊</h2>
                            <p>Hai completato la caccia al tesoro!</p>
                            <p>Il tuo regalo ti aspetta nel frigorifero!</p>
                            <p>❤️❤️❤️</p>
                        </div>
                    `);
                } else {
                    feedback.textContent = "Quasi... pensa a dove conservi il cibo! ❄️";
                }
                break;
        }
    };

    // Success Transition Function
    function showSuccess(step) {
        const currentStep = document.getElementById(`step${step}`);
        const nextStep = document.getElementById(`step${step + 1}`);
        const levelIndicator = document.getElementById('currentLevel');

        if (currentStep && nextStep && levelIndicator) {
            currentStep.classList.remove('active');
            nextStep.classList.add('active');
            levelIndicator.textContent = step + 1;
        }
    }
});