import React, { useState } from 'react';
import {
  ThumbsUp,
  MessageCircle,
  Share2,
  MoreVertical,
  Bookmark,
  Edit,
  Trash,
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface Post {
  id: string;
  user: {
    name: string;
    avatar: string;
    role?: string;
  };
  content: string;
  timestamp: Date;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
  isBookmarked: boolean;
  verse?: {
    reference: string;
    text: string;
  };
  reactions?: Record<string, number>; // Emoji reactions: { "❤️": 10, "🙏": 5 }
}

interface CommunityPostProps {
  post: Post;
  onLike: (id: string) => void;
  onComment: (id: string) => void;
  onShare: (id: string) => void;
  onBookmark: (id: string) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onReact?: (id: string, emoji: string) => void;
}

export default function CommunityPost({
  post,
  onLike,
  onComment,
  onShare,
  onBookmark,
  onEdit,
  onDelete,
  onReact,
}: CommunityPostProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showReactions, setShowReactions] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const toggleReactions = () => setShowReactions(!showReactions);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
      <div className="flex items-start gap-4">
        <img
          src={post.user.avatar}
          alt={post.user.name}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-slate-900 dark:text-white">
                  {post.user.name}
                </h3>
                {post.user.role && (
                  <span className="px-2 py-1 text-xs font-medium bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full">
                    {post.user.role}
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {formatDistanceToNow(post.timestamp, { addSuffix: true })}
              </p>
            </div>

            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-lg"
              >
                <MoreVertical className="w-5 h-5" />
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden z-50">
                  <button
                    onClick={() => onEdit?.(post.id)}
                    className="block w-full px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Edit className="w-4 h-4 inline mr-2" />
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete?.(post.id)}
                    className="block w-full px-4 py-2 text-sm text-red-600 hover:bg-red-100 dark:hover:bg-red-700"
                  >
                    <Trash className="w-4 h-4 inline mr-2" />
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 space-y-4">
            <p className="text-slate-700 dark:text-slate-300">{post.content}</p>

            {post.verse && (
              <blockquote className="pl-4 border-l-4 border-indigo-600 dark:border-indigo-400">
                <p className="text-slate-600 dark:text-slate-400 italic">
                  {post.verse.text}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">
                  {post.verse.reference}
                </p>
              </blockquote>
            )}
          </div>

          <div className="flex items-center gap-6 mt-6">
            <button
              onClick={() => onLike(post.id)}
              className={`flex items-center gap-2 text-sm ${
                post.isLiked
                  ? 'text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400'
              }`}
            >
              <ThumbsUp
                className={`w-5 h-5 ${post.isLiked ? 'fill-current' : ''}`}
              />
              {post.likes}
            </button>

            <button
              onClick={() => onComment(post.id)}
              className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <MessageCircle className="w-5 h-5" />
              {post.comments}
            </button>

            <button
              onClick={() => onShare(post.id)}
              className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Share2 className="w-5 h-5" />
              {post.shares}
            </button>

            <button
              onClick={() => onBookmark(post.id)}
              className={`ml-auto ${
                post.isBookmarked
                  ? 'text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400'
              }`}
            >
              <Bookmark
                className={`w-5 h-5 ${post.isBookmarked ? 'fill-current' : ''}`}
              />
            </button>
          </div>

          <div className="mt-4">
            <button
              onClick={toggleReactions}
              className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              {showReactions ? 'Hide Reactions' : 'Add Reaction'}
            </button>
            {showReactions && (
              <div className="flex gap-2 mt-2">
                {['❤️', '🙏', '👍', '🔥'].map((emoji) => (
                  <button
                    key={emoji}
                    onClick={() => onReact?.(post.id, emoji)}
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
                  >
                    {emoji} {post.reactions?.[emoji] || 0}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
