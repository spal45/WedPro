import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [items, setItems] = useState([]); // Store all gallery items
  const [visibleItems, setVisibleItems] = useState([]); // Store visible gallery items
  const itemsPerPage = 10; // Number of items to load at once
  const scrollThreshold = 200; // Threshold before loading more items (in pixels)

  // Function to generate mock items (replace with your own data)
  const generateItems = (count) => {
    const newItems = [];
    for (let i = 0; i < count; i++) {
      newItems.push(`Item ${items.length + i + 1}`);
    }
    return newItems;
  };

  // Function to load more content
  const loadMoreContent = () => {
    const newItems = generateItems(itemsPerPage);
    setItems((prevItems) => [...prevItems, ...newItems]);
  };

  // Function to check if the user has scrolled to the bottom
  const isScrolledToBottom = () => {
    return (
      window.innerHeight + window.scrollY + scrollThreshold >=
      document.body.scrollHeight
    );
  };

  // Event listener for scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (isScrolledToBottom()) {
        loadMoreContent();
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Update visible items whenever items or itemsPerPage change
  useEffect(() => {
    setVisibleItems(items.slice(0, visibleItems.length + itemsPerPage));
  }, [items, itemsPerPage]);

  return (
    <div>
      <div className="gallery">
        {visibleItems.map((item, index) => (
          <div className="gallery-item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;