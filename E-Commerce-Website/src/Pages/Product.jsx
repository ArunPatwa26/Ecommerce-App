import React, { Component } from "react";
import '.././App.css'

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
          cart: [],
          wishlist:[],
          products: []
           
        };
      }
    
    
      getProducts() {
        console.log("get products")
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((json) => this.setState({ products: json }));
      }
    
    
      componentDidMount(){
        console.log("Mount")
    
        this.getProducts()
      }
    
      componentDidUpdate() {
        console.log("Update")
      }
    
      render() {
        console.log(this.state)
        return (
          <>
           
            <div className="container row" style={{maxWidth:"100%" }}>
              {this.state.products.map((product, index) => {
                return (
                  <div key={index} className="column box">
                    <img src={product.image} alt="" style={{height: "300px"}}/>
                    <h1>{product.title}</h1>
                    {/* <p>{product.description}</p> */}
                    <h3>{product.price}</h3>
                    <div className="row btn">

                    <button onClick={() => this.props.addToCart(index)}>Add To Cart</button>
                    <button onClick={() => this.props.addToWishList(index)}>Add To Wish List</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        );
      }
}