/* eslint-disable react-hooks/rules-of-hooks */
import { Menu } from "lucide-react";
import { useState } from "react";
import {
  FaHamburger,
  FaHotdog,
  FaInstagram,
  FaPizzaSlice,
  FaWhatsapp,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export function Sidebar() {
  const [enabled, setEnabled] = useState(true);
  const active = () => setEnabled(!enabled);

  return (
    <aside
      className={`flex flex-col fixed ${
        enabled ? "w-[60px]" : "w-[200px]"
      } h-screen bg-yellow-400 justify-center items-center transition-all`}
    >
      <Menu
        type="submit"
        onClick={active}
        className="fixed top-0 ml-auto p-2 w-12 h-12"
      />
      <div className="flex flex-col gap-6 justify-center grow">
        <NavLink
          id="a"
          className="flex gap-2 items-center text-xl font-semibold"
          to="/"
        >
          <FaHamburger className="h-7 w-7" />
          {enabled ? "" : <p className="animate-smooth">Hamburguer</p>}
        </NavLink>
        <NavLink
          id="a"
          className="flex gap-2 items-center text-xl font-semibold"
          to="/HotDog"
        >
          <FaHotdog className="h-7 w-7" />
          {enabled ? "" : <p className="animate-smooth">Hot Dog</p>}
        </NavLink>
        <NavLink
          id="a"
          className="flex gap-2 items-center text-xl font-semibold"
          to="/Pizza"
        >
          <FaPizzaSlice className="h-7 w-7" />
          {enabled ? "" : <p className="animate-smooth">Pizza</p>}
        </NavLink>
      </div>
      <div className="grid gap-1.5 justify-center pb-2">
        <a href="">
          <FaWhatsapp className="h-9 w-9 hover:text-green-500" />
        </a>
        <a href="">
          <FaInstagram className="h-9 w-9 hover:text-purple-700" />
        </a>
      </div>
    </aside>
  );
}
