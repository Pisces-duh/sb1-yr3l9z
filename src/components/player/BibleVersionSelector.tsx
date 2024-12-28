import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SUPPORTED_BIBLES } from '../../config/bibles';

interface BibleVersionSelectorProps {
  selectedVersion: string;
  onVersionChange: (version: string) => void;
}

export default function BibleVersionSelector({
  selectedVersion,
  onVersionChange,
}: BibleVersionSelectorProps) {
  return (
    <div className="w-64 overflow-y-auto">
      <h3 className="text-lg font-semibold text-white mb-4">Bible Versions</h3>
      <div className="space-y-2">
        {Object.entries(SUPPORTED_BIBLES).map(([code, bible]) => (
          <button
            key={code}
            onClick={() => onVersionChange(code)}
            className={`w-full p-3 rounded-lg text-left flex items-center justify-between ${
              selectedVersion === code ? 'bg-gray-700' : 'hover:bg-gray-800'
            }`}
          >
            <div>
              <div className="font-medium text-white">{bible.name}</div>
              <div className="text-sm text-gray-400">{bible.language}</div>
            </div>
            {selectedVersion === code && <ChevronRight className="w-4 h-4 text-white" />}
          </button>
        ))}
      </div>
    </div>
  );
}