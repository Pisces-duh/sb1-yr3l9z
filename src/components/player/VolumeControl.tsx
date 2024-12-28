import React from 'react';
import { Volume2, Volume1, VolumeX } from 'lucide-react';
import { calculateVolumeFromClick } from '../../utils/audioUtils';

interface VolumeControlProps {
  volume: number;
  onVolumeChange: (volume: number) => void;
  onMute: () => void;
}

export default function VolumeControl({ volume, onVolumeChange, onMute }: VolumeControlProps) {
  const VolumeIcon = volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2;

  const handleVolumeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const newVolume = calculateVolumeFromClick(e);
    onVolumeChange(newVolume);
  };

  return (
    <div className="flex items-center gap-2">
      <button 
        onClick={onMute}
        className="text-gray-400 hover:text-white"
      >
        <VolumeIcon className="w-5 h-5" />
      </button>
      <div 
        className="w-24 h-1 bg-gray-600 rounded-full cursor-pointer group"
        onClick={handleVolumeClick}
      >
        <div 
          className="h-full bg-white group-hover:bg-green-500 rounded-full relative"
          style={{ width: `${volume * 100}%` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100" />
        </div>
      </div>
    </div>
  );
}