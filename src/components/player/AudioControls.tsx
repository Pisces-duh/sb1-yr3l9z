import React from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

interface AudioControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default function AudioControls({
  isPlaying,
  onPlayPause,
  onPrevious,
  onNext,
}: AudioControlsProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <button
        onClick={onPrevious}
        className="p-2 text-slate-400 hover:text-white"
      >
        <SkipBack className="w-5 h-5" />
      </button>
      
      <button
        onClick={onPlayPause}
        className="p-3 bg-white rounded-full hover:scale-105 transition-transform"
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-black" />
        ) : (
          <Play className="w-5 h-5 text-black" />
        )}
      </button>
      
      <button
        onClick={onNext}
        className="p-2 text-slate-400 hover:text-white"
      >
        <SkipForward className="w-5 h-5" />
      </button>
    </div>
  );
}