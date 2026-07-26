import { Scene } from 'phaser';

export class BootScene extends Scene {
    constructor() {
        super('BootScene');
    }

    preload() {
        // Loading assets
        this.load.image('player', '/assets/asset1.png');
        this.load.image('adelia', '/assets/asset2.png');
        this.load.image('bg_past', '/assets/asset3.png');
        this.load.image('bg_present', '/assets/asset4.png');
        this.load.image('bg_future', '/assets/asset5.png');
        this.load.image('item', '/assets/asset6.png');
    }

    create() {
        this.scene.start('PastScene');
    }
}
