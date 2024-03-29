import { useNavigate } from "react-router-dom";
import Button from "../../widget/Button/Button";
import Card from "../../widget/Card/Card";
import styles from './Product.module.css';

const Product = ({ product }) => {
  const navigate = useNavigate();
  
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return(
    <>
      <Card
        className={styles.card}
        onClick={() => handleProductClick(product.id)}
      >
        <div className={styles.cardTitle}>
          <h2>{product.title}</h2>
        </div>
        <div className={styles.cardBody}>
          <div>
            <img className={styles.thumbnail} src={product.thumbnail} alt="product-thumbnail" />
          </div>
          <div>
            <p>
              {product.description}
            </p>
          </div>
          
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.price}>Price: &#8377;{product.price}</div>
          <Button className={styles.cardAddBtn}>Add</Button>
        </div>
      </Card>
    </>
  )
};
  
export default Product;