import React from 'react';
import { SUPPORTED_BIBLES } from '../../config/bibles';

interface NowPlayingProps {
  selectedBook: string;
  selectedChapter: number;
  version: string;
}

export default function NowPlaying({ selectedBook, selectedChapter, version }: NowPlayingProps) {
  return (
    <div className="flex items-center gap-4 min-w-[180px]">
      <img
        src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=56&h=56&fit=crop"
        alt="Bible"
        className="w-14 h-14 rounded object-cover"
      />
      <div>
        <h3 className="font-medium text-sm text-white">
          {selectedBook} {selectedChapter}
        </h3>
        <p className="text-xs text-gray-400">
          {SUPPORTED_BIBLES[version].name}
        </p>
      </div>
    </div>
  );
}