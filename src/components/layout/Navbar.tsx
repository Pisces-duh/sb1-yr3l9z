import React, { useState } from 'react';
import { Search, User, Bell } from 'lucide-react';
import { useSettingsStore } from '../../stores/settingsStore';
import ThemeToggle from '../common/ThemeToggle';
import SearchBar from '../search/SearchBar';
import { useSearch } from '../../hooks/useSearch';

interface NavbarProps {
  onSectionChange: (section: string) => void;
}

export default function Navbar({ onSectionChange }: NavbarProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const { search, results } = useSearch();

  const handleSearch = (query: string) => {
    search(query);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-slate-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="flex-shrink-0">
              <span className="text-2xl font-serif text-indigo-600 dark:text-indigo-400">
                Logos
              </span>
            </div>

            <div className="hidden md:flex items-center gap-6">
              {['read', 'study', 'plans', 'community'].map((item) => (
                <button
                  key={item}
                  onClick={() => onSectionChange(item)}
                  className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-64">
              <SearchBar onSearch={handleSearch} placeholder="Search Bible..." />
              {results.length > 0 && (
                <div className="absolute top-full mt-2 w-full">
                  {/* Add SearchResults component here */}
                </div>
              )}
            </div>

            <ThemeToggle />

            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            <button
              onClick={() => onSectionChange('account')}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg"
            >
              <User className="w-4 h-4" />
              Account
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}