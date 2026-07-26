import * as Phaser from 'phaser';

export class Adelia extends Phaser.Physics.Arcade.Sprite {
    target: Phaser.GameObjects.Sprite;
    isMad: boolean = false;

    constructor(scene: Phaser.Scene, x: number, y: number, target: Phaser.GameObjects.Sprite) {
        super(scene, x, y, 'adelia');
        this.target = target;
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setScale(0.1);
        this.setCollideWorldBounds(true);
    }

    update() {
        if (this.isMad) {
            this.setVelocity(0);
            return;
        }

        const distance = Phaser.Math.Distance.Between(this.x, this.y, this.target.x, this.target.y);
        
        if (distance > 60) {
            this.scene.physics.moveToObject(this, this.target, 120);
        } else {
            this.setVelocity(0);
        }
    }
}
