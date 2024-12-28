import React from 'react';
import { Calendar, CheckCircle, Clock, Target } from 'lucide-react';

const plans = [
  {
    title: "Through the Bible in a Year",
    progress: 45,
    daysLeft: 320,
    category: "Complete Bible"
  },
  {
    title: "Psalms of Praise",
    progress: 80,
    daysLeft: 6,
    category: "Topical"
  },
  {
    title: "New Testament in 90 Days",
    progress: 0,
    daysLeft: 90,
    category: "New Testament"
  }
];

export default function ReadingPlans() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-slate-800">Reading Plans</h2>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          Start New Plan
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-medium text-slate-900">{plan.title}</h3>
              <span className="px-2 py-1 text-xs bg-slate-100 rounded-full">
                {plan.category}
              </span>
            </div>

            <div className="space-y-4">
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div 
                  className="bg-indigo-600 h-2 rounded-full" 
                  style={{ width: `${plan.progress}%` }}
                ></div>
              </div>

              <div className="flex justify-between text-sm text-slate-600">
                <span className="flex items-center gap-1">
                  <Target className="w-4 h-4" />
                  {plan.progress}% Complete
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {plan.daysLeft} days left
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}