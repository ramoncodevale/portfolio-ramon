import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-around items-center p-10 px-20 w-full h-[56px] bg-[#111111]">
      <h2 className="font-bold text-[#FF1E1E] text-[18px]">Ramon</h2>

      <ul className="flex items-center gap-8">
        <li>
          <a
            className="font-semibold text-white hover:text-[#FF1E1E] hover:border-b hover:border-[#FF1E1E] border-b-0 transition-all duration-200"
            href="#"
          >
            Início
          </a>
        </li>
        <li>
          <a
            className="font-semibold text-white hover:text-[#FF1E1E] hover:border-b hover:border-[#FF1E1E] border-b-0 transition-all duration-200"
            href="#"
          >
            Projetos
          </a>
        </li>
        <li>
          <a
            className="font-semibold text-white hover:text-[#FF1E1E] hover:border-b hover:border-[#FF1E1E] border-b-0 transition-all duration-200"
            href="#"
          >
            Habilidades
          </a>
        </li>
        <li>
          <a
            className="font-semibold text-white hover:text-[#FF1E1E] hover:border-b hover:border-[#FF1E1E] border-b-0 transition-all duration-200"
            href="#"
          >
            Educação
          </a>
        </li>
        <li>
          <a
            className="font-semibold text-white hover:text-[#FF1E1E] hover:border-b hover:border-[#FF1E1E] border-b-0 transition-all duration-200"
            href="#"
          >
            Contatos
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
