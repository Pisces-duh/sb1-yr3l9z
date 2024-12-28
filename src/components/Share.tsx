import React from 'react';
import { Facebook, Twitter, Link, Mail, MessageSquare } from 'lucide-react';

export default function Share() {
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = 'Check out this amazing Bible verse!';

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`);
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${text} ${url}`);
        break;
      case 'email':
        window.open(`mailto:?subject=${text}&body=${url}`);
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        // You could add a toast notification here
        break;
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-800">Share</h2>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => handleShare('facebook')}
            className="flex items-center gap-3 p-4 rounded-lg border border-slate-200 hover:bg-slate-50"
          >
            <Facebook className="w-5 h-5 text-blue-600" />
            <span>Share on Facebook</span>
          </button>

          <button
            onClick={() => handleShare('twitter')}
            className="flex items-center gap-3 p-4 rounded-lg border border-slate-200 hover:bg-slate-50"
          >
            <Twitter className="w-5 h-5 text-blue-400" />
            <span>Share on Twitter</span>
          </button>

          <button
            onClick={() => handleShare('whatsapp')}
            className="flex items-center gap-3 p-4 rounded-lg border border-slate-200 hover:bg-slate-50"
          >
            <MessageSquare className="w-5 h-5 text-green-500" />
            <span>Share on WhatsApp</span>
          </button>

          <button
            onClick={() => handleShare('email')}
            className="flex items-center gap-3 p-4 rounded-lg border border-slate-200 hover:bg-slate-50"
          >
            <Mail className="w-5 h-5 text-slate-600" />
            <span>Share via Email</span>
          </button>

          <button
            onClick={() => handleShare('copy')}
            className="flex items-center gap-3 p-4 rounded-lg border border-slate-200 hover:bg-slate-50"
          >
            <Link className="w-5 h-5 text-slate-600" />
            <span>Copy Link</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
        <h3 className="text-lg font-medium text-slate-800 mb-4">Embed</h3>
        <div className="space-y-4">
          <textarea
            className="w-full h-24 p-3 border border-slate-200 rounded-lg font-mono text-sm"
            readOnly
            value={`<iframe src="${window.location.href}" width="100%" height="400" frameborder="0"></iframe>`}
          />
          <button
            onClick={() => navigator.clipboard.writeText(`<iframe src="${window.location.href}" width="100%" height="400" frameborder="0"></iframe>`)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Copy Embed Code
          </button>
        </div>
      </div>
    </div>
  );
}