import dynamic from 'next/dynamic';
import GameUI from '../components/GameUI';

const PhaserGame = dynamic(() => import('../components/PhaserGame'), { ssr: false });

export default function Home() {
  return (
    <main className="w-screen h-screen bg-black overflow-hidden relative">
      <PhaserGame />
      <GameUI />
    </main>
  );
}
