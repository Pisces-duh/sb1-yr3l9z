import React, { useState } from 'react';
import { Book, Headphones, Share2 } from 'lucide-react';
import { SUPPORTED_BIBLES } from '../config/bibles';
import { getChapterCount } from '../config/chapters';
import BibleVersionSelector from './bible/BibleVersionSelector';
import VerseList from './bible/VerseList';
import { BibleVerse } from '../types';

const getMockVerses = (book: string, chapter: number): BibleVerse[] => {
  return Array.from({ length: 31 }, (_, i) => ({
    book,
    chapter,
    verse: i + 1,
    text: "In the beginning God created the heaven and the earth. And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters.",
  }));
};

interface BibleContentProps {
  currentBook: string;
  currentChapter: number;
  setCurrentBook: (book: string) => void;
  setCurrentChapter: (chapter: number) => void;
}

export default function BibleContent({
  currentBook,
  currentChapter,
  setCurrentBook,
  setCurrentChapter
}: BibleContentProps) {
  const [currentVersion, setCurrentVersion] = useState('KJV');
  const chapterCount = getChapterCount(currentBook);
  const currentBible = SUPPORTED_BIBLES[currentVersion as keyof typeof SUPPORTED_BIBLES];
  const verses = getMockVerses(currentBook, currentChapter);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <BibleVersionSelector
            currentVersion={currentVersion}
            onVersionChange={setCurrentVersion}
          />
          <div className="flex items-center gap-2">
            <Book className="w-5 h-5 text-slate-400" />
            <select
              value={currentBook}
              onChange={(e) => setCurrentBook(e.target.value)}
              className="bg-transparent text-sm font-medium"
            >
              {currentBible.books.map((book) => (
                <option key={book} value={book}>
                  {book}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-500">Chapter</span>
            <select
              value={currentChapter}
              onChange={(e) => setCurrentChapter(parseInt(e.target.value, 10))}
              className="bg-transparent text-sm font-medium"
            >
              {Array.from({ length: chapterCount }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400">
            <Headphones className="w-5 h-5" />
          </button>
          <button className="p-2 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="prose max-w-none dark:prose-invert">
        <VerseList 
          book={currentBook}
          chapter={currentChapter}
          verses={verses}
          onVerseClick={(verse) => console.log('Clicked verse:', verse)}
        />
      </div>
    </div>
  );
}