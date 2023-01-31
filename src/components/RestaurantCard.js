import { IMAGE_CDN_URL } from "../config/hardcoded_data";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <div className="restaurant-food-img">
        <img
          src={IMAGE_CDN_URL + restaurant.data.cloudinaryImageId}
          alt="logo"
        />
      </div>

      <div className="restaurant-heading">
        <div className="restaurant-name">{restaurant.data.name}</div>
      </div>

      <div className="cuisines">
        <div className="cuisines-detail">
          {restaurant.data.cuisines.join(",")}
        </div>
      </div>

      <div className="details-box">
        <div className="rating-box">
          <span>{restaurant.data.avgRating}</span>
          <span>
            <StarRateRoundedIcon style={{ color: "white", width: "1.4rem" }} />
          </span>
        </div>
        <span>{restaurant.data.sla.maxDeliveryTime}min</span>
        <span>{restaurant.data.costForTwoString}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
