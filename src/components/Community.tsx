import React, { useState } from 'react';
import {
  MessageCircle,
  Share2,
  ThumbsUp,
  Users,
  Bookmark,
  PlusCircle,
  Filter,
} from 'lucide-react';

export default function Community() {
  const [activeTab, setActiveTab] = useState('posts'); // Tab selection: 'posts' or 'groups'

  const samplePosts = [
    {
      id: '1',
      user: 'John Doe',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop',
      content:
        "Reflecting on today's reading from Psalms 23. What a beautiful reminder of God's protection and provision!",
      likes: 24,
      comments: 12,
      shares: 5,
      timestamp: '2 hours ago',
      isBookmarked: false,
    },
  ];

  const studyGroups = [
    {
      id: '1',
      name: 'Weekly Bible Study',
      nextMeeting: 'Tomorrow, 7 PM',
      participants: 25,
    },
    {
      id: '2',
      name: 'Romans Study Group',
      nextMeeting: 'Sunday, 3 PM',
      participants: 18,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-slate-800">Community</h2>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Create Post
          </button>
          <button className="px-4 py-2 bg-gray-200 text-indigo-600 border border-indigo-600 rounded-lg hover:bg-gray-300">
            <PlusCircle className="w-5 h-5 inline" /> Create Group
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 text-sm">
        <button
          onClick={() => setActiveTab('posts')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'posts'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-slate-600 hover:bg-gray-300'
          }`}
        >
          Posts
        </button>
        <button
          onClick={() => setActiveTab('groups')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'groups'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-slate-600 hover:bg-gray-300'
          }`}
        >
          Study Groups
        </button>
      </div>

      {/* Content */}
      {activeTab === 'posts' && (
        <div className="grid grid-cols-1 gap-6">
          {samplePosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
            >
              <div className="flex items-start gap-4">
                <img
                  src={post.avatar}
                  alt={`${post.user} avatar`}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-slate-900">{post.user}</h3>
                    <span className="text-sm text-slate-500">
                      {post.timestamp}
                    </span>
                  </div>
                  <p className="text-slate-700 mb-4">{post.content}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <button className="flex items-center gap-1 hover:text-indigo-600">
                      <ThumbsUp className="w-4 h-4" />
                      {post.likes} Likes
                    </button>
                    <button className="flex items-center gap-1 hover:text-indigo-600">
                      <MessageCircle className="w-4 h-4" />
                      {post.comments} Comments
                    </button>
                    <button className="flex items-center gap-1 hover:text-indigo-600">
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                    <button
                      className={`ml-auto hover:text-indigo-600 ${
                        post.isBookmarked ? 'text-indigo-600' : ''
                      }`}
                    >
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'groups' && (
        <div className="grid grid-cols-1 gap-6">
          {studyGroups.map((group) => (
            <div
              key={group.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-indigo-600" />
                  <div>
                    <p className="font-medium text-slate-900">{group.name}</p>
                    <p className="text-sm text-slate-600">
                      Next meeting: {group.nextMeeting}
                    </p>
                  </div>
                </div>
                <button className="px-4 py-2 text-sm text-indigo-600 border border-indigo-200 rounded-lg hover:bg-indigo-50">
                  Join
                </button>
              </div>
              <p className="text-sm text-slate-500 mt-2">
                {group.participants} participants
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
