import { useEffect, useState } from 'react';
import axios from 'axios';

const useProductFetcher = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then((res) => setAllProducts(res.data))
      .catch((err) => console.error("Failed to load products", err));
  }, []);

  // Filter by categories
  const getByCategory = (category) => allProducts.filter(p => p.category === category);

  return {
    nailsProducts: getByCategory('nails'),
    beautyProducts: getByCategory('beauty'),
    menFashion: getByCategory('men'),
    womenFashion: getByCategory('women'),
    kidsFashion: getByCategory('kids'),
    studioServices: getByCategory('studio')
  };
};

export default useProductFetcher;
