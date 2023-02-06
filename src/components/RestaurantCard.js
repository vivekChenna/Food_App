import { IMAGE_CDN_URL } from "../config/hardcoded_data";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { useState } from "react";
const RestaurantCard = ({ restaurantDetails }) => {
  // const [color, setColor] = useState({
  //   backgroundColor: "green",
  // });

  // {
  //   restaurantDetails?.data?.avgRating < 4
  //     ? setColor({ backgroundColor: "orange" })
  //     : setColor({ backgroundColor: "green" });
  // }

  return (
    <div className="restaurant-card">
      <div className="restaurant-food-img">
        <img
          src={IMAGE_CDN_URL + restaurantDetails?.data?.cloudinaryImageId}
          alt="logo"
        />
      </div>

      <div className="restaurant-heading">
        <div className="restaurant-name">{restaurantDetails?.data?.name}</div>
      </div>

      <div className="cuisines">
        <div className="cuisines-detail">
          {restaurantDetails?.data?.cuisines?.join(",")}
        </div>
      </div>

      <div className="details-box">
        {restaurantDetails?.data?.avgRating < 4 ? (
          <div className="rating-box" style={{ backgroundColor: "#db7c38" }}>
            <span>{restaurantDetails?.data?.avgRating}</span>

            <span>
              <StarRateRoundedIcon
                style={{ color: "white", width: "1.4rem" }}
              />
            </span>
          </div>
        ) : (
          <div className="rating-box" style={{ backgroundColor: "#48c479" }}>
            <span>{restaurantDetails?.data?.avgRating}</span>

            <span>
              <StarRateRoundedIcon
                style={{ color: "white", width: "1.4rem" }}
              />
            </span>
          </div>
        )}

        <span>{restaurantDetails?.data?.sla?.maxDeliveryTime}min</span>
        <span>{restaurantDetails?.data?.costForTwoString}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
