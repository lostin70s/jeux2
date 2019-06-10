import Phaser from "phaser";

export default class extends Phaser.Sprite {
  constructor({ cursors, game, x, y, asset }) {
    super(game, x, y, asset);
    this.cursors = cursors;
    this.anchor.setTo(0.5);
    this.speed = 100;

    //game.camera.follow(this);
    game.physics.enable(this, Phaser.Physics.ARCADE);
  }

  update() {
    var speedx = 0;
    var speedy = 0;
    if (this.cursors.left.isDown) {
      speedx -= 100;
    }
    if (this.cursors.right.isDown) {
      speedx += 100;
    }
    if (this.cursors.up.isDown) {
      speedy -= 100;
    }
    if (this.cursors.down.isDown) {
      speedy += 100;
    }
    this.body.velocity.x = speedx;
    this.body.velocity.y = speedy;
  }
}
