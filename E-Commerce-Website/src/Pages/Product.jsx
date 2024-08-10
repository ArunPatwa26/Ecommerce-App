import React, { Component } from "react";

export default class Product extends Component {
  render() {
    return (
      <>
        <nav className="row">
          <div className="logo row">
            <h1>E-Commerce</h1>
          </div>
          <div className="navbar row">
            <ul className="row">
              <li className="list-btn">
                <a href="#">Cart</a>
              </li>
              <li className="list-btn1">
                <a href="#">Wish List</a>
              </li>
              <li className="list-btn2">
                <a href="#">Login</a>
              </li>
            </ul>
          </div>
        </nav>
        {/* Container */}
        <div className="container column c-center">
          <div className="row row1">
            <div className="box box1">
              <div className="images row r-center">
                <img src="src\assests\camera.jpeg" alt="Camera" />
              </div>
              <h3>Camera</h3>
              <p>
                A camera is a device that captures and stores images and videos,
                either digitally or chemically...
              </p>
              <div className="row r-center">
                <button>Add To cart</button>
                <button>Add to wish list</button>
              </div>
            </div>
            <div className="box box2">
              <div className="images row r-center">
                <img src="src\assests\videogames.jpeg" alt="phone" />
              </div>
              <h3>Video Games</h3>
              <p>
                A camera is a device that captures and stores images and videos,
                either digitally or chemically...
              </p>
              <div className="row r-center">
                <button>Add To cart</button>
                <button>Add to wish list</button>
              </div>
            </div>
            <div className="box box3">
              <div className="images row r-center">
                <img src="src\assests\phone.jpeg" alt="phone" />
              </div>
              <h3>Phone</h3>
              <p>
                A Phone is a device that captures and stores images and videos,
                either digitally or chemically...
              </p>
              <div className="row r-center">
                <button>Add To cart</button>
                <button>Add to wish list</button>
              </div>
            </div>
          </div>

          <div className="row row2">
            <div className="box box1"><div className="images row r-center">
                <img src="src\assests\Ac.jpeg" alt="Ac" />
              </div>
              <h3>Ac</h3>
              <p>
                A Ac is a device that captures and stores images and videos,
                either digitally or chemically...
              </p>
              <div className="row r-center">
                <button>Add To cart</button>
                <button>Add to wish list</button>
              </div></div>
            <div className="box box2"><div className="images row r-center">
                <img src="src\assests\fridge.jpeg" alt="fridge" />
              </div>
              <h3>Double Dorr Fridge</h3>
              <p>
                A Fridge is a device that captures and stores images and videos,
                either digitally or chemically...
              </p>
              <div className="row r-center">
                <button>Add To cart</button>
                <button>Add to wish list</button>
              </div></div>
            <div className="box box3">
            <div className="images row r-center">
                <img src="src\assests\Washing-machine.jpeg" alt="Washing-machine" />
              </div>
              <h3>Washing Machine</h3>
              <p>
                A Washing Machine is a device that captures and stores images and videos,
                either digitally or chemically...
              </p>
              <div className="row r-center">
                <button>Add To cart</button>
                <button>Add to wish list</button>
              </div>
            </div>
          </div>
          <div className="row row3">
            <div className="box box1">
            <div className="images row r-center">
                <img src="src\assests\washing-machine1.jpeg" alt="washing-machine" />
              </div>
              <h3>Washing Machine</h3>
              <p>
                A Washing Machine is a device that captures and stores images and videos,
                either digitally or chemically...
              </p>
              <div className="row r-center">
                <button>Add To cart</button>
                <button>Add to wish list</button>
              </div>
            </div>
            <div className="box box2">
            <div className="images row r-center">
                <img src="src\assests\laptop.jpeg" alt="laptop" />
              </div>
              <h3>Laptop</h3>
              <p>
                A laptop is a device that captures and stores images and videos,
                either digitally or chemically...
              </p>
              <div className="row r-center">
                <button>Add To cart</button>
                <button>Add to wish list</button>
              </div>
            </div>
            <div className="box box3">
            <div className="images row r-center">
                <img src="src\assests\laptop-black.jpeg" alt="black-laptop" />
              </div>
              <h3>Black Laptop</h3>
              <p>
                A laptop is a device that captures and stores images and videos,
                either digitally or chemically...
              </p>
              <div className="row r-center">
                <button>Add To cart</button>
                <button>Add to wish list</button>
              </div>
            </div>
          </div>
          <div className="row row4">
            <div className="box box1">
            <div className="images row r-center">
                <img src="src\assests\bag.jpeg" alt="Bag" />
              </div>
              <h3>Bag</h3>
              <p>
                A bag is a device that captures and stores images and videos,
                either digitally or chemically...
              </p>
              <div className="row r-center">
                <button>Add To cart</button>
                <button>Add to wish list</button>
              </div>
            </div>
            <div className="box box2">
            <div className="images row r-center">
                <img src="src\assests\yellow-bag.jpeg" alt="yellow-bag" />
              </div>
              <h3>Yello Bag</h3>
              <p>
                A bag is a device that captures and stores images and videos,
                either digitally or chemically...
              </p>
              <div className="row r-center">
                <button>Add To cart</button>
                <button>Add to wish list</button>
              </div>
            </div>
            <div className="box box3">
            <div className="images row r-center">
                <img src="src\assests\ladies-bag.jpeg" alt="ladies-bag" />
              </div>
              <h3>Ladies Bag</h3>
              <p>
                A Bag is a device that captures and stores images and videos,
                either digitally or chemically...
              </p>
              <div className="row r-center">
                <button>Add To cart</button>
                <button>Add to wish list</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
