import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useSettingsStore } from '../../stores/settingsStore';

export default function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useSettingsStore();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
    >
      {darkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>
  );
}