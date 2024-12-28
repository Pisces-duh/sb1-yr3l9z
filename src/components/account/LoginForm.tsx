import React from 'react';
import { Mail, Lock } from 'lucide-react';
import Input from '../common/Input';
import Button from '../common/Button';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
  onSwitchToSignup: () => void;
}

export default function LoginForm({ onSubmit, onSwitchToSignup }: LoginFormProps) {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData.email, formData.password);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        icon={Mail}
        placeholder="your@email.com"
        required
      />
      
      <Input
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        icon={Lock}
        required
      />

      <Button type="submit" className="w-full">
        Sign In
      </Button>

      <p className="text-center text-sm text-slate-500 dark:text-slate-400">
        Don't have an account?{' '}
        <button
          type="button"
          onClick={onSwitchToSignup}
          className="text-indigo-600 hover:text-indigo-500"
        >
          Sign Up
        </button>
      </p>
    </form>
  );
}