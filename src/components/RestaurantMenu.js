//import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";

import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  //const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);

  //console.log(resId);

  // useEffect(() => {
  //   fetchData();
  // }, []);
  // console.log(MENU_API);
  // const fetchData = async () => {
  //   const data = await fetch(
  //     // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.6276082&lng=73.78088&restaurantId=323526&catalog_qa=undefined&submitAction=ENTER"
  //     MENU_API + resId
  //   );

  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json.data);
  // };

  // Using custom hook >>
  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  //In the above code we write ["@type"] as @ property is not variable and we can not write it directly so we need enclose it in [""]

  //console.log(categories);

  return (
    <div className="text-center">
      <h1 className="my-6 font-bold text-2xl">{name}</h1>
      <h3 className="text-lg font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      {/*<h2>Menu</h2>
       <ul> */}
      {/* <li>{itemCards[0].card.info.name}</li>
        <li>Burgers</li>
        <li>Diet Coke</li> */}
      {/* {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{' '}
            {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
          </li>
        ))}
      </ul> */}

      {/* Building categories accordian UI */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
