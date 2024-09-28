import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap"; // Import Bootstrap components

const WishList = () => {
  const [wishListItems, setWishListItems] = useState([]); // State for wish list items

  // Retrieve wish list items from localStorage
  const getWishListItems = () => {
    const items = localStorage.getItem("wishlistItems");
    return items ? JSON.parse(items) : [];
  };

  // Load wish list items on component mount
  useEffect(() => {
    setWishListItems(getWishListItems());
  }, []);

  // Remove item from wish list using index
  const handleRemoveItem = (index) => {
    const updatedWishListItems = [...wishListItems]; // Copy current state
    updatedWishListItems.splice(index, 1); // Remove the item at the specified index
    setWishListItems(updatedWishListItems); // Update state
    localStorage.setItem("wishlistItems", JSON.stringify(updatedWishListItems)); // Update localStorage
  };

  // Buy the item (for demonstration purposes)
  const handleBuy = (item) => {
    alert(`Purchased: ${item.title}`);
    // Add your purchase logic here
  };

  return (
    <Container className="my-5 d-column">
      <h2 className="text-center mb-4">Your Wish List</h2>
      {wishListItems.length === 0 ? (
        <p className="text-center">Your Wish List is empty.</p>
      ) : (
        <Row>
          {wishListItems.map((item, index) => (
            <Col md={6} lg={4} className="mb-4" key={index}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    <strong>Price:</strong> ${item.price.toFixed(2)} <br />
                    <strong>Quantity:</strong> {item.quantity}
                  </Card.Text>
                  <div className="mt-auto">
                    <Button
                      variant="success"
                      className="w-100 mb-2"
                      onClick={() => handleBuy(item)}
                    >
                      Buy
                    </Button>
                    <Button
                      variant="danger"
                      className="w-100"
                      onClick={() => handleRemoveItem(index)}
                    >
                      Remove
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default WishList;
