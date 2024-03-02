import { Link } from "react-scroll";
import Marquee from "../components/marqee/Marquee";
import Specialities from "./Specialities";
import Testimonial from "./Testimonial";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center pt-36 overflow-x-hidden mx-4">
        <div className="absolute top-40 left-0 overflow-x-clip">
          <div className="-ml-16">
            <img src="/bg_doodle.png" className="w-[60vh] opacity-40 lg:opacity-100" />
          </div>
        </div>
        <div className="absolute top-80 right-0 overflow-x-hidden">
          <div className="-mr-10">
            <img src="/bg_doodle1.png" className="w-[50vh] opacity-40 lg:opacity-100" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-10">
          <p className="text-6xl lg:text-7xl lg:w-[100vh] text-center">
            Taste The Tradition Of Japan
          </p>
          <p className=" lg:w-[80vh] text-center font-sans">
            Lorem ipsum dolor sit amet consectetur. Turpis diam id nulla libero
            at faucibus libero eget. Ornare tincidunt tempor sed egestas
            pulvinar facilisis.
          </p>
          <Link to="menu" smooth={true}>
          <button className="bg-[#E56E0C] text-white px-10 py-4 rounded-tl-3xl rounded-br-3xl">
            Order Now
          </button>
          </Link>
          <img src="/hero_img.png" className="lg:w-[80vh]" />
        </div>
      </div>
      <div id="menu">
        <Marquee text="Sushi Sashimi Ramen Tempura Udon Yakitori Okonomiyaki Takoyaki Soba Tonkatsu Miso Soup Gyoza Donburi Sukiyaki Yakiniku Mochi Taiyaki Matcha Ice Cream Mentaiko Karaage Shabu-Shabu" />
        <Specialities />
      </div>
        <Testimonial />
    </div>
  );
}
