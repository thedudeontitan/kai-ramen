import "../App.css";
import { CiShoppingBasket } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="z-20 fixed flex flex-row justify-between top-0 left-0 right-0 bg-[#F3EDE1] p-8 px-16 border-b border-[#333F72] border-opacity-30">
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
  );
}
