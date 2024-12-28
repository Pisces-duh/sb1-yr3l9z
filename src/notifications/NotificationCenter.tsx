// src/components/notifications/NotificationCenter.tsx
import React from 'react';
import { Bell, X } from 'lucide-react';

interface Notification {
  id: string;
  title: string;
  message: string;
  time: Date;
  read: boolean;
}

export default function NotificationCenter({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [notifications] = React.useState<Notification[]>([
    {
      id: '1',
      title: 'Daily Reading Reminder',
      message: 'Time for your daily Bible reading!',
      time: new Date(),
      read: false,
    },
    {
      id: '2',
      title: 'New Comment',
      message: 'Someone replied to your comment on Genesis 1:1',
      time: new Date(),
      read: false,
    },
  ]);

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-16 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 z-50">
      <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
        <h3 className="font-medium">Notifications</h3>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-slate-600"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 border-b border-slate-200 dark:border-slate-700 ${
              !notification.read ? 'bg-indigo-50 dark:bg-indigo-900/20' : ''
            }`}
          >
            <h4 className="font-medium text-sm">{notification.title}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              {notification.message}
            </p>
            <span className="text-xs text-slate-500 mt-2 block">
              {notification.time.toLocaleTimeString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
