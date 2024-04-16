import { useParams } from "react-router-dom";
import { SepcialtyItems, menu } from "../models/menu";
import { useEffect } from "react";

export default function Dish() {
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const itemId = id ? parseInt(id) - 1 : 0;
  const filteredMenu = menu.filter((dish) => dish.id.toString() === id);
  return (
    <div className="flex lg:flex-row flex-col pt-40 justify-center gap-x-20 pb-10 mx-4">
      <div className="flex flex-col">
        <div className="border-2 border-[#333F72] p-4 h-fit rounded-tl-3xl rounded-br-3xl">
        <img
          src={SepcialtyItems[itemId].image}
          alt=""
          className="lg:w-[70vh] object-contain"
        />
        </div>
        <div className="mb-5">
          <p className="text-3xl mt-2">{SepcialtyItems[itemId].name}</p>
          <p className="lg:w-[70vh] mt-2">{SepcialtyItems[itemId].description}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:w-[70vh]">
        <p className="text-2xl ml-2">Menu :</p>
        {filteredMenu.map((dish) => (
          <div
            key={dish.name}
            className="border-2 flex flex-row rounded-tl-3xl rounded-br-3xl border-[#333F72] p-5"
          >
            <img
              src={dish.image}
              alt=""
              className="w-20 h-20 object-contain border-2 border-[#333F72] rounded-tl-3xl rounded-br-3xl p-1"
            />
            <div className="flex flex-col justify-between ">
              <p className="text-xl ml-5">{dish.name}</p>
              <p className="text-2xl ml-5">${dish.cost}</p>
            </div>
            <button className="hidden lg:flex whitespace-nowrap bg-[#E56E0C] rounded-tl-3xl rounded-br-3xl text-white px-3 h-fit py-4 mt-auto ml-auto hover:bg-[#F3EDE1] border-2 border-[#E56E0C] hover:text-[#E56E0C] transition-all">
              Add to cart
            </button>
            <button className="flex lg:hidden whitespace-nowrap bg-[#E56E0C] rounded-tl-3xl rounded-br-3xl text-white px-3 h-fit py-4 mt-auto ml-auto hover:bg-[#F3EDE1] border-2 border-[#E56E0C] hover:text-[#E56E0C] transition-all">
              Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
