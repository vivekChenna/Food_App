import { useState } from "react";
import RestaurantCard from "./RestaurantCard.js";
import { useContext } from "react";
import { userContext } from "./UserContext.js";
import Shimmer from "./Shimmer.js";

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
            <RestaurantCard restaurantDetails={restaurantItem} key={index} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
