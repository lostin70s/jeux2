import Phaser from "phaser";

export default class extends Phaser.Sprite {
  constructor({ cursors, game, x, y, asset }) {
    super(game, x, y, asset);
    this.cursors = cursors;
    this.anchor.setTo(0.5);
    this.speed = 100;
    this.frame = 8;

    //game.camera.follow(this);
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.animations.add("left", [0, 1, 2, 3], 4, true);
    this.animations.add("right", [4, 5, 6, 7], 4, true);
  }

  update() {
    var speedx = 0;
    var speedy = 0;
    if (
      !this.cursors.left.isDown &&
      !this.cursors.right.isDown &&
      !this.cursors.up.isDown &&
      !this.cursors.down.isDown
    ) {
      this.animations.stop();
      this.frame = 8;
    }
    if (this.cursors.left.isDown) {
      speedx -= 100;
      this.animations.play("left");
    }
    if (this.cursors.right.isDown) {
      speedx += 100;
      this.animations.play("right");
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
