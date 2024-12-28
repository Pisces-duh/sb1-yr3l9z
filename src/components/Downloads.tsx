import React, { useState, useEffect } from 'react';
import { Download, Trash2, CheckCircle } from 'lucide-react';
import { useSettingsStore } from '../stores/settingsStore';
import { GENESIS_CHAPTERS } from '../config/bibles';

interface DownloadedChapter {
  book: string;
  chapter: number;
  version: string;
  size: string;
  date: string;
}

export default function Downloads() {
  const { version } = useSettingsStore();
  const [downloads, setDownloads] = useState<DownloadedChapter[]>([]);
  const [downloading, setDownloading] = useState<number[]>([]);

  const handleDownload = async (chapter: number) => {
    setDownloading((prev) => [...prev, chapter]);
    // Simulate download
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setDownloads((prev) => [
      ...prev,
      {
        book: 'Genesis',
        chapter,
        version,
        size: '12MB',
        date: new Date().toISOString(),
      },
    ]);
    setDownloading((prev) => prev.filter((c) => c !== chapter));
  };

  const handleDelete = (chapter: number) => {
    setDownloads((prev) => prev.filter((d) => d.chapter !== chapter));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-800">Downloads</h2>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-slate-800">Genesis</h3>
            <span className="text-sm text-slate-500">{version}</span>
          </div>

          <div className="grid grid-cols-5 gap-4">
            {GENESIS_CHAPTERS.map((chapter) => {
              const isDownloaded = downloads.some((d) => d.chapter === chapter.number);
              const isDownloading = downloading.includes(chapter.number);

              return (
                <button
                  key={chapter.number}
                  onClick={() => isDownloaded ? handleDelete(chapter.number) : handleDownload(chapter.number)}
                  className={`p-4 rounded-lg border ${
                    isDownloaded
                      ? 'border-green-200 bg-green-50 hover:bg-green-100'
                      : 'border-slate-200 hover:bg-slate-50'
                  } flex flex-col items-center gap-2 transition-colors`}
                >
                  <span className="text-sm font-medium">Chapter {chapter.number}</span>
                  {isDownloading ? (
                    <div className="w-4 h-4 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" />
                  ) : isDownloaded ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : (
                    <Download className="w-4 h-4 text-slate-600" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}