import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1>Movie List</h1>

        <ul>
          <li>
            <Link to="/">To Watch</Link>
          </li>
          <li>
            <Link to="/watched">Watched</Link>
          </li>
          <li>
            <Link to="/">Favorite</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
