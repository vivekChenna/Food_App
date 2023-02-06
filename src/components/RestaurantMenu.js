import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IMAGE_CDN_URL } from "../config/hardcoded_data";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();
  console.log(id);

  const [restaurantDetail, setRestaurantDetail] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=21.1702401&lng=72.83106070000001&menuId=" +
        id
    );

    const response = await data.json();

    console.log(response);

    setRestaurantDetail(response.data);
  }

  return !restaurantDetail ? (
    <Shimmer />
  ) : (
    <div className="restaurant-detail-menu">
      <div className="image-logo">
        <img src={IMAGE_CDN_URL + restaurantDetail.cloudinaryImageId} alt="" />
      </div>
      <h1>{restaurantDetail.name}</h1>

      <div>
        <ul>
          {Object.values(restaurantDetail.menu.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
