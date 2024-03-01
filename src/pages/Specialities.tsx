import { SepcialtyItem } from "../components/MenuItem";
import { SepcialtyItems } from "../models/menu";

export default function Specialities() {
  return (
    <div className="flex flex-col items-center pb-10">
      <p className="text-5xl mt-14 mb-10">Our Specialties</p>
      <div className="flex lg:flex-row flex-col gap-10">
        {SepcialtyItems.map((i) => (
          <SepcialtyItem id={i.id} name={i.name} image={i.image} variety={i.variety} description={i.description} />
        ))}
      </div>
    </div>
  );
}
