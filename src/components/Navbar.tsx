import "../App.css";
import { CiCircleInfo, CiShoppingBasket } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="hidden z-20 fixed lg:flex flex-row justify-between top-0 left-0 right-0 bg-[#F3EDE1] p-8 px-16 border-b border-[#333F72] border-opacity-30">
        <div>
          <Link to="/">Kai Ramen</Link>
        </div>
        <ul className="flex flex-row gap-14">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="/home#menu">Menu</a>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className="flex flex-row gap-10 text-2xl">
          <div>
            <CiShoppingBasket />
          </div>
          <div>
            <FiUser />
          </div>
        </div>
        <div className="paperOverlay"></div>
      </nav>
      <div>
      <div className="lg:hidden fixed top-0 left-0 right-0 h-20 bg-[#F3EDE1] p-8 border-b border-[#333F72] border-opacity-30 z-10">
        <Link to="/" className="text-xl">
          Kai Ramen
        </Link>

        <div className="paperOverlay"></div>
      </div>
      <div className="lg:hidden fixed flex flex-row justify-around bottom-0 left-0 right-0 h-20 bg-[#F3EDE1] p-8 border-t border-[#333F72] border-opacity-30 z-10 text-3xl">
        <Link to="/home#menu" className="">
          <GiKnifeFork />
        </Link>
        <Link to="/" className="">
          <CiShoppingBasket />
        </Link>
        <Link to="/about" className="">
          <CiCircleInfo />
        </Link>

        <div className="paperOverlay"></div>
      </div>
      </div>
    </div>
  );
}
