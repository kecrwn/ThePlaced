import { Scene } from 'phaser';
import { Player } from '../characters/Player';
import { Adelia } from '../characters/Adelia';
import { EventBus } from '../../lib/eventBus';
import { Dialogues } from '../systems/DialogueData';

export class FutureScene extends Scene {
    player!: Player;
    adelia!: Adelia;
    dialogueIndex = 13;
    
    constructor() {
        super('FutureScene');
    }

    create() {
        this.add.image(400, 300, 'bg_future').setScale(2);
        
        this.player = new Player(this, 100, 300);
        this.adelia = new Adelia(this, 50, 300, this.player);
        
        EventBus.on('interact', this.handleInteract, this);
        EventBus.emit('scene-change', 'Future (Cyberpunk World)');
    }

    handleInteract() {
        if (this.dialogueIndex <= 15) {
            EventBus.emit('show-dialogue', Dialogues[this.dialogueIndex].text, Dialogues[this.dialogueIndex].speaker);
            this.dialogueIndex++;
        } else {
            EventBus.emit('show-dialogue', 'Thank you for playing ThePlaced.', 'System');
        }
    }

    update() {
        this.player.update();
        this.adelia.update();
    }
}
