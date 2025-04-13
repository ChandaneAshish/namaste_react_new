//import { RESTAURANTS_API } from "./constants";

const { useEffect, useState } = require("react");
const { RESTAURANTS_API } = require("./constants");

const useRestaurantCard = () => {
  const [resListInfo, setResListInfo] = useState([]);

  useEffect(() => {
    fetchResList();
  }, []);

  const fetchResList = async () => {
    console.log(RESTAURANTS_API);
    const data = await fetch(RESTAURANTS_API);
    console.log(data);
    const json = await data.json();

    console.log(json);

    setResListInfo(json);
  };

  console.log(resListInfo);
  return resListInfo;
};

export default useRestaurantCard;
