import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { format } from 'date-fns';

interface Like {
  id: string;
  verse: string;
  text: string;
  date: Date;
  comments: number;
}

export default function Likes() {
  const [likes] = React.useState<Like[]>([
    {
      id: '1',
      verse: 'Genesis 1:1',
      text: 'In the beginning God created the heaven and the earth.',
      date: new Date(),
      comments: 5,
    },
    {
      id: '2',
      verse: 'Genesis 1:3',
      text: 'And God said, Let there be light: and there was light.',
      date: new Date(),
      comments: 3,
    },
  ]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-800">Liked Verses</h2>

      <div className="space-y-4">
        {likes.map((like) => (
          <div key={like.id} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-medium text-slate-900">{like.verse}</h3>
              <span className="text-sm text-slate-500">
                {format(like.date, 'MMM d, yyyy')}
              </span>
            </div>
            <p className="text-slate-700 mb-4">{like.text}</p>
            <div className="flex items-center gap-4 text-sm text-slate-600">
              <button className="flex items-center gap-1 text-rose-600">
                <Heart className="w-4 h-4 fill-current" />
                Liked
              </button>
              <button className="flex items-center gap-1 hover:text-indigo-600">
                <MessageCircle className="w-4 h-4" />
                {like.comments} Comments
              </button>
              <button className="flex items-center gap-1 hover:text-indigo-600">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}