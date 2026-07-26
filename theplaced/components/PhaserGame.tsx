'use client';
import { useEffect, useRef } from 'react';
import StartGame from '../game/main';

export default function PhaserGame() {
    const gameRef = useRef<any>(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && !gameRef.current) {
            gameRef.current = StartGame('game-container');
        }

        return () => {
            if (gameRef.current) {
                gameRef.current.destroy(true);
                gameRef.current = null;
            }
        };
    }, []);

    return <div id="game-container" className="w-full h-full flex justify-center items-center bg-black overflow-hidden relative"></div>;
}
