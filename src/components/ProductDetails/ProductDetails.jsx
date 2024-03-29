import { useEffect, useState } from "react";
import API from "../../utilities/API/APICalls";
import { useParams } from "react-router-dom";
import StartRaiting from "../../widget/StarRating/StarRaiting";
import styles from './ProductDetails.module.css';
import ImageScroller from "../../widget/ImageScroller/ImageScroller";

const ProductDetails = () => {
  const { id }  = useParams();
  const [ product, setProduct ] = useState({});
  
  useEffect(() => {
    API.get(`/products/${id}`).then((response) => {
      const productItem = response.data;

      console.log('Details ', productItem);
      
      setProduct(productItem);
    });
  }, []);

  return(
    <div className={styles.productDetailsWrapper}>
      <div className={styles.title}>
        <h1>{product?.title}</h1>
        <StartRaiting rating={product.rating} className={styles.star}/>
      </div>
      <div className={styles.productContainer}>
       <div>
        <ImageScroller/>
       </div>
        <div className={styles.infoConatiner}>
          <ul className={styles.detailsBody}>
            <li>Brand: {product.brand}</li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default ProductDetails;