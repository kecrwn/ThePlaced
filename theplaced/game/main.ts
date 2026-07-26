import { BootScene } from './scenes/BootScene';
import { PastScene } from './scenes/PastScene';
import { PresentScene } from './scenes/PresentScene';
import { FutureScene } from './scenes/FutureScene';
import Phaser from 'phaser';

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    backgroundColor: '#000000',
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [
        BootScene,
        PastScene,
        PresentScene,
        FutureScene
    ]
};

const StartGame = (parent: string) => {
    return new Phaser.Game({...config, parent});
}

export default StartGame;
