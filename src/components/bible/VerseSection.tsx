import React from 'react';
import { BibleVerse } from '../../types';

interface VerseSectionProps {
  title?: string;
  verses: BibleVerse[];
  onVerseClick?: (verse: BibleVerse) => void;
}

export default function VerseSection({ title, verses, onVerseClick }: VerseSectionProps) {
  return (
    <div className="mb-8">
      {title && (
        <h2 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-4">
          {title}
        </h2>
      )}
      <div className="relative">
        {verses.map((verse) => (
          <div
            key={verse.verse}
            className="group flex mb-4 last:mb-0"
            onClick={() => onVerseClick?.(verse)}
          >
            <span className="text-xs font-medium text-slate-400 dark:text-slate-500 w-6 pt-1.5">
              {verse.verse}
            </span>
            <p className="flex-1 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              {verse.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}