import React, { useState } from 'react'
import './Gallery.css'
const Gallery = () => {
  const imageObjects = [
    {
      id: 1,
      name: 'Image 1',
      src: 'Gal1.jpg',
    },
    {
      id: 2,
      name: 'Image 2',
      src: 'Gal2.jpg',
    },
    {
      id: 3,
      name: 'Image 3',
      src: 'Gal3.jpg',
    },
    {
      id: 4,
      name: 'Image 4',
      src: 'Gal4.jpg',
    },
    {
      id: 5,
      name: 'Image 5',
      src: 'Gal5.jpg',
    },
    {
      id: 6,
      name: 'Image 6',
      src: 'Gal6.jpg',
    },
    {
      id: 7,
      name: 'Image 7',
      src: 'Gal7.jpg',
    },
    {
      id: 8,
      name: 'Image 8',
      src: 'Gal8.jpg',
    },
    {
      id: 9,
      name: 'Image 9',
      src: 'Gal9.jpg',
    },
    {
      id: 10,
      name: 'Image 10',
      src: 'Gal10.jpg',
    },
    {
      id: 11,
      name: 'Image 11',
      src: 'Gal11.jpg',
    },
    {
      id: 12,
      name: 'Image 12',
      src: 'Gal12.jpg',
    },
    {
      id:13,
      name: 'Image 13',
      src: 'Gal13.jpg',
    },
    {
      id: 14,
      name: 'Image 14',
      src: 'Gal14.jpg',
    },
    {
      id: 15,
      name: 'Image 15',
      src: 'Gal15.jpg',
    },
    {
      id: 16,
      name: 'Image 16',
      src: 'Gal16.jpg',
    },
    {
      id: 17,
      name: 'Image 17',
      src: 'Gal17.jpg',
    },
    {
      id: 18,
      name: 'Image 18',
      src: 'Gal18.jpg',
    },
    {
      id: 19,
      name: 'Image 19',
      src: 'Gal19.jpg',
    },
    {
      id: 20,
      name: 'Image 20',
      src: 'Gal20.jpg',
    },
    {
      id: 21,
      name: 'Image 21',
      src: 'Gal21.jpg',
    },
    {
      id: 22,
      name: 'Image 22',
      src: 'Gal22.jpg',
    },
    {
      id: 23,
      name: 'Image 23',
      src: 'Gal23.jpg',
    },
    {
      id: 24,
      name: 'Image 24',
      src: 'Gal24.jpg',
    },
    {
      id: 25,
      name: 'Image 25',
      src: 'Gal25.jpg',
    },
    {
      id: 26,
      name: 'Image 26',
      src: 'Gal26.jpg',
    },
    {
      id: 27,
      name: 'Image 27',
      src: 'Gal27.jpg',
    },
    {
      id:28,
      name: 'Image 28',
      src: 'Gal28.jpg',
    },
    {
      id: 29,
      name: 'Image 29',
      src: 'Gal29.jpg',
    },
    {
      id: 30,
      name: 'Image 30',
      src: 'Gal30.jpg',
    },
    {
      id: 31,
      name: 'Image 31',
      src: 'Gal31.jpg',
    },
    {
      id: 32,
      name: 'Image 32',
      src: 'Gal32.jpg',
    },
    {
      id: 33,
      name: 'Image 33',
      src: 'Gal33.jpg',
    },
    {
      id: 34,
      name: 'Image 34',
      src: 'Gal34.jpg',
    },
    {
      id: 35,
      name: 'Image 35',
      src: 'Gal35.jpg',
    },
    {
      id: 36,
      name: 'Image 36',
      src: 'Gal36.jpg',
    },
    {
      id: 37,
      name: 'Image 37',
      src: 'Gal37.jpg',
    },
    {
      id: 38,
      name: 'Image 38',
      src: 'Gal38.jpg',
    },
    {
      id: 39,
      name: 'Image 39',
      src: 'Gal39.jpg',
    },
    {
      id: 40,
      name: 'Image 40',
      src: 'Gal40.jpg',
    },
    {
      id: 41,
      name: 'Image 41',
      src: 'Gal41.jpg',
    },
    {
      id: 42,
      name: 'Image 42',
      src: 'Gal42.jpg',
    },
    {
      id: 43,
      name: 'Image 43',
      src: 'Gal43.jpg',
    },
    {
      id: 44,
      name: 'Image 44',
      src: 'Gal44.jpg',
    },
    // Add more image objects as needed
  ];
  const [images , setImages] =useState(imageObjects)
  const imagesPerRow = 8
const [loadMoreImages,setLoadMoreImages] = useState(imagesPerRow)


const clickHandler =()=>{
  setLoadMoreImages(loadMoreImages + imagesPerRow)
}

  return (
    <>
    <div className="gallery-head">
      <h1>"Love Story in Frames: Wedding Photography Gallery"</h1>
      <p>"Step into our world of wedding photography and immerse yourself in the magic of love. Our gallery is a visual celebration of unforgettable moments, each frame a testament to the beauty of weddings."</p>
    </div>
    <div className="gallery">
        {
          images.slice(0,loadMoreImages)?.map((items,index)=>{
            return(
              <>
              <div className="gal-img">
              <img src={`/images/${items.src}`} alt="" srcset="" className='gal-img'
              />
              </div>         
              
              
              </>
              
            )
          
          })
        }
    </div>
    <div className='loadMoreBtn'>
    <button className='loadbtn' onClick={clickHandler} >Load More </button>
    </div>
    
    
    
    </>
  );
}

export default Gallery