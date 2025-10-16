import React from 'react'
import "./Navbar.css"
import Fire from "../../assets/images/fire.png"
import Star from "../../assets/images/glowing-star.png";
import Party from "../../assets/images/partying-face.png";

const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>MovieManiac</h1>

        <div className="navbar_links">
          <a href="">
            Popular <img src={Fire} alt="fire emoji" className="navbar_emoji" />
          </a>
          <a href="">
            Top rated{" "}
            <img src={Star} alt="Star emoji" className="navbar_emoji" />
          </a>
          <a href="">
            Upcoming{" "}
            <img src={Party} alt="Party emoji" className="navbar_emoji" />
          </a>
        </div>
      </nav>
    );
}

export default Navbar