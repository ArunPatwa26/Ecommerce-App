import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const query = new URLSearchParams(useLocation().search).get('query');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Function to fetch products from the API
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  // Filter products based on the search query
  useEffect(() => {
    if (query) {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [query, products]);

  return (
    <div>
      <h2>Search Results for: "{query}"</h2>
      {filteredProducts.length > 0 ? (
        <div className="container row" style={{ maxWidth: "100%" }}>
          {filteredProducts.map((product) => (
            <div key={product.id} className="column box">
              <img src={product.image} alt={product.title} style={{ height: "300px" }} />
              <h3>{product.title}</h3>
              <h4>${product.price}</h4>
              {/* You can add buttons to add to cart or wishlist here */}
            </div>
          ))}
        </div>
      ) : (
        <h3>No products found for "{query}"</h3>
      )}
    </div>
  );
};

export default SearchResults;
