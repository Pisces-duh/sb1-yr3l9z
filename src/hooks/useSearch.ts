import { useState, useCallback } from 'react';
import { BibleVerse } from '../types';

export function useSearch() {
  const [results, setResults] = useState<BibleVerse[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const search = useCallback(async (query: string) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    try {
      // Mock search results - replace with actual API call
      const mockResults = [
        {
          id: '1',
          book: 'Genesis',
          chapter: 1,
          verse: 1,
          text: 'In the beginning God created the heaven and the earth.',
        },
        // Add more mock results as needed
      ];
      setResults(mockResults);
    } catch (error) {
      console.error('Search error:', error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { search, results, isLoading };
}