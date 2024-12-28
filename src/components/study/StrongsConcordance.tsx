import React from 'react';
import { BookOpen } from 'lucide-react';

export default function StrongsConcordance() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
      <h3 className="flex items-center gap-2 text-lg font-medium text-slate-900 dark:text-white mb-4">
        <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        Strong's Concordance
      </h3>
      
      <div className="space-y-4">
        <div className="p-4 bg-slate-50 dark:bg-gray-700 rounded-lg">
          <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-2">בָּרָא (bara)</h4>
          <p className="text-slate-600 dark:text-slate-300">
            Strong's H1254 - to create, shape, form
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Used 54 times in the Old Testament, exclusively referring to God's creative activity.
          </p>
        </div>
      </div>
    </div>
  );
}