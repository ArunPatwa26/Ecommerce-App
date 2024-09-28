import React, { Component } from 'react';
import Product from './Pages/Product';
import Navbar from './Component/Navbar';
import Cart from './Component/Cart';
import { Routes, Route } from 'react-router-dom';
import Sign from './Component/Sign';
import Login from './Component/Login';
import ProfilePage from './Component/ProfilePage';
import WishList from './Pages/WishList';
import SearchResults from './Component/SearchResults';
import Footer from './Component/Footer';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      wishlist: [],
      products: []
    };
  }

  componentDidMount() {
    this.loadCartAndWishlist();
  }

  loadCartAndWishlist = () => {
    const cartItems = localStorage.getItem('cartItems');
    const wishlistItems = localStorage.getItem('wishlistItems');

    this.setState({
      cart: cartItems ? JSON.parse(cartItems) : [],
      wishlist: wishlistItems ? JSON.parse(wishlistItems) : []
    });
  };

  addToCart = (product) => {
    this.setState(prevState => {
      const cart = [...prevState.cart];
      const existingProductIndex = cart.findIndex(item => item.id === product.id);
      
      if (existingProductIndex >= 0) {
        cart[existingProductIndex].quantity += 1; // Increase quantity
      } else {
        cart.push({ ...product, quantity: 1 }); // Add new product
      }

      localStorage.setItem('cartItems', JSON.stringify(cart)); // Update localStorage
      return { cart };
    });
  };

  addToWishList = (product) => {
    this.setState(prevState => {
      const wishlist = [...prevState.wishlist];
      const existingProductIndex = wishlist.findIndex(item => item.id === product.id);
      
      if (existingProductIndex === -1) {
        wishlist.push({ ...product, quantity: 1 }); // Add product with quantity
        localStorage.setItem('wishlistItems', JSON.stringify(wishlist)); // Update localStorage
      }
      return { wishlist };
    });
  };

  removeFromCart = (index) => {
    this.setState(prevState => {
      const updatedCart = [...prevState.cart];
      
      if (updatedCart[index].quantity > 1) {
        updatedCart[index].quantity -= 1; // Decrease quantity
      } else {
        updatedCart.splice(index, 1); // Remove product
      }

      localStorage.setItem('cartItems', JSON.stringify(updatedCart)); // Update localStorage
      return { cart: updatedCart };
    });
  };

  removeFromWishList = (index) => {
    this.setState(prevState => {
      const updatedWishlist = [...prevState.wishlist];
      updatedWishlist.splice(index, 1); // Remove product
      localStorage.setItem('wishlistItems', JSON.stringify(updatedWishlist)); // Update localStorage
      return { wishlist: updatedWishlist };
    });
  };

  render() {
    return (
      <>
        <Navbar cartCount={this.state.cart.length} wishlistCount={this.state.wishlist.length} />
        <Routes>
          <Route path="/" element={<Product addToCart={this.addToCart} addToWishList={this.addToWishList} />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path='/cart' element={<Cart cartItems={this.state.cart} removeFromCart={this.removeFromCart} />} />
          <Route path='/wishlist' element={<WishList wishlistItems={this.state.wishlist} removeFromWishList={this.removeFromWishList} />} />
          <Route path='/search' element={<SearchResults wishlistItems={this.state.wishlist} removeFromWishList={this.removeFromWishList} />} />
        </Routes>
        <Footer/>
      </>
    );
  }
}
