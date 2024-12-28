import React from 'react';
import { MessageCircle, Heart, Reply } from 'lucide-react';

interface Comment {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  verse: string;
  text: string;
  date: Date;
  likes: number;
  replies: number;
}

export default function Comments() {
  const [comments] = React.useState<Comment[]>([
    {
      id: '1',
      user: {
        name: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop',
      },
      verse: 'Genesis 1:1',
      text: 'Such a powerful opening verse that establishes God as the creator of everything.',
      date: new Date(),
      likes: 12,
      replies: 3,
    },
    {
      id: '2',
      user: {
        name: 'Jane Smith',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop',
      },
      verse: 'Genesis 1:3',
      text: 'The creation of light marks the beginning of God bringing order to chaos.',
      date: new Date(),
      likes: 8,
      replies: 2,
    },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-slate-800">Comments</h2>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          Add Comment
        </button>
      </div>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <div className="flex items-start gap-4">
              <img
                src={comment.user.avatar}
                alt={comment.user.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h3 className="font-medium text-slate-900">{comment.user.name}</h3>
                    <p className="text-sm text-slate-500">on {comment.verse}</p>
                  </div>
                  <span className="text-sm text-slate-500">
                    {new Date(comment.date).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-slate-700 mb-4">{comment.text}</p>
                <div className="flex items-center gap-4 text-sm text-slate-600">
                  <button className="flex items-center gap-1 hover:text-indigo-600">
                    <Heart className="w-4 h-4" />
                    {comment.likes} Likes
                  </button>
                  <button className="flex items-center gap-1 hover:text-indigo-600">
                    <Reply className="w-4 h-4" />
                    Reply
                  </button>
                  <button className="flex items-center gap-1 hover:text-indigo-600">
                    <MessageCircle className="w-4 h-4" />
                    {comment.replies} Replies
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}