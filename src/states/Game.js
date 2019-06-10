/* globals __DEV__ */
import Phaser from "phaser";
import Mushroom from "../sprites/Mushroom";
import lang from "../lang";

export default class extends Phaser.State {
  init() {}
  preload() {}

  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    let cursors = this.game.input.keyboard.createCursorKeys();

    this.mushroom = new Mushroom({
      cursors: cursors,
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: "stickG"
    });

    this.game.add.existing(this.mushroom);
  }

  render() {
    if (__DEV__) {
      //this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }
}
