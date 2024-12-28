import { useState, useEffect, useRef } from 'react';

interface UseAudioPlayerProps {
  audioUrl?: string;
  onEnded?: () => void;
}

export function useAudioPlayer({ audioUrl, onEnded }: UseAudioPlayerProps = {}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    const audio = audioRef.current;

    audio.addEventListener('timeupdate', () => setCurrentTime(audio.currentTime));
    audio.addEventListener('loadedmetadata', () => setDuration(audio.duration));
    audio.addEventListener('ended', () => {
      setIsPlaying(false);
      onEnded?.();
    });

    if (audioUrl) {
      audio.src = audioUrl;
      audio.load();
    }

    return () => {
      audio.removeEventListener('timeupdate', () => setCurrentTime(audio.currentTime));
      audio.removeEventListener('loadedmetadata', () => setDuration(audio.duration));
      audio.removeEventListener('ended', () => {
        setIsPlaying(false);
        onEnded?.();
      });
    };
  }, [audioUrl, onEnded]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const seek = (time: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const setAudioVolume = (value: number) => {
    if (!audioRef.current) return;
    audioRef.current.volume = value;
    setVolume(value);
  };

  return {
    isPlaying,
    currentTime,
    duration,
    volume,
    togglePlay,
    seek,
    setVolume: setAudioVolume,
  };
}