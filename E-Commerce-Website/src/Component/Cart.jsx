import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]); // State for cart items

  // Retrieve cart items from localStorage
  const getCartItems = () => {
    const items = localStorage.getItem('cartItems');
    return items ? JSON.parse(items) : [];
  };

  // Load cart items on component mount
  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  // Remove item from cart or decrease its quantity
  const handleRemove = (index) => {
    const updatedCartItems = [...cartItems];

    // Decrease the quantity by 1
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
    } else {
      // Remove the product if quantity reaches zero
      updatedCartItems.splice(index, 1);
    }

    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Update localStorage
  };

  // Buy the item
  const handleBuy = (item) => {
    alert(`Purchased: ${item.title}`);
    // Add your purchase logic here
  };

  // Calculate total price of the cart items
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <>
      <h2 className="text-center mb-4">Your Cart</h2>
      <Container>
        {/* Check if cart is empty */}
        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <Row>
            <Col md={8} sm={12}>
              <div className="cart-items">
                {cartItems.map((item, index) => (
                  <Card key={index} className="cart-item mb-3 shadow">
                    <Row noGutters>
                      <Col md={4} sm={12}>
                        <img src={item.image} alt={item.title} className="cart-item-img img-fluid" />
                      </Col>
                      <Col md={8} sm={12}>
                        <Card.Body>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text>
                            <strong>Price:</strong> ${item.price.toFixed(2)} <br />
                            <strong>Quantity:</strong> {item.quantity}
                          </Card.Text>
                          <Button variant="success" onClick={() => handleBuy(item)} className="me-2">Buy</Button>
                          <Button variant="danger" onClick={() => handleRemove(index)}>Remove</Button>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                ))}
              </div>
            </Col>
            <Col md={4} sm={12}>
              <div className="cart-summary p-3 border rounded shadow">
                <h3>Total Price: <span className="text-success">${calculateTotalPrice()}</span></h3>
                <Button className="payment-button mt-3 btn-block" variant="primary" onClick={() => alert("Proceeding to payment...")}>
                  Proceed to Payment
                </Button>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default Cart;
