import { BiWorld } from "react-icons/bi";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";
import { GiTrophy } from "react-icons/gi";

const Info = () => {
  return (
    <section className="mt-2 py-5">
      <div className="main-container flex justify-between max-md:grid-cols-2 max-md:gap-x-20 max-md:gap-y-10">
        <div className="flex items-center gap-2 uppercase text-sm">
          <BiWorld className="text-3xl" />
          <span>Envío gratuito en todo el mundo</span>
        </div>
        <div className="flex items-center gap-2 uppercase text-sm">
          <FaArrowRotateLeft className="text-3xl" />
          <span>Garantía de devolución de dinero</span>
        </div>
        <div className="flex items-center gap-2 uppercase text-sm">
          <IoIosLock className="text-3xl" />
          <span>Pagos en línea seguros</span>
        </div>
        <div className="flex items-center gap-2 uppercase text-sm">
          <GiTrophy className="text-3xl" />
          <span>La mejor calidad premium</span>
        </div>
      </div>
    </section>
  );
};

export default Info;
