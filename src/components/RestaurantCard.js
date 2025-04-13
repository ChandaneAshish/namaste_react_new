import { CDN_URL } from "../utils/constants";

/* const styleCard = {
  backgroundColor: '#f0f0f0',
}; */

//destructuring way >>
//const RestaurantCard = ({ resName, cuisine }) => {
const RestaurantCard = (props) => {
  //const { resName, cuisine } = props;
  const { resData } = props;

  //in resData? the ? is used for optional chaining
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info.sla;
  // return (
  //   <div
  //     className="res-card"
  //     style={{ backgroundColor: "#f0f0f0" }}>
  //     <img
  //       className="res-logo"
  //       alt="res-logo"
  //       src={CDN_URL + cloudinaryImageId}
  //     />
  //     {/*  <h3>{props.resName}</h3>
  //           <h4>{props.cuisine}</h4> */}

  //     {/* destructuring way */}
  //     {/* <h3>{resName}</h3>
  //           <h4>{cuisine}</h4>
  //           <h4>4.3 Stars</h4>
  //           <h4>38 minuites</h4> */}

  //     {/*     <h3>{resData.info.name}</h3>
  //           {/* as cuisines are in array so we are seperating them with comma and space
  //           <h4>{resData.info.cuisines.join(", ")}</h4>
  //           <h4>{resData.info.avgRating} Stars</h4>
  //           <h4>{resData.info.costForTwo}</h4>
  //           <h4>{resData.info.sla.deliveryTime} minuites</h4> */}

  //     <h3>{name}</h3>
  //     <h4>{cuisines.join(", ")}</h4>
  //     <h4>{avgRating} Stars</h4>
  //     <h4>{costForTwo}</h4>
  //     <h4>{deliveryTime} minuites</h4>
  //   </div>
  // );

  return (
    <div className="p-4 m-4  w-[250px] rounded-lg bg-gray-100  hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      {/*  <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4> */}

      {/* destructuring way */}
      {/* <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>4.3 Stars</h4>
            <h4>38 minuites</h4> */}

      {/*     <h3>{resData.info.name}</h3>
            {/* as cuisines are in array so we are seperating them with comma and space 
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating} Stars</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} minuites</h4> */}

      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minuites</h4>
    </div>
  );
};

//Higher Order Component
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="m-2 p-2 bg-black text-white absolute">OPEN</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
