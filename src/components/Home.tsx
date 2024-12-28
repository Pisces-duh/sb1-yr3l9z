import React, { useState } from 'react';
import { Headphones, BookOpen, Download, MessageCircle } from 'lucide-react';
import { SUPPORTED_BIBLES } from '../config/bibles';

export default function Home() {
  const [selectedVersion, setSelectedVersion] = useState('KJV');
  const [selectedVoice, setSelectedVoice] = useState('default');

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-800 dark:text-white">Home</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
              <Headphones className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h3 className="font-medium text-slate-900 dark:text-white">Listen</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Select version and voice</p>
            </div>
          </div>
          
          {/* Bible Version Selection */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Bible Version
            </label>
            <select
              value={selectedVersion}
              onChange={(e) => setSelectedVersion(e.target.value)}
              className="w-full px-4 py-2 border border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-gray-800 text-slate-900 dark:text-white"
            >
              {Object.entries(SUPPORTED_BIBLES).map(([code, bible]) => (
                <option key={code} value={code}>
                  {bible.name} ({bible.language})
                </option>
              ))}
            </select>
          </div>

          {/* Voice Selection */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Voice
            </label>
            <select
              value={selectedVoice}
              onChange={(e) => setSelectedVoice(e.target.value)}
              className="w-full px-4 py-2 border border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-gray-800 text-slate-900 dark:text-white"
            >
              <option value="default">Male (Default)</option>
              <option value="female">Female</option>
              <option value="dramatic">Dramatic</option>
            </select>
          </div>

          <button className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
            Start Listening
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h3 className="font-medium text-slate-900 dark:text-white">Add Note</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Write your thoughts</p>
            </div>
          </div>
          <textarea
            placeholder="Enter your notes here..."
            className="w-full px-4 py-2 border border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-gray-800 text-slate-900 dark:text-white h-24 resize-none mb-4"
          ></textarea>
          <button className="w-full px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg">
            Save Note
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg bg-rose-100 dark:bg-rose-900 flex items-center justify-center">
              <Download className="w-6 h-6 text-rose-600 dark:text-rose-400" />
            </div>
            <div>
              <h3 className="font-medium text-slate-900 dark:text-white">Download Audio</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Listen offline</p>
            </div>
          </div>
          <button className="w-full px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg">
            Download Current Chapter
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-2 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-slate-400" />
              <div>
                <p className="text-slate-900 dark:text-white">Added a note to Genesis 1:1</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">2 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}