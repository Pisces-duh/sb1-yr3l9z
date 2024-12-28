import React from 'react';
import { Calendar, Clock, Target, Users, BookOpen } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface Plan {
  id: string;
  title: string;
  description: string;
  duration: number;
  progress: number;
  startDate: Date;
  category: string;
  participants: number;
  totalChapters: number;
  completedChapters: number;
}

interface ReadingPlanProps {
  plan: Plan;
  onJoin?: () => void;
}

export default function ReadingPlan({ plan, onJoin }: ReadingPlanProps) {
  const daysLeft = Math.ceil((plan.duration * (100 - plan.progress)) / 100);
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-medium text-slate-900 dark:text-white text-lg">{plan.title}</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{plan.description}</p>
        </div>
        <span className="px-3 py-1 text-xs font-medium bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full">
          {plan.category}
        </span>
      </div>

      <div className="space-y-4">
        <div className="w-full bg-slate-100 dark:bg-gray-700 rounded-full h-2">
          <div 
            className="bg-indigo-600 h-2 rounded-full transition-all duration-500" 
            style={{ width: `${plan.progress}%` }}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
            <Target className="w-4 h-4" />
            <span>{plan.progress}% Complete</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
            <Clock className="w-4 h-4" />
            <span>{daysLeft} days left</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
            <BookOpen className="w-4 h-4" />
            <span>{plan.completedChapters}/{plan.totalChapters} chapters</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
            <Users className="w-4 h-4" />
            <span>{plan.participants} participants</span>
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-700">
          <span className="text-sm text-slate-500 dark:text-slate-400">
            Started {formatDistanceToNow(plan.startDate, { addSuffix: true })}
          </span>
          <button
            onClick={onJoin}
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
          >
            Join Plan
          </button>
        </div>
      </div>
    </div>
  );
}