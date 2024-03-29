import { useEffect, useState, useCallback } from "react";
import ProductService from "../../utilities/Services/Product";
import Product from "../Product/Product";
import styles from './ProductList.module.css';
import Search from "../Search/Search";

const ProductList = () => {
 const [ products, setProducts ] = useState([]);

 const getProducts = useCallback(async(isSearch = false, searchTerm = '') => {
  if (isSearch) {
    const searchResponse = await ProductService.search(searchTerm);
    const products = searchResponse.data.products;

    setProducts([...products]);

  } else {
    const response = await ProductService.getProducts();
    const products = response.data.products;
  
    setProducts([...products]);
  }
 }, []);

  useEffect(() => {
    getProducts(false);
  }, [getProducts]);

  const handleSearch = useCallback(async (searchTerm) => {
    console.log('Serach Text ', searchTerm);
    getProducts(true, searchTerm);
  }, [getProducts]);

  const onClearSearch = useCallback(() => {
    getProducts(false);
  }, [getProducts]);
  
  return(
    <div className={styles.pageTitle}>
      <h1>Fun Product List</h1>
      <div>
        <Search
          search={handleSearch}
          clear={onClearSearch}
        />
      </div>
      <ul className={styles.list}>
        {
          products?.map(product => {
            return(
              <li key={product.id} className={styles.cardList}>
                <Product product={product}/>
              </li>
            );
          })
        }
      </ul>
    </div>
  )
};

export default ProductList;