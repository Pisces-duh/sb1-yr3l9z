export interface BibleVerse {
  book: string;
  chapter: number;
  verse: number;
  text: string;
}

export interface AudioTrack {
  id: string;
  book: string;
  chapter: number;
  version: string;
  narrator: string;
  audioUrl: string;
}

export interface Bookmark {
  id: string;
  book: string;
  chapter: number;
  verse?: number;
  note?: string;
  timestamp: number;
}

export interface UserPreferences {
  preferredVersion: string;
  preferredNarrator: string;
  playbackSpeed: number;
  autoplay: boolean;
}