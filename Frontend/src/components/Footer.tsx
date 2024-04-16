import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaRegCopyright,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-[#333F72] bottom-0 left-0 right-0 z-20 text-white p-8 flex lg:flex-row flex-col justify-between gap-5">
      <p>Kai Ramen</p>
      <div className="flex flex-row gap-16 text-sm font-sans">
        <div className="flex flex-col gap-2">
          <p className="font-hiro-misake">Home</p>
          <Link to="">Specialties</Link>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-hiro-misake">Menu</p>
          <Link to="">Sushi</Link>
          <Link to="">Ramen</Link>
          <Link to="">Mochi</Link>
          <Link to="">Onigiri</Link>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-hiro-misake">About</p>
          <Link to="">Company</Link>
          <Link to="">Team</Link>
        </div>
      </div>
      <div className="flex flex-row gap-x-2 ">
        <Link to="" className="rounded-full border h-fit w-fit p-2">
          <FaTwitter />
        </Link>
        <Link to="" className="rounded-full border h-fit w-fit p-2">
          <FaFacebookF />
        </Link>
        <Link to="" className="rounded-full border h-fit w-fit p-2">
          <FaInstagram />
        </Link>
        <Link to="" className="rounded-full border h-fit w-fit p-2">
          <FaGithub />
        </Link>
      </div>
      <p className="font-sans lg:absolute lg:bottom-0 lg:p-5 lg:right-0 flex flex-row items-center">
        <FaRegCopyright className="pr-1 text-xl" />
        Developed By Ankit Kokane
      </p>
    </div>
  );
}
