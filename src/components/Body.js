import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

//not using keys(not acceptable) < index as key < unique id

const Body = () => {
  // Local state variable - SUper powerful variable
  // const [listOfRestaurants, setListOfRestaurant] = useState([
  //   {
  //     info: {
  //       id: "538367",
  //       name: "Great Indian Khichdi by EatFit",
  //       cloudinaryImageId: "6e44fd7f1e5cd9967edfe47c10247671",
  //       costForTwo: "₹200 for two",
  //       cuisines: ["Indian", "Home Food", "Healthy Food", "Snacks"],
  //       avgRating: 3.8,
  //       sla: {
  //         deliveryTime: 23,
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "538368",
  //       name: "KFC",
  //       cloudinaryImageId: "6e44fd7f1e5cd9967edfe47c10247671",
  //       costForTwo: "₹200 for two",
  //       cuisines: ["Indian", "Home Food", "Healthy Food", "Snacks"],
  //       avgRating: 4.2,
  //       sla: {
  //         deliveryTime: 23,
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "5383689",
  //       name: "Dominos",
  //       cloudinaryImageId: "6e44fd7f1e5cd9967edfe47c10247671",
  //       costForTwo: "₹200 for two",
  //       cuisines: ["Indian", "Home Food", "Healthy Food", "Snacks"],
  //       avgRating: 4.1,
  //       sla: {
  //         deliveryTime: 23,
  //       },
  //     },
  //   },
  // ]);

  // const [listOfRestaurants, setListOfRestaurant] = useState(resList);
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  /* the above is array destructuring like below 
  const arr= useState(resList);
  const [listOfRestaurants, setListOfRestaurant]=arr;
  const listOfRestaurants= arr[0]
  const setListOfRestaurant=arr[1]

  Normal JS variable
  let listOfRestaurantsJS = [
    {
      info: {
        id: "538367",
        name: "Great Indian Khichdi by EatFit",
        cloudinaryImageId: "6e44fd7f1e5cd9967edfe47c10247671",
        costForTwo: "₹200 for two",
        cuisines: ["Indian", "Home Food", "Healthy Food", "Snacks"],
        avgRating: 3.8,
        sla: {
          deliveryTime: 23,
        },
      },
    },
    {
      info: {
        id: "538368",
        name: "KFC",
        cloudinaryImageId: "6e44fd7f1e5cd9967edfe47c10247671",
        costForTwo: "₹200 for two",
        cuisines: ["Indian", "Home Food", "Healthy Food", "Snacks"],
        avgRating: 4.2,
        sla: {
          deliveryTime: 23,
        },
      },
    },
    {
      info: {
        id: "5383689",
        name: "Dominos",
        cloudinaryImageId: "6e44fd7f1e5cd9967edfe47c10247671",
        costForTwo: "₹200 for two",
        cuisines: ["Indian", "Home Food", "Healthy Food", "Snacks"],
        avgRating: 4.1,
        sla: {
          deliveryTime: 23,
        },
      },
    },
  ]; */

  //Whenever  state variables update, react triggers a reconciliation cycle (re-render the component)
  console.log("Body Rendered");

  useEffect(() => {
    //console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //COnditional rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  //console.log("body rendered");
  //return using ternary operator instead of conditional rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //Filter the restaurants card and update the UI
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              console.log(filteredRestaurant);
              // setListOfRestaurant(filteredRestaurant);
              setFilteredRestaurant(filteredRestaurant);
            }}>
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //Filter logic here
            // listOfRestaurants = listOfRestaurants.filter(
            //   (res) => res.info.avgRating > 4
            // );
            // console.log(listOfRestaurants);

            //filter using setListOfRestaurants
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            //setListOfRestaurant(filteredList);
            setFilteredRestaurant(filteredList);
          }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resData={resObj} /> */}
        {/*  <RestaurantCard resData={resList[0]} />
          <RestaurantCard resData={resList[1]} />
          <RestaurantCard resData={resList[2]} />
          <RestaurantCard resData={resList[3]} />
          <RestaurantCard resData={resList[4]} />
          <RestaurantCard resData={resList[5]} />
          <RestaurantCard resData={resList[6]} />
          <RestaurantCard resData={resList[7]} />
          <RestaurantCard resData={resList[8]} /> */}

        {/* {resList.map((restaurant, index) => (
              <RestaurantCard
                key={index}
                resData={restaurant}
              />
          ))} */}
        {/* {listOfRestaurants.map((restaurant) => ( */}
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            resData={restaurant}
          />
        ))}
        {/* <RestaurantCard
            resName="KFC"
            cuisine="Burger, Fast Food"
          /> */}
      </div>
    </div>
  );
};

export default Body;
