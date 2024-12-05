class AudioController {
    constructor() {
        this.songs = [
            new Audio('music_fx_generate_a_25second_christmas_melody_in_the.mp3'),
            new Audio('music_fx_generate_a_25second_christmas_melody_in_the (1).mp3'),
            new Audio('music_fx_generate_a_25second_christmas_melody_in_the (2).mp3')
        ];
        
        this.currentSongIndex = 0;
        this.isPlaying = false;

        // Imposta il volume per tutte le canzoni
        this.songs.forEach(song => {
            song.volume = 0.3;
        });

        // Gestisci l'alternanza delle canzoni
        this.songs.forEach(song => {
            song.addEventListener('ended', () => {
                this.playNextSong();
            });
        });
    }

    playMusic() {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.songs[this.currentSongIndex].play().catch(error => {
                console.log("Errore nella riproduzione:", error);
            });
        }
    }

    playNextSong() {
        // Ferma la canzone corrente
        this.songs[this.currentSongIndex].pause();
        this.songs[this.currentSongIndex].currentTime = 0;
        
        // Passa alla prossima canzone
        this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
        
        // Riproduci la nuova canzone
        this.songs[this.currentSongIndex].play().catch(error => {
            console.log("Errore nella riproduzione:", error);
        });
    }
}
