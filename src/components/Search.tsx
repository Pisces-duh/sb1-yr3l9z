import React, { useState } from 'react';
import { Search as SearchIcon, Book } from 'lucide-react';
import { SUPPORTED_BIBLES } from '../config/bibles';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedVersion, setSelectedVersion] = useState('KJV');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    // This would typically connect to your Bible API
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-800 dark:text-white">Search</h2>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-gray-700">
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search the Bible..."
                className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <select
              value={selectedVersion}
              onChange={(e) => setSelectedVersion(e.target.value)}
              className="px-4 py-2 rounded-lg border border-slate-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            >
              {Object.entries(SUPPORTED_BIBLES).map(([code, bible]) => (
                <option key={code} value={code}>
                  {bible.name}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              <SearchIcon className="w-5 h-5" />
            </button>
          </div>
        </form>

        <div className="mt-8 space-y-4">
          {searchResults.map((result: any, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border border-slate-200 dark:border-gray-600 hover:bg-slate-50 dark:hover:bg-gray-700"
            >
              <div className="flex items-center gap-2 mb-2">
                <Book className="w-4 h-4 text-indigo-600" />
                <span className="font-medium dark:text-white">{result.reference}</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300">{result.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}