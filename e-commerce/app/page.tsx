"use client"
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './Context/AuthContext';


const HomePage = () => {
  const { token, fetchToken } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      fetchToken().then(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [token, fetchToken]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Welcome to the Product Showcase</h1>
      <nav>
        <ul>
          <li>
            <Link href="/products">
              View All Products
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
