import React, { useState, useEffect } from 'react';
import { useSettingsStore } from './stores/settingsStore';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import AudioPlayer from './components/player/AudioPlayer';
import MainContent from './components/layout/MainContent';

export default function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const { darkMode } = useSettingsStore();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900">
      <Navbar onSectionChange={setCurrentSection} />
      
      <div className="flex">
        <Sidebar currentSection={currentSection} onSectionChange={setCurrentSection} />
        
        <main className="flex-1 p-8 pb-32">
          <div className="max-w-7xl mx-auto">
            <MainContent currentSection={currentSection} />
          </div>
        </main>
      </div>

      <AudioPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </div>
  );
}