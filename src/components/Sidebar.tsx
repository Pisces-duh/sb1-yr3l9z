import React from 'react';
import { Book, BookOpen, Bookmark, Calendar, Download, Heart, Home, MessageCircle, Settings, Share2 } from 'lucide-react';

interface SidebarProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

export default function Sidebar({ currentSection, setCurrentSection }: SidebarProps) {
  const menuItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'read', icon: BookOpen, label: 'Read' },
    { id: 'bookmarks', icon: Bookmark, label: 'Bookmarks' },
    { id: 'likes', icon: Heart, label: 'Likes' },
    { id: 'downloads', icon: Download, label: 'Downloads' },
    { id: 'comments', icon: MessageCircle, label: 'Comments' },
    { id: 'share', icon: Share2, label: 'Share' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="w-20 bg-white border-r border-slate-200 min-h-[calc(100vh-4rem)] flex flex-col items-center py-8">
      <nav className="space-y-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentSection(item.id)}
              className={`w-12 h-12 flex items-center justify-center rounded-xl transition-colors ${
                currentSection === item.id
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-slate-400 hover:bg-slate-50'
              }`}
              title={item.label}
            >
              <Icon className="w-5 h-5" />
            </button>
          );
        })}
      </nav>
    </aside>
  );
}