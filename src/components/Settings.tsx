import React from 'react';
import { Moon, Sun, Volume2, Bell, Type } from 'lucide-react';
import { useSettingsStore } from '../stores/settingsStore';
import { SUPPORTED_BIBLES } from '../config/bibles';

export default function Settings() {
  const settings = useSettingsStore();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-800">Settings</h2>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-slate-800">Bible Version</h3>
          <select
            value={settings.version}
            onChange={(e) => settings.setVersion(e.target.value as keyof typeof SUPPORTED_BIBLES)}
            className="w-full p-2 border border-slate-200 rounded-lg"
          >
            {Object.entries(SUPPORTED_BIBLES).map(([code, bible]) => (
              <option key={code} value={code}>
                {bible.name} ({bible.language})
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-slate-800">Audio Settings</h3>
          <div className="flex items-center gap-4">
            <Volume2 className="w-5 h-5 text-slate-600" />
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={settings.playbackSpeed}
              onChange={(e) => settings.setPlaybackSpeed(parseFloat(e.target.value))}
              className="flex-1"
            />
            <span className="text-sm text-slate-600">{settings.playbackSpeed}x</span>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-slate-800">Appearance</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {settings.darkMode ? (
                <Moon className="w-5 h-5 text-slate-600" />
              ) : (
                <Sun className="w-5 h-5 text-slate-600" />
              )}
              <span>Dark Mode</span>
            </div>
            <button
              onClick={settings.toggleDarkMode}
              className={`w-12 h-6 rounded-full transition-colors ${
                settings.darkMode ? 'bg-indigo-600' : 'bg-slate-200'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform ${
                  settings.darkMode ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Type className="w-5 h-5 text-slate-600" />
              <span>Font Size</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => settings.setFontSize(Math.max(12, settings.fontSize - 2))}
                className="p-2 rounded-lg hover:bg-slate-100"
              >
                A-
              </button>
              <span className="w-8 text-center">{settings.fontSize}</span>
              <button
                onClick={() => settings.setFontSize(Math.min(24, settings.fontSize + 2))}
                className="p-2 rounded-lg hover:bg-slate-100"
              >
                A+
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-slate-800">Notifications</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-slate-600" />
              <span>Daily Reminders</span>
            </div>
            <button
              onClick={settings.toggleNotifications}
              className={`w-12 h-6 rounded-full transition-colors ${
                settings.notifications ? 'bg-indigo-600' : 'bg-slate-200'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform ${
                  settings.notifications ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}