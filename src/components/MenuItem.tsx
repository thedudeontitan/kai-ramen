import { Link } from "react-router-dom";
import { SepcialtyItemProps } from "../types";

export const SepcialtyItem: React.FC<SepcialtyItemProps> = ({
  id,
  name,
  image,
  variety,
}) => {
  return (
    <div className="rounded-tl-3xl rounded-br-3xl border-[1.5px] border-[#333F72] p-5 flex flex-col gap-5">
      <img src={image} className="w-52" />
      <p className="flex flex-row justify-between items-end">
        <span className="text-2xl">{name}</span>
        <span className="text-sm">{variety} variety</span>
      </p>
      <Link to={`/dish/${id}`}>
        <button className="border-[1.5px] border-[#E56E0C] text-[#E56E0C] hover:bg-[#E56E0C] hover:text-white transition-all duration-300 px-10 py-4 rounded-tl-3xl rounded-br-3xl w-full">
          Order Now
        </button>
      </Link>
    </div>
  );
};
