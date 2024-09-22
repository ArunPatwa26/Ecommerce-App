import React, { Component } from 'react'
import "./../App.css"
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    constructor(props){
        super(props);
    
    }


   
  render() {
    return (
        

        <>
        <nav>
            <div className="logo">
                <Link to="/" style={{color:"white", textDecoration:"none"}} >
                <h1>E-Commerce App</h1>
                </Link>
            </div>
            <div className="navbar">
                <ul>
                    <Link to="cart" style={{color:"white", textDecoration:"none"}}><li>Cart: {this.props.cart.length}</li></Link>
                    <li>Wishlist: {this.props.wishlist.length}</li>
                    <li>Login</li>
                    <Link to="sign" style={{color:"white", textDecoration:"none"}}>
                    <li>Signin</li>
                    </Link>
                </ul>
            </div>
        </nav>
        </>
    )
  }
}
