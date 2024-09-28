import React, { Component } from 'react';
import '../App.css'; // Import the CSS for custom styling
import { Card, Container, Row, Col, Button } from 'react-bootstrap'; // Import Bootstrap components

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: null,
    };
  }

  componentDidMount() {
    // Fetch user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('userData'));

    if (storedUser) {
      this.setState({
        userData: storedUser,
      });
    }
  }

  render() {
    const { userData } = this.state;

    if (!userData) {
      return <p className="text-center">No user data found. Please log in.</p>;
    }

    return (
      <>
        <Container className="my-5">
          <Row className="justify-content-center">
            <Col md={14} lg={14}>
              <Card className="shadow-lg border-0 rounded-6">
                <Card.Body>
                  <Card.Title className="text-center mb-4">
                    <h2 className="fw-bold">Welcome, {userData.fullname}!</h2>
                  </Card.Title>
                  <div className="profile-details">
                    <p><strong>Full Name:</strong> {userData.fullname}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>Mobile No:</strong> {userData.mobileNo}</p>
                    <p><strong>Address:</strong> {userData.address}</p>
                  </div>
                  <div className="text-center mt-4">
                    <Button variant="primary" onClick={() => alert('Edit Profile Clicked!')}>
                      Edit Profile
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
