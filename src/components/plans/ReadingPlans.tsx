import React, { useState } from 'react';
import { Plus, Filter } from 'lucide-react';
import ReadingPlan from './ReadingPlan';

const SAMPLE_PLANS = [
  {
    id: '1',
    title: "Through the Bible in a Year",
    description: "Read through the entire Bible in 365 days with daily readings from both testaments.",
    duration: 365,
    progress: 45,
    startDate: new Date('2024-01-01'),
    category: "Complete Bible",
    participants: 1234,
    totalChapters: 1189,
    completedChapters: 535
  },
  {
    id: '2',
    title: "Psalms of Praise",
    description: "A 30-day journey through the most uplifting psalms of praise and worship.",
    duration: 30,
    progress: 80,
    startDate: new Date('2024-02-15'),
    category: "Topical",
    participants: 567,
    totalChapters: 50,
    completedChapters: 40
  },
  {
    id: '3',
    title: "New Testament in 90 Days",
    description: "An intensive study through the entire New Testament in just three months.",
    duration: 90,
    progress: 0,
    startDate: new Date(),
    category: "New Testament",
    participants: 789,
    totalChapters: 260,
    completedChapters: 0
  }
];

export default function ReadingPlans() {
  const [filter, setFilter] = useState('all');
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-white">Reading Plans</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Join a reading plan to study the Bible systematically</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          <Plus className="w-5 h-5" />
          Create Plan
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {['all', 'Complete Bible', 'New Testament', 'Old Testament', 'Topical'].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
              filter === category
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SAMPLE_PLANS.map((plan) => (
          <ReadingPlan
            key={plan.id}
            plan={plan}
            onJoin={() => console.log('Joining plan:', plan.id)}
          />
        ))}
      </div>
    </div>
  );
}