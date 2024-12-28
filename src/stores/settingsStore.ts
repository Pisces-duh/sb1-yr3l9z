import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { SUPPORTED_BIBLES } from '../config/bibles';

interface SettingsState {
  version: keyof typeof SUPPORTED_BIBLES;
  narrator: string;
  playbackSpeed: number;
  autoplay: boolean;
  darkMode: boolean;
  fontSize: number;
  notifications: boolean;
  setVersion: (version: keyof typeof SUPPORTED_BIBLES) => void;
  setNarrator: (narrator: string) => void;
  setPlaybackSpeed: (speed: number) => void;
  toggleAutoplay: () => void;
  toggleDarkMode: () => void;
  setFontSize: (size: number) => void;
  toggleNotifications: () => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      version: 'KJV',
      narrator: 'Default',
      playbackSpeed: 1,
      autoplay: false,
      darkMode: false,
      fontSize: 16,
      notifications: true,
      setVersion: (version) => set({ version }),
      setNarrator: (narrator) => set({ narrator }),
      setPlaybackSpeed: (speed) => set({ playbackSpeed: speed }),
      toggleAutoplay: () => set((state) => ({ autoplay: !state.autoplay })),
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
      setFontSize: (size) => set({ fontSize: size }),
      toggleNotifications: () => set((state) => ({ notifications: !state.notifications })),
    }),
    {
      name: 'bible-settings',
    }
  )
);