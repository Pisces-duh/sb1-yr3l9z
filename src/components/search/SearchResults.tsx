import React from 'react';
import { Book } from 'lucide-react';

interface SearchResult {
  id: string;
  book: string;
  chapter: number;
  verse?: number;
  text: string;
}

interface SearchResultsProps {
  results: SearchResult[];
  onResultClick: (result: SearchResult) => void;
}

export default function SearchResults({ results, onResultClick }: SearchResultsProps) {
  if (results.length === 0) {
    return (
      <div className="text-center py-8 text-slate-500 dark:text-slate-400">
        No results found
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {results.map((result) => (
        <button
          key={result.id}
          onClick={() => onResultClick(result)}
          className="w-full p-4 text-left bg-white dark:bg-gray-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-gray-700"
        >
          <div className="flex items-center gap-2 mb-2">
            <Book className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="font-medium dark:text-white">
              {result.book} {result.chapter}{result.verse ? `:${result.verse}` : ''}
            </span>
          </div>
          <p className="text-slate-600 dark:text-slate-300 line-clamp-2">{result.text}</p>
        </button>
      ))}
    </div>
  );
}