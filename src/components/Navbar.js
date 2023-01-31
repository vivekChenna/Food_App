import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import SearchIcon from "@mui/icons-material/Search";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import GroupsIcon from "@mui/icons-material/Groups";
const Navbar = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://play-lh.googleusercontent.com/A8jF58KO1y2uHPBUaaHbs9zSvPHoS1FrMdrg8jooV9ftDidkOhnKNWacfPhjKae1IA"
          alt=""
        />
      </div>

      <div className="search-bar">
        <SearchIcon />
        <div className="input-box">
          <input type="text" placeholder="Search" value="" />
        </div>
      </div>
      <div className="nav-bar">
        <ul>
          <li>
            <LocalOfferIcon />
            <a href="">Offers</a>
          </li>
          <li>
            <GroupsIcon />
            <a href="">About us</a>
          </li>
          <li>
            <ContactPageIcon />
            <a href="">Contact</a>
          </li>
          <li>
            <ShoppingCartIcon />
            <a href="">Cart</a>
          </li>
        </ul>
      </div>

      <div className="toggle-btn">
        <button className="small-btn">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
