import { SepcialtyItem, SepcialtyItemProps } from "../components/MenuItem";

const items: SepcialtyItemProps[] = [
  {
    name: "Sushi",
    image: "/sushi.png",
    variety: 12,
  },
  {
    name: "Ramen",
    image: "/ramen.png",
    variety: 8,
  },
  {
    name: "Mochi",
    image: "/mochi.png",
    variety: 5,
  },
  {
    name: "Onigiri",
    image: "/onigiri.png",
    variety: 5,
  },
];

export default function Specialities() {
  return (
    <div className="flex flex-col items-center pb-10">
      <p className="text-5xl mt-14 mb-10">Our Specialties</p>
      <div className="flex lg:flex-row flex-col gap-10">
        {items.map((i) => (
            <SepcialtyItem name={i.name} image={i.image} variety={i.variety}/>
        ))}
      </div>
    </div>
  );
}
