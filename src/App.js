import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { userContext } from "./components/UserContext";
import About from "./components/About";
import Error from "./components/Error";
import Shimmer from "./components/Shimmer";
import RestaurantMenu from "./components/RestaurantMenu";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Profile from "./components/Profile";

const App = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);

  useEffect(() => {
    getRestaurants();
    // console.log("useEffect");
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );

    const response = await data.json();

    // console.log(response);
    const allRestaurantList = response?.data?.cards?.find(
      (item) => item.cardType == "seeAllRestaurants"
    );
    setRestaurant(allRestaurantList?.data?.data?.cards);
    setFilterRestaurant(allRestaurantList?.data?.data?.cards);

    // console.log(allRestaurantList?.data?.data?.cards);
  }

  // console.log("render");

  return (
    <userContext.Provider
      value={{
        restaurant,
        setRestaurant,
        filterRestaurant,
        setFilterRestaurant,
      }}
    >
      <Navbar />
      <Outlet />
    </userContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Shimmer />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
