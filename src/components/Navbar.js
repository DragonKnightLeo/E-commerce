import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm px-sm-5">
      <Link to="/">
        <img id="logo" src="../../img/plant.jpg" alt="store" className="navbar-brand" />
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            Succulent
          </Link>
        </li>
        <li className="nav-item ml-3">
          <Link id="navLink" to="/" className="nav-link">
            Services
          </Link>
        </li>
        <li className="nav-item ml-3">
          <Link id="navLink" to="/" className="nav-link">
            Classes & Events
          </Link>
        </li>
        <li className="nav-item ml-3">
          <Link id="navLink" to="/" className="nav-link">
            About Us
          </Link>
        </li>
    </ul>
    <Link to="/cart" className="ml-auto">
      <button id="cartButton">
        <span className="mr-2">
          <i className="fas fa-cart-plus" />
        </span>
        My Cart
      </button>
    </Link>
    </nav>
    )
  }
}
