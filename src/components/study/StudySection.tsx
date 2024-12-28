import React from 'react';
import StudyNotes from './StudyNotes';
import Commentary from './Commentary';
import CrossReferences from './CrossReferences';
import StrongsConcordance from './StrongsConcordance';

export default function StudySection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-800 dark:text-white">Study Tools</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StudyNotes />
        <CrossReferences />
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <Commentary />
        <StrongsConcordance />
      </div>
    </div>
  );
}