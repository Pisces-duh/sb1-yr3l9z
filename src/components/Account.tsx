import React, { useState } from 'react';
import Card from './common/Card';
import LoginForm from './account/LoginForm';
import SignupForm from './account/SignupForm';
import ProfileSettings from './account/ProfileSettings';
import ReadingHistory from './account/ReadingHistory';
import Preferences from './account/Preferences';

interface UserProfile {
  name: string;
  email: string;
  avatar?: string;
}

export default function Account() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<'login' | 'signup' | 'profile' | 'history' | 'preferences'>('login');
  const [user, setUser] = useState<UserProfile | null>(null);

  const handleLogin = (email: string, password: string) => {
    // Implement login logic here
    setIsLoggedIn(true);
    setUser({ name: 'John Doe', email });
  };

  const handleSignup = (name: string, email: string, password: string) => {
    // Implement signup logic here
    setIsLoggedIn(true);
    setUser({ name, email });
  };

  const handleProfileUpdate = (profile: UserProfile) => {
    setUser(profile);
  };

  const handlePreferencesUpdate = (preferences: any) => {
    // Implement preferences update logic here
    console.log('Updated preferences:', preferences);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-800 dark:text-white">Account</h2>

      {!isLoggedIn ? (
        <Card>
          {activeTab === 'login' && (
            <>
              <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-6">Sign In</h3>
              <LoginForm
                onSubmit={handleLogin}
                onSwitchToSignup={() => setActiveTab('signup')}
              />
            </>
          )}
          {activeTab === 'signup' && (
            <>
              <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-6">Sign Up</h3>
              <SignupForm
                onSubmit={handleSignup}
                onSwitchToLogin={() => setActiveTab('login')}
              />
            </>
          )}
        </Card>
      ) : (
        <Card>
          <div className="border-b border-slate-200 dark:border-slate-700">
            <nav className="flex">
              {['profile', 'history', 'preferences'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-6 py-4 text-sm font-medium border-b-2 ${
                    activeTab === tab
                      ? 'border-indigo-600 text-indigo-600'
                      : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'profile' && user && (
              <ProfileSettings user={user} onUpdate={handleProfileUpdate} />
            )}
            {activeTab === 'history' && (
              <ReadingHistory
                history={[
                  {
                    id: '1',
                    book: 'Genesis',
                    chapter: 1,
                    version: 'KJV',
                    timestamp: new Date(),
                    duration: 900,
                  },
                ]}
              />
            )}
            {activeTab === 'preferences' && (
              <Preferences
                preferences={{
                  defaultVersion: 'KJV',
                  defaultVoice: 'male',
                  notifications: true,
                }}
                onUpdate={handlePreferencesUpdate}
              />
            )}
          </div>
        </Card>
      )}
    </div>
  );
}