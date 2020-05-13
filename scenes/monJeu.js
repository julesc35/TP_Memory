  
var config = {
  width: 800,
  height: 600,
  physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0},
            debug: false
        }
    },
    scene: [
    //preload,
    jeu]
  }

var game = new Phaser.Game(config);