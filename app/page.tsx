'use client';
import dynamic from 'next/dynamic';

const PhaserGame = dynamic(() => import('../components/PhaserGame'), { ssr: false });
const GameUI = dynamic(() => import('../components/GameUI'), { ssr: false });

export default function Home() {
  return (
    <main className="w-screen h-screen bg-black overflow-hidden relative">
      <PhaserGame />
      <GameUI />
    </main>
  );
}
