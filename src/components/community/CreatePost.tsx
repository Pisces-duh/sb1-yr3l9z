import React, { useState } from 'react';
import { X, Upload, Eye } from 'lucide-react';

interface CreatePostProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: {
    content: string;
    verse?: string;
    category?: string;
    attachment?: File;
  }) => void;
}

export default function CreatePost({
  isOpen,
  onClose,
  onSubmit,
}: CreatePostProps) {
  const [content, setContent] = useState('');
  const [verse, setVerse] = useState('');
  const [category, setCategory] = useState('');
  const [attachment, setAttachment] = useState<File | null>(null);
  const [preview, setPreview] = useState(false);

  const characterLimit = 300;

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ content, verse, category, attachment });
    setContent('');
    setVerse('');
    setCategory('');
    setAttachment(null);
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachment(e.target.files[0]);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-300/70 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-lg p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">
            {preview ? 'Preview Post' : 'Create Post'}
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!preview ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Bible Verse (optional)
              </label>
              <input
                type="text"
                value={verse}
                onChange={(e) => setVerse(e.target.value)}
                placeholder="e.g., John 3:16"
                className="w-full px-4 py-2 rounded-lg border bg-gray-100 border-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Category (optional)
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border bg-gray-100 border-gray-300"
              >
                <option value="">Select a category</option>
                <option value="Inspiration">Inspiration</option>
                <option value="Prayer">Prayer</option>
                <option value="Praise">Praise</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Your Thoughts
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                maxLength={characterLimit}
                className="w-full px-4 py-2 rounded-lg border bg-gray-100 border-gray-300 h-32"
                placeholder="Share your thoughts..."
                required
              />
              <p
                className={`text-right text-sm ${
                  content.length > characterLimit - 20
                    ? 'text-red-500'
                    : 'text-gray-500'
                }`}
              >
                {characterLimit - content.length} characters remaining
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Attachment (optional)
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="block w-full text-sm text-slate-500"
              />
              {attachment && (
                <p className="text-sm text-gray-500 mt-2">
                  Selected: {attachment.name}
                </p>
              )}
            </div>
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => setPreview(true)}
                className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-800"
              >
                <Eye className="w-5 h-5 inline-block mr-1" />
                Preview
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Post
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-4">
            <p>
              <strong>Bible Verse:</strong> {verse || 'N/A'}
            </p>
            <p>
              <strong>Category:</strong> {category || 'N/A'}
            </p>
            <p>
              <strong>Your Thoughts:</strong> {content}
            </p>
            {attachment && (
              <p>
                <strong>Attachment:</strong> {attachment.name}
              </p>
            )}
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setPreview(false)}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Confirm
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
