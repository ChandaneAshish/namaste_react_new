const RestaurantCategory = ({ data }) => {
  console.log(data);
  return (
    <div>
      {/* Accordian Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg flex justify-between">
        <span>{data.title}</span>
        <span>⬇️</span>
      </div>

      {/* Accordian Body */}
    </div>
  );
};

export default RestaurantCategory;
