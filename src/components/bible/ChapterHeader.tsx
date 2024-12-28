import React from 'react';

interface ChapterHeaderProps {
  book: string;
  chapter: number;
  title?: string;
}

export default function ChapterHeader({ book, chapter, title }: ChapterHeaderProps) {
  return (
    <div className="mb-8 text-center">
      <h1 className="text-3xl font-serif text-slate-900 dark:text-white mb-2">
        {book} {chapter}
      </h1>
      {title && (
        <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">
          {title}
        </p>
      )}
      <div className="mt-4 w-16 h-0.5 bg-indigo-600 mx-auto"></div>
    </div>
  );
}