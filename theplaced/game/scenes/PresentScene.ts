import { Scene } from 'phaser';
import { Player } from '../characters/Player';
import { Adelia } from '../characters/Adelia';
import { EventBus } from '../../lib/eventBus';
import { Dialogues } from '../systems/DialogueData';

export class PresentScene extends Scene {
    player!: Player;
    adelia!: Adelia;
    dialogueIndex = 6;
    isMadScenario = false;
    
    constructor() {
        super('PresentScene');
    }

    create() {
        this.add.image(400, 300, 'bg_present').setScale(2);
        
        this.player = new Player(this, 100, 300);
        this.adelia = new Adelia(this, 50, 300, this.player);
        
        EventBus.on('interact', this.handleInteract, this);
        EventBus.emit('scene-change', 'Present (2026 Modern World)');
        EventBus.on('choice-made', this.handleChoice, this);
    }

    handleInteract() {
        if (this.dialogueIndex <= 9) {
            EventBus.emit('show-dialogue', Dialogues[this.dialogueIndex].text, Dialogues[this.dialogueIndex].speaker);
            this.dialogueIndex++;
            if (this.dialogueIndex === 10) {
                this.isMadScenario = true;
                this.adelia.isMad = true;
                EventBus.emit('show-dialogue', 'Adelia stopped following you.', 'System');
                setTimeout(() => {
                    EventBus.emit('show-choices', [
                        { id: 1, text: 'Approach gently' },
                        { id: 2, text: 'Wait' },
                        { id: 3, text: 'Joke' }
                    ]);
                }, 2000);
            }
        } else if (!this.isMadScenario && this.dialogueIndex <= 12) {
            EventBus.emit('show-dialogue', Dialogues[this.dialogueIndex].text, Dialogues[this.dialogueIndex].speaker);
            this.dialogueIndex++;
            if (this.dialogueIndex > 12) {
                EventBus.off('interact', this.handleInteract, this);
                EventBus.off('choice-made', this.handleChoice, this);
                this.scene.start('FutureScene');
            }
        }
    }

    handleChoice(choiceId: number) {
        if (this.isMadScenario) {
            if (choiceId === 1) {
                EventBus.emit('show-dialogue', 'She smiles slightly. You fixed the situation.', 'System');
                this.adelia.isMad = false;
                this.isMadScenario = false;
            } else if (choiceId === 2) {
                EventBus.emit('show-dialogue', 'She waits patiently but seems a bit distant.', 'System');
                this.adelia.isMad = false;
                this.isMadScenario = false;
            } else {
                EventBus.emit('show-dialogue', 'She rolled her eyes. Not the best time.', 'System');
                this.adelia.isMad = false;
                this.isMadScenario = false;
            }
        }
    }

    update() {
        this.player.update();
        this.adelia.update();
    }
}
