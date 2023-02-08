import { useParams } from "react-router-dom";

import { IMAGE_CDN_URL } from "../config/hardcoded_data";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();
  // console.log(id);

  // console.log(" before restaurant Menu component");

  const restaurantDetail = useRestaurant(id);

  console.log(" after restaurant Menu component");

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
