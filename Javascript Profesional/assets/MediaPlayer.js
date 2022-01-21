
function MediaPlayer(config){
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initiPlungins();
}

MediaPlayer.prototype._initiPlungins = function(){
    this.plugins.forEach(plugin =>{
        plugin.run(this)
    })
}


MediaPlayer.prototype.play = function(){
    (this.media.paused)
        ? this.media.play()
        : this.media.pause()
}

MediaPlayer.prototype.sound = function(){
    (this.media.muted)
        ? this.media.muted = false
        : this.media.muted = true
}

MediaPlayer.prototype.muted = function(){
    this.media.muted = true
}


export default MediaPlayer;