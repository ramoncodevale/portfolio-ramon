import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Início = () => {
  return (
    <section className="mt-20">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-8">
        {/* Texto e ícones */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold text-white">
            Olá, Eu sou o <span className="text-[#FF1E1E]">Ramon</span>
          </h1>

          <p className="font-semibold text-[#FF1E1E] text-2xl mt-2">
            Desenvolvedor Front End
          </p>

          <p className="text-lg text-white mt-3 max-w-xl">
            Apaixonado por tecnologia, foco em interfaces modernas, acessíveis e experiências digitais impactantes.
          </p>

          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/ramoncodevale"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#111111] border border-[#FF1E1E] rounded-full flex items-center justify-center text-xl hover:bg-[#FF1E1E] hover:text-[#111111]"
            >
              <FaGithub className="text-[#FF1E1E] hover:text-[#111111]" />
            </a>

            <a
              href="https://www.linkedin.com/in/ramonvalentim88"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#111111] border border-[#FF1E1E] rounded-full flex items-center justify-center text-xl hover:bg-[#FF1E1E] hover:text-[#111111]"
            >
              <FaLinkedin className="text-[#FF1E1E] hover:text-[#111111]" />
            </a>
          </div>
        </div>

        <Image
          src="/portfolio-avatar.jpg"
          alt="Foto de Ramon"
          width={250}
          height={250}
          className="object-cover rounded-full relative z-10"
        />
      </div>
    </section>
  );
};

export default Início;
