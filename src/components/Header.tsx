// import { FaWhatsapp, FaInstagram } from "react-icons/fa6";

export function Header() {
  return (
    <div className="flex flex-col-2 justify-center items-center gap-3 p-2 bg-zinc-900">
      <h1 className="flex animate-[smooth_1.5s] font-permanent lg:text-4xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-t from-red-500 to-yellow-400 grow justify-center">
        LANCHONETE TEM DE TUDO
      </h1>
      {/* <a href="">
        <FaWhatsapp className="text-white h-9 w-9" />
      </a>
      <a href="">
        <FaInstagram className="text-white h-9 w-9" />
      </a> */}
    </div>
  );
}
