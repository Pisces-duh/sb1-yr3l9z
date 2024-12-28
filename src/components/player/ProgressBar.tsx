import React from 'react';
import { formatTime } from '../../utils/formatTime';
import { calculateTimeFromClick } from '../../utils/audioUtils';

interface ProgressBarProps {
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
}

export default function ProgressBar({ currentTime, duration, onSeek }: ProgressBarProps) {
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const newTime = calculateTimeFromClick(e, duration);
    onSeek(newTime);
  };

  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="text-gray-400">{formatTime(currentTime)}</span>
      <div 
        className="flex-1 h-1 bg-gray-600 rounded-full cursor-pointer group"
        onClick={handleProgressClick}
      >
        <div 
          className="h-full bg-white group-hover:bg-green-500 rounded-full relative"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100" />
        </div>
      </div>
      <span className="text-gray-400">{formatTime(duration)}</span>
    </div>
  );
}