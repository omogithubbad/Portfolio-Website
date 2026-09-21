
import { GoDotFill } from 'react-icons/go';
import { HiMiniArrowTurnDownRight } from 'react-icons/hi2';
import myimage from '../assets/Manasseh1.png';

const Herosection = () => {
  return (
    <section className="bg-black min-h-screen relative overflow-hidden flex items-center">
      {/* Left: Image */}
      <div className="relative h-screen w-[40%] shrink-0">
        <img
          src={myimage}
          alt="me"
          className="h-full w-full object-cover object-top mix-blend-lighten"
        />
        {/* Fade right edge */}
        <div className="absolute inset-y-0 right-0 w-40 bg-linear-to-r from-transparent to-black" />
        {/* Fade bottom edge */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent to-black" />
      </div>

      {/* Right: Content */}
      <div className="flex flex-col justify-center pl-8 pr-20 text-white flex-1">
        {/* Badge */}
        <span className="ring-1 ring-gray-700 rounded-full px-4 py-1 italic flex w-fit items-center gap-1 mb-5">
          <GoDotFill className="text-[#82FF1F] text-lg" />
          <span className="text-sm tracking-widest text-gray-300">
            AVAILABLE FOR WORK
          </span>
        </span>

        {/* Name */}
        <h1 className="text-[88px] font-serif leading-[0.95] tracking-tight mb-6">
          MANASSEH <br /> EDWIN&copy;
        </h1>

        {/* Divider */}
        <div className="w-16 h-0.5 bg-[#82FF1F] mb-6" />

        {/* Description */}
        <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-sm">
          I blend artistry with cutting-edge technology to deliver websites that
          not only look stunning but also drive results.
        </p>

        {/* Buttons row */}
        <div className="flex items-center gap-4 mb-12">
         
          <button className="ring rounded-full px-5 py-2 text-[#1A1A1A] font-verdana text-[18px] bg-[#82FF1F] hover:bg-amber-50 transition duration-300 hover:animate-bounce flex justify-center items-center">
          <HiMiniArrowTurnDownRight className="mr-1" /> Schedule a consultation
        </button>
          
        </div>

        {/* Stats row */}
        <div className="flex gap-10 border-t border-gray-800 pt-6">
          <div>
            <h3 className="text-3xl font-bold text-[#82FF1F]">3+</h3>
            <p className="text-gray-500 text-xs mt-1 tracking-wide uppercase">
              Years Experience
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#82FF1F]">05+</h3>
            <p className="text-gray-500 text-xs mt-1 tracking-wide uppercase">
              Projects Done
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#82FF1F]">05+</h3>
            <p className="text-gray-500 text-xs mt-1 tracking-wide uppercase">
              Happy Clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;










