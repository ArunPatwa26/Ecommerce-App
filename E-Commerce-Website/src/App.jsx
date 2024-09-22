import React, { Component } from 'react'
import Product from './Pages/Product'
import Navbar from './Component/Navbar';
import Cart from './Component/Cart';
import {  Routes,Route } from 'react-router-dom';
import Sign from './Component/Sign';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      wishlist:[],
      products: []
       
    };
  }

   addToCart = ((productIndex) =>{
    const cart =this.state.cart;
    cart.push(productIndex);
    this.setState({cart: cart});
    // console.log(cart)
  });
  addToWishList=((productIndex)=> {
    const wishlist = this.state.wishlist;
    wishlist.push(productIndex);
    this.setState({wishlist: wishlist});
    // console.log(wishlist)
  })
  render() {
    return (
      <>
      <Navbar cart={this.state.cart} wishlist={this.state.wishlist}/>
      <Routes>
        <Route path="/"  element={<Product addToCart={this.addToCart} addToWishList={this.addToWishList}/>}/>
        <Route path="/sign"  element={<Sign/>}/>
        <Route
        path='cart'
        element={<Cart/>}
        />
      </Routes>
      </>
    )
  }
}
