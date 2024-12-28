import React from 'react';
import { Clock, BookOpen } from 'lucide-react';
import { format } from 'date-fns';

interface ReadingEntry {
  id: string;
  book: string;
  chapter: number;
  version: string;
  timestamp: Date;
  duration: number;
}

interface ReadingHistoryProps {
  history: ReadingEntry[];
}

export default function ReadingHistory({ history }: ReadingHistoryProps) {
  return (
    <div className="space-y-4">
      {history.map((entry) => (
        <div
          key={entry.id}
          className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700"
        >
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="font-medium text-slate-900 dark:text-white">
                {entry.book} {entry.chapter}
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">{entry.version}</p>
            </div>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              {format(entry.timestamp, 'PPp')}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
            <Clock className="w-4 h-4" />
            <span>{Math.round(entry.duration / 60)} minutes listened</span>
          </div>
        </div>
      ))}

      {history.length === 0 && (
        <div className="text-center py-8">
          <BookOpen className="w-12 h-12 mx-auto text-slate-400 dark:text-slate-600 mb-4" />
          <p className="text-slate-600 dark:text-slate-400">No reading history yet</p>
        </div>
      )}
    </div>
  );
}