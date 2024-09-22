import React, { Component } from 'react'
import "./../App.css"

export default class Cart extends Component {
  render() {
    return (
      <>
      <div className="cart-page column">
        <div className="cart1">
          <div className="left row">
            <div className="header">
              <h2>Cart Page</h2>
            </div>
            <div className="cart-body row">
              <div className="product-img ">
                <img src="#" alt="product img" />
              </div>
              <div className="product-details row">
                <h2 className="product-name">product Name</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}
