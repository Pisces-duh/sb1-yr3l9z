import React from 'react';
import { SUPPORTED_BIBLES } from '../../config/bibles';

interface BibleVersionSelectorProps {
  currentVersion: string;
  onVersionChange: (version: string) => void;
}

export default function BibleVersionSelector({ currentVersion, onVersionChange }: BibleVersionSelectorProps) {
  return (
    <select
      value={currentVersion}
      onChange={(e) => onVersionChange(e.target.value)}
      className="px-3 py-2 bg-transparent dark:bg-gray-800 text-sm font-medium rounded-lg border border-slate-200 dark:border-gray-700"
    >
      {Object.entries(SUPPORTED_BIBLES).map(([code, bible]) => (
        <option key={code} value={code}>
          {bible.name} ({bible.language})
        </option>
      ))}
    </select>
  );
}