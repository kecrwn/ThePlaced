import { Scene } from 'phaser';
import { Player } from '../characters/Player';
import { Adelia } from '../characters/Adelia';
import { EventBus } from '../../lib/eventBus';
import { Dialogues } from '../systems/DialogueData';

export class PastScene extends Scene {
    player!: Player;
    adelia!: Adelia;
    dialogueIndex = 0;
    
    constructor() {
        super('PastScene');
    }

    create() {
        this.add.image(400, 300, 'bg_past').setScale(2);
        
        this.player = new Player(this, 100, 300);
        this.adelia = new Adelia(this, 50, 300, this.player);
        
        EventBus.on('interact', this.handleInteract, this);
        EventBus.emit('scene-change', 'Past (Primitive World)');
    }

    handleInteract() {
        if (this.dialogueIndex <= 5) {
            EventBus.emit('show-dialogue', Dialogues[this.dialogueIndex].text, Dialogues[this.dialogueIndex].speaker);
            this.dialogueIndex++;
        } else {
            EventBus.off('interact', this.handleInteract, this);
            this.scene.start('PresentScene');
        }
    }

    update() {
        this.player.update();
        this.adelia.update();
    }
}
