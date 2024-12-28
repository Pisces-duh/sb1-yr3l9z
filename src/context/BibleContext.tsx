import React, { createContext, useContext, useState } from 'react';
import type { Bookmark, UserPreferences } from '../types';

interface BibleContextType {
  currentBook: string;
  currentChapter: number;
  bookmarks: Bookmark[];
  favorites: Bookmark[];
  userPreferences: UserPreferences;
  setCurrentBook: (book: string) => void;
  setCurrentChapter: (chapter: number) => void;
  addBookmark: (bookmark: Omit<Bookmark, 'id' | 'timestamp'>) => void;
  removeBookmark: (id: string) => void;
  toggleFavorite: (bookmark: Omit<Bookmark, 'id' | 'timestamp'>) => void;
  updatePreferences: (prefs: Partial<UserPreferences>) => void;
}

const BibleContext = createContext<BibleContextType | null>(null);

export function BibleProvider({ children }: { children: React.ReactNode }) {
  const [currentBook, setCurrentBook] = useState('Genesis');
  const [currentChapter, setCurrentChapter] = useState(1);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [favorites, setFavorites] = useState<Bookmark[]>([]);
  const [userPreferences, setUserPreferences] = useState<UserPreferences>({
    preferredVersion: 'KJV',
    preferredNarrator: 'Default',
    playbackSpeed: 1,
    autoplay: false,
  });

  const addBookmark = (bookmark: Omit<Bookmark, 'id' | 'timestamp'>) => {
    const newBookmark: Bookmark = {
      ...bookmark,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: Date.now(),
    };
    setBookmarks((prev) => [...prev, newBookmark]);
  };

  const removeBookmark = (id: string) => {
    setBookmarks((prev) => prev.filter((b) => b.id !== id));
  };

  const toggleFavorite = (bookmark: Omit<Bookmark, 'id' | 'timestamp'>) => {
    const existingFavorite = favorites.find(
      (f) => f.book === bookmark.book && f.chapter === bookmark.chapter
    );

    if (existingFavorite) {
      setFavorites((prev) => prev.filter((f) => f.id !== existingFavorite.id));
    } else {
      const newFavorite: Bookmark = {
        ...bookmark,
        id: Math.random().toString(36).substr(2, 9),
        timestamp: Date.now(),
      };
      setFavorites((prev) => [...prev, newFavorite]);
    }
  };

  const updatePreferences = (prefs: Partial<UserPreferences>) => {
    setUserPreferences((prev) => ({ ...prev, ...prefs }));
  };

  return (
    <BibleContext.Provider
      value={{
        currentBook,
        currentChapter,
        bookmarks,
        favorites,
        userPreferences,
        setCurrentBook,
        setCurrentChapter,
        addBookmark,
        removeBookmark,
        toggleFavorite,
        updatePreferences,
      }}
    >
      {children}
    </BibleContext.Provider>
  );
}

export const useBible = () => {
  const context = useContext(BibleContext);
  if (!context) {
    throw new Error('useBible must be used within a BibleProvider');
  }
  return context;
};