"use client"
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';


import { AuthContext } from '@/app/Context/AuthContext';
import { fetchProductById } from '@/utils/api';

const ProductDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { token } = useContext(AuthContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (token && id) {
      fetchProductById(token, id).then(setProduct);
    }
  }, [token, id]);

  if (!token || !product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Availability: {product.availability ? 'Available' : 'Not Available'}</p>
    </div>
  );
};

export default ProductDetails;
