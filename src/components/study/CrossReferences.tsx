import React from 'react';
import { Link } from 'lucide-react';

export default function CrossReferences() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
      <h3 className="flex items-center gap-2 text-lg font-medium text-slate-900 dark:text-white mb-4">
        <Link className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        Cross References
      </h3>
      
      <div className="space-y-4">
        <div className="p-4 bg-slate-50 dark:bg-gray-700 rounded-lg">
          <div className="flex items-start gap-4">
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">John 1:1-3</span>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              "In the beginning was the Word, and the Word was with God, and the Word was God..."
            </p>
          </div>
        </div>
        
        <div className="p-4 bg-slate-50 dark:bg-gray-700 rounded-lg">
          <div className="flex items-start gap-4">
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Psalm 33:6</span>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              "By the word of the LORD were the heavens made..."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}