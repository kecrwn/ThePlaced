'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EventBus } from '../lib/eventBus';
import { supabase } from '../lib/supabaseClient';

export default function GameUI() {
    const [dialogue, setDialogue] = useState<{text: string, speaker: string} | null>(null);
    const [choices, setChoices] = useState<{id: number, text: string}[]>([]);
    const [sceneName, setSceneName] = useState('Loading...');
    const [showInventory, setShowInventory] = useState(false);

    useEffect(() => {
        const handleDialogue = (text: string, speaker: string) => {
            setDialogue({ text, speaker });
        };
        const handleChoices = (opts: any[]) => {
            setChoices(opts);
        };
        const handleSceneChange = (name: string) => {
            setSceneName(name);
            saveProgress(name);
        };
        const toggleInventory = () => setShowInventory(prev => !prev);

        EventBus.on('show-dialogue', handleDialogue);
        EventBus.on('show-choices', handleChoices);
        EventBus.on('scene-change', handleSceneChange);
        EventBus.on('toggle-inventory', toggleInventory);

        return () => {
            EventBus.off('show-dialogue', handleDialogue);
            EventBus.off('show-choices', handleChoices);
            EventBus.off('scene-change', handleSceneChange);
            EventBus.off('toggle-inventory', toggleInventory);
        };
    }, []);

    const saveProgress = async (scene: string) => {
        await supabase.from('progress').upsert([{ id: 1, current_scene: scene }]);
    };

    const handleChoiceClick = async (id: number, text: string) => {
        EventBus.emit('choice-made', id);
        setChoices([]);
        await supabase.from('choices').insert([{ choice_id: id, choice_text: text }]);
    };

    return (
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-between">
            {/* Top Bar */}
            <div className="p-4 flex justify-between items-start">
                <div className="text-white font-mono bg-black/50 p-2 rounded">{sceneName}</div>
                <div className="text-white font-mono bg-black/50 p-2 rounded">Press 'E' to interact | 'I' for Inventory</div>
            </div>

            {/* Inventory */}
            <AnimatePresence>
                {showInventory && (
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="absolute right-4 top-20 bg-gray-900 border border-gray-700 rounded p-4 text-white pointer-events-auto"
                    >
                        <h3 className="font-bold mb-2">Inventory</h3>
                        <div className="flex gap-2">
                            <div className="w-12 h-12 bg-gray-800 border border-gray-600 rounded flex items-center justify-center">
                                <img src="/assets/asset6.png" className="w-8 h-8 object-contain" alt="item" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bottom Bar: Choices & Dialogue */}
            <div className="p-8 w-full max-w-4xl mx-auto flex flex-col gap-4">
                <AnimatePresence>
                    {choices.length > 0 && (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="flex flex-col gap-2 pointer-events-auto items-end"
                        >
                            {choices.map(c => (
                                <button 
                                    key={c.id} 
                                    onClick={() => handleChoiceClick(c.id, c.text)}
                                    className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded shadow transition font-bold"
                                >
                                    {c.text}
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {dialogue && (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="bg-black/80 border border-gray-600 rounded-lg p-6 shadow-2xl backdrop-blur-sm pointer-events-auto"
                        >
                            <h2 className="text-pink-400 font-bold text-xl mb-2">{dialogue.speaker}</h2>
                            <p className="text-white text-lg">{dialogue.text}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
