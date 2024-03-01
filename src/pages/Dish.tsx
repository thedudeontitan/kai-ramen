interface dish {
  name: string;
  image: string;
  description: string;
  cost: string;
}

const menu: dish[] = [
  {
    name: "sushi",
    image: "public/sushi.png",
    description: "This is a sushi",
    cost: "100",
  },
  {
    name: "sushi",
    image: "public/sushi.png",
    description: "This is a sushi",
    cost: "100",
  },
  {
    name: "sushi",
    image: "public/sushi.png",
    description: "This is a sushi",
    cost: "100",
  },
  {
    name: "sushi",
    image: "public/sushi.png",
    description: "This is a sushi",
    cost: "100",
  },
  {
    name: "sushi",
    image: "public/sushi.png",
    description: "This is a sushi",
    cost: "100",
  },
];

export default function Dish() {
  return (
    <div className="flex lg:flex-row flex-col lg:pt-40 justify-center gap-x-20 pb-10">
      <div className="flex flex-col">
        <img src="public/sushi.png" alt="" className="lg:w-[70vh]" />
        <div className="">
          <p className="text-3xl mt-2">Sushi</p>
          <p className="w-[70vh] mt-2">
            Sushi is a Japanese dish of vinegared rice combined with seafood,
            vegetables, or fruits, wrapped in seaweed. Its delicate flavors and
            elegant presentation make it a globally beloved culinary delight.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:w-[70vh]">
        <p className="text-2xl ml-2">Menu :</p>
        {menu.map((dish) => (
          <div className="border-2 flex flex-row rounded-tl-3xl rounded-br-3xl border-[#333F72] p-5">
            <img
              src={dish.image}
              alt=""
              className="w-20 h-20 object-contain border-2 border-[#333F72] rounded-tl-3xl rounded-br-3xl p-1"
            />
            <div className="flex flex-col justify-between ">
              <p className="text-xl ml-5">{dish.name}</p>
              <p className="text-2xl ml-5">${dish.cost}</p>
            </div>
            <button className="bg-[#E56E0C] rounded-tl-3xl rounded-br-3xl text-white px-3 h-fit py-4 mt-auto ml-auto hover:bg-[#F3EDE1] border-2 border-[#E56E0C] hover:text-[#E56E0C] transition-all">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
