import { GoDotFill } from 'react-icons/go';
import { HiMiniArrowTurnDownRight } from 'react-icons/hi2';

const Bookcallcontactus = () => {
  return (
    <section>
      <div className="bg-[#1A1A1A] pt-30 text-[#FFFFFF]">
        <div className="flex flex-col justify-center items-center bg-[#0d0d0d] mx-20 py-21 rounded-3xl">
          <span className="ring-1 ring-gray-600 ring-offset-gray-100 rounded-full px-4 mb-2 py-1 flex w-fit items-center justify-center text-[#ffffff] text-[16px] font-figtree">
            <GoDotFill className="text-[#82FF1F] text-2xl" />
            HAVE PROJECT IN MIND?
          </span>

          <h1 className="text-[#FFFFFF] text-[80px] font-verdana px-13 leading-none">
            Let's Turn your Ideas <br />{' '}
            <span className="pl-45">into Reality</span>
          </h1>

          <a
            href="mailto:oyemaechiedwin@gmail.com"
            className="text-xl mt-10 border-b-2 border-zinc-700 pt-1 hover:text-lime-400 transition text-[32px] flex items-center justify-center"
          >
            <HiMiniArrowTurnDownRight className="mr-1 mt-1" />
            oyemaechiedwin@gmail.com
          </a>
        </div>

        <ul className="flex justify-center items-center gap-5 mt-12 pb-7">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </section>
  );
};

export default Bookcallcontactus;
