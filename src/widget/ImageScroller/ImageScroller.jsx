import { useState } from 'react';
import styles from './ImageScroller.module.css';

const images_const = [
  'https://cdn.dummyjson.com/product-images/2/1.jpg',
  'https://cdn.dummyjson.com/product-images/2/2.jpg',
  'https://cdn.dummyjson.com/product-images/2/3.jpg',
  'https://cdn.dummyjson.com/product-images/2/thumbnail.jpg',
  'https://cdn.dummyjson.com/product-images/2/2.jpg',
  'https://cdn.dummyjson.com/product-images/2/3.jpg',
  'https://cdn.dummyjson.com/product-images/2/thumbnail.jpg',
]

const ImageScroller = ({ images }) => {
  images = images_const;
  
  //const [images, setImages] = useState([...images_const]);
  const [mainImage, setMainImage] = useState(images[0]);
  
  return(
    <div className={styles.imageWrapper}>
      <div className={styles.imageContainer}>
        <img className={styles.mainImg} src={mainImage} alt="main-image" />
        <div className={styles.optionImgContainer}>
          {
            images?.map((image, index) => {
              return(
                <img
                  key={index}
                  src={image}
                  alt='option-image'
                  className={styles.optionImg}
                  onClick={() => setMainImage(images[index])}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default ImageScroller;
