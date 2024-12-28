import React from 'react';
import { Edit } from 'lucide-react';
import Input from '../common/Input';
import Button from '../common/Button';

interface UserProfile {
  name: string;
  email: string;
  avatar?: string;
}

interface ProfileSettingsProps {
  user: UserProfile;
  onUpdate: (profile: UserProfile) => void;
}

export default function ProfileSettings({ user, onUpdate }: ProfileSettingsProps) {
  const [formData, setFormData] = React.useState<UserProfile>(user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src={user.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop'}
            alt={user.name}
            className="w-24 h-24 rounded-full object-cover"
          />
          <button
            type="button"
            className="absolute bottom-0 right-0 p-1.5 bg-white dark:bg-gray-800 rounded-full border border-slate-200 dark:border-slate-600"
          >
            <Edit className="w-4 h-4 text-slate-600 dark:text-slate-300" />
          </button>
        </div>
        <div>
          <h3 className="text-xl font-medium text-slate-900 dark:text-white">{user.name}</h3>
          <p className="text-slate-500 dark:text-slate-400">{user.email}</p>
        </div>
      </div>

      <div className="space-y-4">
        <Input
          label="Display Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        
        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <Button type="submit">
          Save Changes
        </Button>
      </div>
    </form>
  );
}