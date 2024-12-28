import React, { useState, useEffect } from 'react';

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const fetchBookmarks = async () => {
      const response = await fetch('http://localhost:5000/bookmarks?userId=1'); // Replace with actual user ID
      const data = await response.json();
      setBookmarks(data);
    };

    fetchBookmarks();
  }, []);

  return (
    <div>
      <h1>Your Bookmarks</h1>
      <ul>
        {bookmarks.map((bookmark, index) => (
          <li key={index}>
            {bookmark.book} - Chapter {bookmark.chapter} at {bookmark.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bookmarks;
