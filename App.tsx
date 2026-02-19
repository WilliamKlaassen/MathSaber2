import React, { useState } from 'react';
import { GameState, GameStats, BeatType } from './types';
import Menu from './components/Menu';
import GameCanvas from './components/GameCanvas';
import GameOver from './components/GameOver';

const App: React.FC = () => {
    const [gameState, setGameState] = useState<GameState>(GameState.MENU);
    const [selectedTables, setSelectedTables] = useState<number[]>([]);
    const [baseSpeed, setBaseSpeed] = useState<number>(0.15);
    const [laneCount, setLaneCount] = useState<number>(3);
    const [voiceEnabled, setVoiceEnabled] = useState<boolean>(true);
    const [selectedBeat, setSelectedBeat] = useState<BeatType>(BeatType.BEAT_1);
    const [spawnShift, setSpawnShift] = useState<number>(3);
    const [stats, setStats] = useState<GameStats>({ score: 0, streak: 0, multiplier: 1, correctAnswers: 0, totalAttempts: 0, strikesEarned: 0 });

    const startGame = (tables: number[]) => {
        setSelectedTables(tables);
        setStats({ score: 0, streak: 0, multiplier: 1, correctAnswers: 0, totalAttempts: 0, strikesEarned: 0 });
        setGameState(GameState.PLAYING);
    };

    const endGame = (finalStats: GameStats) => {
        setStats(finalStats);
        setGameState(GameState.GAMEOVER);
    };

    const returnToMenu = () => {
        setGameState(GameState.MENU);
    };

    return (
        <div className="min-h-screen w-full bg-[#050505] text-white overflow-hidden flex flex-col items-center justify-center relative">
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-600 blur-[150px] rounded-full" />
            </div>
            <main className="relative z-10 w-full h-full max-w-full flex flex-col items-center">
                {gameState === GameState.MENU && (
                    <Menu onStart={startGame} baseSpeed={baseSpeed} setBaseSpeed={setBaseSpeed} laneCount={laneCount} setLaneCount={setLaneCount} voiceEnabled={voiceEnabled} setVoiceEnabled={setVoiceEnabled} selectedBeat={selectedBeat} setSelectedBeat={setSelectedBeat} spawnShift={spawnShift} setSpawnShift={setSpawnShift} initialSelectedTables={selectedTables} />
                )}
                {gameState === GameState.PLAYING && (
                    <GameCanvas tables={selectedTables} baseSpeed={baseSpeed} setBaseSpeed={setBaseSpeed} laneCount={laneCount} voiceEnabled={voiceEnabled} selectedBeat={selectedBeat} setSelectedBeat={setSelectedBeat} spawnShift={spawnShift} setSpawnShift={setSpawnShift} onEnd={endGame} />
                )}
                {gameState === GameState.GAMEOVER && (
                    <GameOver stats={stats} onRestart={() => startGame(selectedTables)} onHome={returnToMenu} />
                )}
            </main>
        </div>
    );
};

export default App;