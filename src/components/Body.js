import { useState } from "react";
import RestaurantCard from "./RestaurantCard.js";
import { useContext } from "react";
import { userContext } from "./UserContext.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline.js";

const Body = () => {
  const { filterRestaurant } = useContext(userContext);

  const IsOnline = useOnline();

  if (!IsOnline) {
    return <h1> Please Check Your Internet Connection!!</h1>;
  }

  console.log("in the body component");

  return filterRestaurant.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="restaurant-list">
        {filterRestaurant.map((restaurantItem) => {
          return (
            <Link
              to={"/restaurant/" + restaurantItem.data.id}
              key={restaurantItem.data.id}
            >
              <RestaurantCard restaurantDetails={restaurantItem} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
