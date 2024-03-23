import React from 'react';
import Masonry from 'react-masonry-css';
import './MasonryLayout.css'

const MyMasonryComponent = () => {
    // Define your breakpoints and corresponding column counts
    const breakpointColumnsObj = {
      default: 4,  // default number of columns
      1100: 3,     // when the viewport width is 1100px or greater, show 3 columns
      700: 2,      // when the viewport width is 700px or greater, show 2 columns
      500: 1       // when the viewport width is 500px or greater, show 1 column
    };
  
    // Sample items to display in the masonry layout
    const items = [
      { id: 1, color: '#8D6E63', height: 200 }, // Example item with specific color and height
      { id: 2, color: '#FF7043', height: 300 },
      { id: 3, color: '#26A69A', height: 250 },
      // Add more items...
    ];
  
    return (
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
        style={{ backgroundColor: 'grey' }}  // Setting the background color to grey
      >
        {items.map(item => (
          <div key={item.id} style={{
            background: item.color,
            height: `${item.height}px`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white'
          }}>
            Item {item.id}
          </div>
        ))}
      </Masonry>
    );
  };
  
  export default MyMasonryComponent;