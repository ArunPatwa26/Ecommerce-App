import React, { Component } from "react";
import '../App.css';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  // Fetching products from API
  getProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((json) => this.setState({ products: json }))
      .catch((error) => console.error('There was a problem with the fetch operation:', error));
  }

  componentDidMount() {
    this.getProducts();
  }

  addToCart = (product) => {
    const updatedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Check if the product already exists in the cart
    const existingProductIndex = updatedCart.findIndex(item => item.id === product.id);
    
    if (existingProductIndex > -1) {
      // If it exists, increase the quantity
      updatedCart[existingProductIndex].quantity += 1;
    } else {
      // If not, add the product with quantity 1
      const productWithQuantity = { ...product, quantity: 1 };
      updatedCart.push(productWithQuantity);
    }
    
    // Update localStorage
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));

    // Optional: Call a prop method to update cart count in Navbar (if applicable)
    this.props.addToCart(product);
  };
  
  addToWishList = (product) => {
    const updatedWishList = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    
    // Check if the product already exists in the wish list
    const existingProductIndex = updatedWishList.findIndex(item => item.id === product.id);
    
    if (existingProductIndex > -1) {
      // If it exists, you might want to handle this case differently,
      // for now, we just alert the user.
      alert("This product is already in your wish list.");
    } else {
      // If not, add the product with quantity 1
      const productWithQuantity = { ...product, quantity: 1 };
      updatedWishList.push(productWithQuantity);
    }
    
    // Update localStorage
    localStorage.setItem('wishlistItems', JSON.stringify(updatedWishList));

    // Optional: Call a prop method to update wish list count in Navbar (if applicable)
    this.props.addToWishList(product);
  };

  render() {
    // Destructure searchQuery from props with a default value
    const { searchQuery = '' } = this.props;

    // Filter products based on search query
    const filteredProducts = this.state.products.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="container">
        <div className="row">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => {
              return (
                <div key={index} className="col-md-4 mb-4">
                  <div className="card h-100">
                    <img src={product.image} className="card-img-top" alt={product.title} style={{ height: "300px", objectFit: "contain" }} />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">${product.price}</p>
                      <div className="d-flex justify-content-between">
                        <button className="btn btn-primary" onClick={() => this.addToCart(product)}>Add To Cart</button>
                        <button className="btn btn-outline-secondary" onClick={() => this.addToWishList(product)}>Add To Wish List</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h2 className="col-12 text-center">No products found for "{searchQuery}"</h2>
          )}
        </div>
      </div>
    );
  }
}
