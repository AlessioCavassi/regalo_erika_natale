// Tema Natalizio Globale - Funzioni JavaScript

// Crea fiocchi di neve dinamici
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.innerHTML = '❄';
    document.body.appendChild(snowflake);

    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}

// Avvia la neve
function startSnowfall() {
    setInterval(createSnowflake, 200);
}

// Aggiungi luci natalizie
function addChristmasLights() {
    const lights = document.createElement('div');
    lights.className = 'christmas-lights';
    document.body.insertBefore(lights, document.body.firstChild);
}

// Aggiungi alberi di Natale
function addChristmasTrees() {
    const leftTree = document.createElement('div');
    leftTree.className = 'christmas-tree left';
    
    const rightTree = document.createElement('div');
    rightTree.className = 'christmas-tree right';
    
    document.body.appendChild(leftTree);
    document.body.appendChild(rightTree);
}

// Funzione per creare un suono natalizio
function playChristmasSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Sequenza di note più armoniosa ispirata ai classici natalizi
    const christmasNotes = [
        { frequency: 523.25, duration: 0.3 },   // Do
        { frequency: 587.33, duration: 0.2 },   // Re
        { frequency: 659.25, duration: 0.4 },   // Mi
        { frequency: 698.46, duration: 0.3 },   // Fa
        { frequency: 783.99, duration: 0.3 },   // Sol
        { frequency: 880.00, duration: 0.2 },   // La
        { frequency: 987.77, duration: 0.5 }    // Si
    ];

    // Funzione per creare un suono più ricco
    function createRichSound(frequency, duration) {
        const oscillator1 = audioContext.createOscillator();
        const oscillator2 = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator1.type = 'sine';
        oscillator2.type = 'triangle';
        
        oscillator1.frequency.setValueAtTime(frequency, audioContext.currentTime);
        oscillator2.frequency.setValueAtTime(frequency * 1.01, audioContext.currentTime);

        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.5, audioContext.currentTime + 0.1);
        gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + duration);
        gainNode.gain.setValueAtTime(0, audioContext.currentTime + duration);

        oscillator1.connect(gainNode);
        oscillator2.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator1.start(audioContext.currentTime);
        oscillator2.start(audioContext.currentTime);
        oscillator1.stop(audioContext.currentTime + duration);
        oscillator2.stop(audioContext.currentTime + duration);
    }

    christmasNotes.forEach((note, index) => {
        setTimeout(() => {
            createRichSound(note.frequency, note.duration);
        }, index * 300);
    });

    // Effetto finale: campane natalizie
    setTimeout(() => {
        const finalBell = audioContext.createOscillator();
        const bellGain = audioContext.createGain();

        finalBell.type = 'sine';
        finalBell.frequency.setValueAtTime(523.25, audioContext.currentTime);
        
        bellGain.gain.setValueAtTime(0.7, audioContext.currentTime);
        bellGain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 1);

        finalBell.connect(bellGain);
        bellGain.connect(audioContext.destination);

        finalBell.start();
        finalBell.stop(audioContext.currentTime + 1);
    }, christmasNotes.length * 300 + 100);
}

// Inizializza tutto il tema natalizio
function initChristmasTheme() {
    startSnowfall();
    addChristmasLights();
    addChristmasTrees();
}

// Esegui quando il DOM è completamente caricato
document.addEventListener('DOMContentLoaded', initChristmasTheme);
