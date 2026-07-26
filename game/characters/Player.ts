import Phaser from 'phaser';
import { EventBus } from '../../lib/eventBus';

export class Player extends Phaser.Physics.Arcade.Sprite {
    keys: any;
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'player');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setScale(0.1);
        this.setCollideWorldBounds(true);
        this.keys = scene.input.keyboard?.addKeys('W,A,S,D,UP,DOWN,LEFT,RIGHT,E,I');
    }

    update() {
        const speed = 150;
        this.setVelocity(0);

        if (this.keys.A.isDown || this.keys.LEFT.isDown) {
            this.setVelocityX(-speed);
        } else if (this.keys.D.isDown || this.keys.RIGHT.isDown) {
            this.setVelocityX(speed);
        }

        if (this.keys.W.isDown || this.keys.UP.isDown) {
            this.setVelocityY(-speed);
        } else if (this.keys.S.isDown || this.keys.DOWN.isDown) {
            this.setVelocityY(speed);
        }
        
        if (Phaser.Input.Keyboard.JustDown(this.keys.I)) {
            EventBus.emit('toggle-inventory');
        }
        
        if (Phaser.Input.Keyboard.JustDown(this.keys.E)) {
            EventBus.emit('interact');
        }
    }
}
