import React from 'react';
import { User, Mail, Lock } from 'lucide-react';
import Input from '../common/Input';
import Button from '../common/Button';

interface SignupFormProps {
  onSubmit: (name: string, email: string, password: string) => void;
  onSwitchToLogin: () => void;
}

export default function SignupForm({ onSubmit, onSwitchToLogin }: SignupFormProps) {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData.name, formData.email, formData.password);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        icon={User}
        placeholder="John Doe"
        required
      />

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
        Sign Up
      </Button>

      <p className="text-center text-sm text-slate-500 dark:text-slate-400">
        Already have an account?{' '}
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="text-indigo-600 hover:text-indigo-500"
        >
          Sign In
        </button>
      </p>
    </form>
  );
}