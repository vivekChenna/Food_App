import { useState } from "react";
import RestaurantCard from "./RestaurantCard.js";
import { useContext } from "react";
import { userContext } from "./UserContext.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";

const Body = () => {
  const { filterRestaurant } = useContext(userContext);

  // console.log(restaurant);
  return filterRestaurant.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="restaurant-list">
        {filterRestaurant.map((restaurantItem, index) => {
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
