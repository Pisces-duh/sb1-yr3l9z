import React, { useState } from 'react';
import {
  MessageCircle,
  Users,
  Filter,
  TrendingUp,
  Search,
  Loader,
} from 'lucide-react';
import CommunityPost from './CommunityPost';
import CreatePost from './CreatePost';

const SAMPLE_POSTS = [
  // Same sample posts as before
];

export default function Community() {
  const [filter, setFilter] = useState('trending');
  const [sortOption, setSortOption] = useState('recent');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [posts, setPosts] = useState(SAMPLE_POSTS);
  const [loadingMore, setLoadingMore] = useState(false);

  const handlePostAction = (action: string, postId: string) => {
    console.log(`${action} post:`, postId);
  };

  const handleNewPost = (post: { content: string; verse?: string }) => {
    const newPost = {
      id: String(posts.length + 1),
      user: {
        name: 'Current User',
        avatar:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop',
      },
      content: post.content,
      timestamp: new Date(),
      likes: 0,
      comments: 0,
      shares: 0,
      isLiked: false,
      isBookmarked: false,
      verse: post.verse
        ? {
            reference: post.verse,
            text: 'Verse text will be fetched here',
          }
        : undefined,
    };
    setPosts([newPost, ...posts]);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Optionally filter posts based on search
  };

  const loadMorePosts = () => {
    setLoadingMore(true);
    setTimeout(() => {
      // Simulate fetching more posts
      const morePosts = SAMPLE_POSTS.map((post) => ({
        ...post,
        id: String(Number(post.id) + posts.length),
      }));
      setPosts([...posts, ...morePosts]);
      setLoadingMore(false);
    }, 1500);
  };

  return (
    <div className="space-y-6 bg-gray-100 text-slate-800">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">Community</h2>
          <p className="text-slate-500 mt-1">
            Connect with fellow believers and share your insights
          </p>
        </div>
        <button
          onClick={() => setShowCreatePost(true)}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          <MessageCircle className="w-5 h-5" />
          Create Post
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search posts..."
            className="w-full px-4 py-2 rounded-lg border bg-gray-100 border-gray-300 text-slate-800"
          />
          <Search className="absolute right-3 top-3 text-gray-400" />
        </div>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="px-4 py-2 rounded-lg border bg-gray-100 border-gray-300 text-slate-800"
        >
          <option value="recent">Most Recent</option>
          <option value="popular">Most Popular</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2">
        <button
          onClick={() => setFilter('trending')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${
            filter === 'trending'
              ? 'bg-indigo-600 text-white'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          Trending
        </button>
        <button
          onClick={() => setFilter('groups')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${
            filter === 'groups'
              ? 'bg-indigo-600 text-white'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <Users className="w-4 h-4" />
          Study Groups
        </button>
        <button
          onClick={() => setFilter('all')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${
            filter === 'all'
              ? 'bg-indigo-600 text-white'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <Filter className="w-4 h-4" />
          All Posts
        </button>
      </div>

      <CreatePost
        isOpen={showCreatePost}
        onClose={() => setShowCreatePost(false)}
        onSubmit={handleNewPost}
      />

      <div className="space-y-6">
        {posts.map((post) => (
          <CommunityPost
            key={post.id}
            post={post}
            onLike={(id) => handlePostAction('like', id)}
            onComment={(id) => handlePostAction('comment', id)}
            onShare={(id) => handlePostAction('share', id)}
            onBookmark={(id) => handlePostAction('bookmark', id)}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <button
          onClick={loadMorePosts}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          {loadingMore ? (
            <Loader className="animate-spin w-5 h-5" />
          ) : (
            'Load More'
          )}
        </button>
      </div>
    </div>
  );
}
