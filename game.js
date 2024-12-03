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
        // Nascondi il pulsante
        startButton.classList.add('hidden');
        
        // Mostra subito il contenuto
        content.classList.add('visible');
        document.getElementById('step1').classList.add('active');
    };

    // Game Progress Tracking
    let currentStep = 1;

    // Answer Verification Function
    window.checkAnswer = function(step) {
        const answer = document.getElementById(`answer${step}`).value.toLowerCase().trim();
        const feedback = document.getElementById(`feedback${step}`);
        
        switch(step) {
            case 1:
                if (answer === 't' || answer === 'lettera t' || answer === 'la t' || answer === 'la lettera t') {
                    showSuccess(step);
                } else {
                    feedback.textContent = "Mmm... non proprio. Prova ancora!";
                }
                break;
            case 2:
                if (answer === "2042") {
                    showSuccess(step);
                } else {
                    feedback.textContent = "Non è questo il numero... Riprova!";
                }
                break;
            case 3:
                if (answer.includes('tazza') || answer.includes('caffe') || answer.includes('sotto')) {
                    showSuccess(step);
                } else {
                    feedback.textContent = "Non è quello il posto giusto... Ripensa al caffè!";
                }
                break;
            case 4:
                if (answer.includes('frigo') || answer.includes('freezer') || answer.includes('congelatore')) {
                    feedback.innerHTML = "Congratulazioni! 🎉🎊 Hai completato la caccia al tesoro! Ora vai a cercare il tuo regalo nel freezer, dietro al gelato alla vaniglia!";
                } else {
                    feedback.textContent = "Quasi... pensa a un posto molto freddo!";
                }
                break;
        }
    };

    // Success Transition Function
    function showSuccess(step) {
        const feedback = document.getElementById(`feedback${step}`);
        feedback.innerHTML = "Corretto! <span class='success-emoji'>🎉</span>";
        
        setTimeout(() => {
            document.getElementById(`step${step}`).classList.remove('active');
            document.getElementById(`step${step + 1}`).classList.add('active');
            document.getElementById('currentLevel').textContent = step + 1;
        }, 1500);
    }
});