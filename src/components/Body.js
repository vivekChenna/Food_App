import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard.js";
// import Shimmer from "./Shimmer.js";

const Body = () => {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );

    const response = await data.json();
    console.log(response);

    setRestaurant(response.data.cards[2].data.data.cards);
  }

  if (!restaurant) {
    return null;
  }

  return (
    <>
      <div className="restaurant-list">
        {restaurant.map((restaurant) => {
          return <RestaurantCard restaurant={restaurant} />;
        })}
      </div>
    </>
  );
};

export default Body;
