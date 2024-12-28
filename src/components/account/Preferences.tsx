import React from 'react';
import Select from '../common/Select';
import { SUPPORTED_BIBLES } from '../../config/bibles';

interface PreferencesProps {
  preferences: {
    defaultVersion: string;
    defaultVoice: string;
    notifications: boolean;
  };
  onUpdate: (preferences: any) => void;
}

export default function Preferences({ preferences, onUpdate }: PreferencesProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    onUpdate({ ...preferences, [name]: newValue });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">
          Reading Preferences
        </h3>
        <div className="space-y-4">
          <Select
            label="Default Bible Version"
            name="defaultVersion"
            value={preferences.defaultVersion}
            onChange={handleChange}
            options={Object.entries(SUPPORTED_BIBLES).map(([code, bible]) => ({
              value: code,
              label: `${bible.name} (${bible.language})`,
            }))}
          />

          <Select
            label="Default Voice"
            name="defaultVoice"
            value={preferences.defaultVoice}
            onChange={handleChange}
            options={[
              { value: 'male', label: 'Male (Default)' },
              { value: 'female', label: 'Female' },
              { value: 'dramatic', label: 'Dramatic' },
            ]}
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">
          Notification Settings
        </h3>
        <div className="space-y-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="notifications"
              checked={preferences.notifications}
              onChange={handleChange}
              className="rounded border-slate-300 dark:border-slate-600"
            />
            <span className="text-slate-700 dark:text-slate-300">
              Daily Reading Reminders
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}