import API from "../API/APICalls"

const ProductService = {
  getProducts: () => {
    return API.get('/products');
  },
  search: (searchTerm) => {
    return API.get(`products/search?q=${searchTerm}`);
  }
}

export default ProductService;