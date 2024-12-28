import React, { createContext, useContext, useRef, useState } from 'react';
import type { AudioTrack } from '../types';

interface AudioContextType {
  currentTrack: AudioTrack | null;
  isPlaying: boolean;
  volume: number;
  progress: number;
  playbackSpeed: number;
  play: (track: AudioTrack) => void;
  pause: () => void;
  setVolume: (value: number) => void;
  setPlaybackSpeed: (speed: number) => void;
  seekTo: (time: number) => void;
}

const AudioContext = createContext<AudioContextType | null>(null);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTrack, setCurrentTrack] = useState<AudioTrack | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  const play = (track: AudioTrack) => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    if (currentTrack?.id !== track.id) {
      audioRef.current.src = track.audioUrl;
      setCurrentTrack(track);
    }

    audioRef.current.play();
    setIsPlaying(true);
  };

  const pause = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const handleVolumeChange = (value: number) => {
    if (audioRef.current) {
      audioRef.current.volume = value;
      setVolume(value);
    }
  };

  const handlePlaybackSpeedChange = (speed: number) => {
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
      setPlaybackSpeed(speed);
    }
  };

  const seekTo = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setProgress(time);
    }
  };

  return (
    <AudioContext.Provider
      value={{
        currentTrack,
        isPlaying,
        volume,
        progress,
        playbackSpeed,
        play,
        pause,
        setVolume: handleVolumeChange,
        setPlaybackSpeed: handlePlaybackSpeedChange,
        seekTo,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};