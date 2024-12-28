import React, { useState } from 'react';
import Home from '../Home';
import BibleContent from '../BibleContent';
import Comments from '../Comments';
import Downloads from '../Downloads';
import Share from '../Share';
import Settings from '../Settings';
import Account from '../Account';
import ReadingPlans from '../plans/ReadingPlans';
import Community from '../community/Community';
import StudySection from '../study/StudySection';

interface MainContentProps {
  currentSection: string;
}

export default function MainContent({ currentSection }: MainContentProps) {
  const [currentBook, setCurrentBook] = useState('Genesis');
  const [currentChapter, setCurrentChapter] = useState(1);

  const renderContent = () => {
    switch (currentSection) {
      case 'home':
        return <Home />;
      case 'read':
        return (
          <BibleContent 
            currentBook={currentBook}
            currentChapter={currentChapter}
            setCurrentBook={setCurrentBook}
            setCurrentChapter={setCurrentChapter}
          />
        );
      case 'study':
        return <StudySection />;
      case 'plans':
        return <ReadingPlans />;
      case 'community':
        return <Community />;
      case 'downloads':
        return <Downloads />;
      case 'comments':
        return <Comments />;
      case 'share':
        return <Share />;
      case 'settings':
        return <Settings />;
      case 'account':
        return <Account />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="space-y-6">
      {renderContent()}
    </div>
  );
}