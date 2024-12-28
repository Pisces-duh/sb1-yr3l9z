import React from 'react';
import { Pause, Play, SkipBack, SkipForward, Shuffle, Repeat } from 'lucide-react';

interface PlayerControlsProps {
  isPlaying: boolean;
  isShuffling: boolean;
  repeatMode: 'off' | 'all' | 'one';
  onPlayPause: () => void;
  onShuffle: () => void;
  onRepeat: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default function PlayerControls({
  isPlaying,
  isShuffling,
  repeatMode,
  onPlayPause,
  onShuffle,
  onRepeat,
  onPrevious,
  onNext,
}: PlayerControlsProps) {
  return (
    <div className="flex items-center justify-center gap-6">
      <button 
        onClick={onShuffle}
        className={`text-sm ${isShuffling ? 'text-green-500' : 'text-gray-400 hover:text-white'}`}
      >
        <Shuffle className="w-4 h-4" />
      </button>
      
      <button 
        onClick={onPrevious}
        className="text-gray-400 hover:text-white"
      >
        <SkipBack className="w-5 h-5" />
      </button>
      
      <button 
        className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"
        onClick={onPlayPause}
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </button>
      
      <button 
        onClick={onNext}
        className="text-gray-400 hover:text-white"
      >
        <SkipForward className="w-5 h-5" />
      </button>
      
      <button 
        onClick={onRepeat}
        className={`text-sm ${repeatMode !== 'off' ? 'text-green-500' : 'text-gray-400 hover:text-white'}`}
      >
        <Repeat className="w-4 h-4" />
        {repeatMode === 'one' && <span className="text-[10px] absolute">1</span>}
      </button>
    </div>
  );
}