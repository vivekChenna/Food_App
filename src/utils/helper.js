export function filterRestaurantData(searchText, restaurantList) {
  const response = restaurantList.filter((restaurant) => {
    return restaurant.data.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });

  return response;
}
