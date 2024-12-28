import React from 'react';
import { Book, BookOpen, Highlighter, MessageSquare } from 'lucide-react';

export default function StudySection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
            <BookOpen className="w-5 h-5 text-indigo-600" />
            Study Notes
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-lg">
              <p className="text-sm text-slate-600 mb-2">Genesis 1:1</p>
              <p className="text-slate-800">Historical context and interpretation notes...</p>
            </div>
            <button className="w-full px-4 py-2 text-sm text-indigo-600 border border-indigo-200 rounded-lg hover:bg-indigo-50">
              Add New Note
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
            <Highlighter className="w-5 h-5 text-indigo-600" />
            Highlights
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-sm text-slate-600 mb-2">John 3:16</p>
              <p className="text-slate-800">"For God so loved the world..."</p>
            </div>
            <button className="w-full px-4 py-2 text-sm text-indigo-600 border border-indigo-200 rounded-lg hover:bg-indigo-50">
              View All Highlights
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
        <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
          <MessageSquare className="w-5 h-5 text-indigo-600" />
          Commentary
        </h2>
        <div className="prose max-w-none">
          <p className="text-slate-700">
            Scholarly insights and historical context about the current passage...
          </p>
        </div>
      </div>
    </div>
  );
}