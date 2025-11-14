import React from 'react'
import "./Navbar.css"
import DarkMode from "../../assets/components/DarkMode/DarkMode.jsx";
import Fire from "../../assets/images/fire.png"
import Star from "../../assets/images/glowing-star.png";
import Party from "../../assets/images/partying-face.png";

const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>PrestigeStream</h1>

        <div className="navbar_links">
          <DarkMode />
          <a href="">
            New Release <img src={Fire} alt="fire emoji" className="navbar_emoji" />
          </a>
          <a href="">
            High rated{" "}
            <img src={Star} alt="Star emoji" className="navbar_emoji" />
          </a>
          <a href="">
            Coming Soon{" "}
            <img src={Party} alt="Party emoji" className="navbar_emoji" />
          </a>
        </div>
      </nav>
    );
}

export default Navbar