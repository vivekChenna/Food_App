import { useState, useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import SearchIcon from "@mui/icons-material/Search";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import GroupsIcon from "@mui/icons-material/Groups";
import { userContext } from "./UserContext";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { restaurant, setFilterRestaurant } = useContext(userContext);
  const [searchText, setSearchText] = useState("");

  function filterRestaurantData(searchText, restaurantList) {
    const response = restaurantList.filter((restaurant) => {
      return restaurant.data.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
    setFilterRestaurant(response);
  }

  return (
    <div className="header">
      <Link to="/">
        <div className="logo">
          <img
            src="https://play-lh.googleusercontent.com/A8jF58KO1y2uHPBUaaHbs9zSvPHoS1FrMdrg8jooV9ftDidkOhnKNWacfPhjKae1IA"
            alt=""
          />
        </div>
      </Link>

      <div className="search-bar">
        <SearchIcon
          onClick={() => {
            filterRestaurantData(searchText, restaurant);
          }}
        />
        <div className="input-box">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="nav-bar">
        <ul>
          <li>
            <LocalOfferIcon />
            <Link to="/">Offers</Link>
          </li>
          <li>
            <GroupsIcon />
            <Link to="/about">About us</Link>
          </li>
          <li>
            <ContactPageIcon />
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <ShoppingCartIcon />
            <Link to="/cart">Cart</Link>
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
