import React, { useState } from 'react';
import { useAudioPlayer } from '../../hooks/useAudioPlayer';
import PlayerControls from './PlayerControls';
import ProgressBar from './ProgressBar';
import VolumeControl from './VolumeControl';
import NowPlaying from './NowPlaying';
import { Maximize2, Minimize2 } from 'lucide-react';

export default function AudioPlayer() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [repeatMode, setRepeatMode] = useState<'off' | 'all' | 'one'>('off');
  const [selectedVersion, setSelectedVersion] = useState('KJV');
  const [selectedBook, setSelectedBook] = useState('Genesis');
  const [selectedChapter, setSelectedChapter] = useState(1);

  const {
    isPlaying,
    currentTime,
    duration,
    volume,
    togglePlay,
    seek,
    setVolume,
  } = useAudioPlayer();

  const toggleRepeat = () => {
    const modes: ('off' | 'all' | 'one')[] = ['off', 'all', 'one'];
    const currentIndex = modes.indexOf(repeatMode);
    setRepeatMode(modes[(currentIndex + 1) % modes.length]);
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black to-gray-900 text-white h-24">
        <div className="max-w-7xl mx-auto px-6 py-4 h-full flex items-center justify-between gap-4">
          <NowPlaying
            selectedBook={selectedBook}
            selectedChapter={selectedChapter}
            version={selectedVersion}
          />

          <div className="flex-1 max-w-2xl">
            <PlayerControls
              isPlaying={isPlaying}
              isShuffling={isShuffling}
              repeatMode={repeatMode}
              onPlayPause={togglePlay}
              onShuffle={() => setIsShuffling(!isShuffling)}
              onRepeat={toggleRepeat}
              onPrevious={() => {}}
              onNext={() => {}}
            />
            <ProgressBar
              currentTime={currentTime}
              duration={duration}
              onSeek={seek}
            />
          </div>

          <div className="flex items-center gap-4">
            <VolumeControl
              volume={volume}
              onVolumeChange={setVolume}
              onMute={() => setVolume(0)}
            />
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-400 hover:text-white"
            >
              {isExpanded ? (
                <Minimize2 className="w-5 h-5" />
              ) : (
                <Maximize2 className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          {/* Expanded player content */}
        </div>
      )}
    </>
  );
}