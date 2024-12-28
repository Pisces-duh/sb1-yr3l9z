import React from 'react';
import { BibleVerse } from '../../types';
import ChapterHeader from './ChapterHeader';

interface VerseListProps {
  book: string;
  chapter: number;
  verses: BibleVerse[];
  onVerseClick?: (verse: BibleVerse) => void;
}

// Group verses into sections of 10
const getSections = (verses: BibleVerse[]) => {
  const sections = [];
  let currentStart = 0;
  
  while (currentStart < verses.length) {
    sections.push({
      title: `Verses ${currentStart + 1}-${Math.min(currentStart + 10, verses.length)}`,
      verses: verses.slice(currentStart, currentStart + 10)
    });
    currentStart += 10;
  }
  
  return sections;
};

export default function VerseList({ book, chapter, verses, onVerseClick }: VerseListProps) {
  const sections = getSections(verses);

  return (
    <div className="max-w-3xl mx-auto">
      <ChapterHeader 
        book={book} 
        chapter={chapter}
        title="The Creation of the World"
      />
      
      <div className="space-y-8">
        {sections.map((section, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-lg font-medium text-slate-700 dark:text-slate-300">
              {section.title}
            </h3>
            <div className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              {section.verses.map((verse, i) => (
                <span key={verse.verse} className="inline">
                  <sup className="text-xs font-medium text-slate-400 dark:text-slate-500 mr-1">
                    {verse.verse}
                  </sup>
                  {verse.text}{' '}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}