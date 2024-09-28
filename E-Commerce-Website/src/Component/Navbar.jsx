import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./../App.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isLoggedIn: false,
      username: "",
      searchQuery: ""
    };
  }

  componentDidMount() {
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    if (storedUser && storedUser.isLoggedIn) {
      this.setState({
        isLoggedIn: true,
        username: storedUser.fullname
      });
    }
  }

  handleLogout = () => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    if (storedUser) {
      storedUser.isLoggedIn = false;
      localStorage.setItem("userData", JSON.stringify(storedUser));

      this.setState({
        isLoggedIn: false,
        username: ""
      });

      window.location.href = "/login";
    }
  };

  handleSearchChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", this.state.searchQuery);
    // Implement search logic or redirect as needed
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            E-Commerce App
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <form onSubmit={this.handleSearchSubmit} className="d-row mx-auto">
              <input
                type="text"
                className="form-control me-2"
                placeholder="Search products by name or category..."
                value={this.state.searchQuery}
                onChange={this.handleSearchChange}
              />
              <button type="submit" className="btn btn-outline-light">Search</button>
            </form>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  Cart: {this.props.cartCount}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/wishlist" className="nav-link">
                  Wishlist: {this.props.wishlistCount}
                </NavLink>
              </li>

              {this.state.isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/profile" className="nav-link">
                      Welcome, {this.state.username}
                    </NavLink>
                  </li>
                  <li className="nav-item" style={{ cursor: "pointer" }} onClick={this.handleLogout}>
                    <span className="nav-link">Logout</span>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">Login</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/sign" className="nav-link">Sign In</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
