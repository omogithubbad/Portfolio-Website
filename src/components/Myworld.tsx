
import { HiMiniArrowTurnDownRight } from 'react-icons/hi2';
import myimage from '../assets/Manasseh1.png';

const Myworld = () => {
  return (
    <section className="bg-black text-white overflow-hidden">
      {/* Big ABOUT text */}
      <div className="ml-20">
        <h1 className="text-[200px] font-sans leading-none mb-20">ABOUT</h1>
      </div>

      {/* Content row */}
      <div className="flex items-start gap-50 ml-20 pb-20">
        {/* Left: Green box with image */}
        <div className="w-105 h-125 rounded-3xl overflow-hidden bg-[#82FF1F] shrink-0">
          <img
            src={myimage}
            alt="me"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Right: Text content */}
        <div className="flex flex-col justify-start pt-10 max-w-lg">
          <h2 className="text-[64px] font-verdana leading-none mb-6">
            Welcome to my <br /> Creative World
          </h2>

          <p className="text-gray-300 font-figtree text-base leading-relaxed mb-4">
            My journey into the world of design began during my college years,
            where I was captivated by the intersection of creativity and
            technology. Inspired by the power of visual storytelling, I pursued
            a degree in B.Des and honed my skills in various design disciplines.
          </p>

          <p className="text-gray-300 font-figtree text-base leading-relaxed mb-8">
            Today, I am driven by the belief that great design is not just about
            aesthetics; it's about creating meaningful connections between
            brands and their audiences.
          </p>

          <button className="flex items-center w-fit rounded-full px-5 py-2 text-[#1A1A1A] font-verdana text-[18px] bg-[#82FF1F] hover:bg-amber-50 transition duration-300">
            <HiMiniArrowTurnDownRight className="mr-1" /> Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Myworld;






