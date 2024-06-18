import axios from 'axios';

const fetchProducts = async (
  token: string,
  filters: {
    companyName?: string;
    categoryName?: string;
    rating?: number;
    minPrice?: number;
    maxPrice?: number;
    availability?: boolean;
  }
) => {
  const { companyName, categoryName, rating, minPrice, maxPrice, availability } = filters;
  const response = await axios.get(
    `http://20.244.56.144/test/companies/${companyName}/categories/${categoryName}/products`,
    {
      params: {
        rating,
        minPrice,
        maxPrice,
        availability,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(token);

  return response.data;
};

const fetchProductById = async (token: string, id: string) => {
  const response = await axios.get(
    `http://20.244.56.144/test/products/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export { fetchProducts, fetchProductById };
