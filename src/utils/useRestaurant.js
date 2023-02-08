import React from "react";
import { FETCH_MENU_URL } from "../config/hardcoded_data";

const useRestaurant = (id) => {
  console.log("in the useRestaurant hook");

  const [restaurantDetail, setRestaurantDetail] = React.useState(null);

  React.useEffect(() => {
    console.log("in the useEffect");
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(FETCH_MENU_URL + id);
    const response = await data.json();
    setRestaurantDetail(response.data);
  }

  return restaurantDetail;
};

export default useRestaurant;
