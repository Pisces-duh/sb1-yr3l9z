import React from 'react';
import { BookOpen } from 'lucide-react';

export default function Commentary() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
      <h3 className="flex items-center gap-2 text-lg font-medium text-slate-900 dark:text-white mb-4">
        <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        Commentary
      </h3>
      
      <div className="prose dark:prose-invert max-w-none">
        <p>
          The opening chapter of Genesis provides the foundation for all of Scripture, 
          introducing us to God as the sovereign Creator of all things.
        </p>
        <p>
          This passage establishes several key theological principles:
        </p>
        <ul>
          <li>God's existence before all creation</li>
          <li>The orderly nature of creation</li>
          <li>The unique position of humanity in God's creation</li>
        </ul>
      </div>
    </div>
  );
}