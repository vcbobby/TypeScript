class MediaPlayer {
    media: HTMLMediaElement;
    pluggins: Array<any>;
    
    constructor(config) {
        this.media = config.el;
        this.pluggins = config.pluggins || [];
        this.initPluggins();
    }
    private initPluggins() {
        this.pluggins.forEach(plugin => {
            plugin.run(this);
        });
    }
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    togglePlay() {
        if (this.media.paused) {
            this.play();
        } else {
            this.pause();
        }
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
    toggleMute() {
        if (this.media.muted === false) {
            this.media.muted = true;
        } else {
            this.media.muted = false;
        }
    }
}


export default MediaPlayer;