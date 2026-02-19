export interface Block {
  id: string;
  answer: number;
  lane: number;
  y: number; // 0 to 100+ percentage
  speed: number;
  isCorrect: boolean;
  color: string;
  hasBeeped?: boolean;
}

export enum GameState {
  MENU = 'MENU',
  PLAYING = 'PLAYING',
  GAMEOVER = 'GAMEOVER'
}

export enum BeatType {
  BEAT_1 = 'BEAT_1', // Techno (Born Slippy style)
  BEAT_2 = 'BEAT_2', // New Wave (Jonge Helden style)
  BEAT_3 = 'BEAT_3', // Funk (Superstition style)
  BEAT_4 = 'BEAT_4', // Grunge (Smells Like Teen Spirit style)
  NONE = 'NONE'
}

export interface GameStats {
  score: number;
  streak: number;
  multiplier: number;
  correctAnswers: number;
  totalAttempts: number;
  strikesEarned: number;
}