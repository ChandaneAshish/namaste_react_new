import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatching an action
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
          <div className="w-9/12">
            <div className="py-2">
              <div className="flex">
                <span>{item.card.info.name}</span>
                <span>- ₹ {item.card.info.price / 100}</span>
              </div>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg "
                // onClick={handleAddItem}
                //Below is call back function, if we write handleAddItem (item) only it means we calling the function rightaway
                onClick={() => handleAddItem(item)}>
                Add+
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
