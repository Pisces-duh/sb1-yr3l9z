import React from 'react';
import { BookOpen, Plus } from 'lucide-react';

export default function StudyNotes() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
      <div className="flex items-center justify-between mb-4">
        <h3 className="flex items-center gap-2 text-lg font-medium text-slate-900 dark:text-white">
          <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          Study Notes
        </h3>
        <button className="p-2 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400">
          <Plus className="w-5 h-5" />
        </button>
      </div>
      
      <div className="space-y-4">
        <div className="p-4 bg-slate-50 dark:bg-gray-700 rounded-lg">
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">Genesis 1:1</p>
          <p className="text-slate-800 dark:text-slate-200">The Hebrew word "bara" (created) is used exclusively for God's creative activity.</p>
        </div>
      </div>
    </div>
  );
}