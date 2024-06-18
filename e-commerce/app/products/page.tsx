"use client"
import { useContext, useEffect, useState } from 'react';

import { fetchProducts } from '../../utils/api';
import { AuthContext } from '../Context/AuthContext';

const ProductsPage = () => {
  const { token } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    companyName: 'AMZ',
    categoryName: '',
    rating: 0,
    minPrice: 0,
    maxPrice: 1000,
    availability: true,
  });

  useEffect(() => {
    if (token) {
      fetchProducts(token, filters).then(setProducts);
    }
  }, [token, filters]);

  if (!token) {
    return <p>Loading...</p>;
  }

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Products</h1>
      <div>
        <input type="text" name="categoryName" placeholder="Category" onChange={handleFilterChange} />
        <input type="number" name="rating" placeholder="Rating" onChange={handleFilterChange} />
        <input type="number" name="minPrice" placeholder="Min Price" onChange={handleFilterChange} />
        <input type="number" name="maxPrice" placeholder="Max Price" onChange={handleFilterChange} />
        <select name="availability" onChange={handleFilterChange}>
          <option value="true">Available</option>
          <option value="false">Not Available</option>
        </select>
      </div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <a href={`/products/${product.id}`}>{product.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
