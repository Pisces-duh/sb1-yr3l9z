import React from 'react';
import { Search, User } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  setCurrentSection: (section: string) => void;
}

export default function Navbar({ currentTab, setCurrentTab, setCurrentSection }: NavbarProps) {
  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-slate-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-1 flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-serif text-indigo-600 dark:text-indigo-400">Logos</span>
            </div>
            
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {['listen', 'study', 'plans', 'community'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setCurrentTab(tab)}
                  className={`${
                    currentTab === tab
                      ? 'border-indigo-500 text-gray-900 dark:text-white'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium capitalize`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setCurrentSection('search')}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              <Search className="w-4 h-4" />
              Search
            </button>
            
            <button
              onClick={() => setCurrentSection('account')}
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