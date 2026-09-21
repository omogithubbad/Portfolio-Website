
import { GoDotFill } from 'react-icons/go';
import { PiAsterisk } from 'react-icons/pi';
import { TbCircles } from 'react-icons/tb';
import { BsGrid } from 'react-icons/bs';

type Data = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const data: Data[] = [
  {
    title: 'Tailored Design',
    description:
      'I believe that every brand is unique and deserves a website that is just as distinctive.',
    icon: <PiAsterisk className="text-[#82FF1F] text-2xl" />,
  },
  {
    title: 'User-Centric Approach',
    description:
      'With a strong focus on user experience, I design websites that are intuitive and easy to navigate.',
    icon: <TbCircles className="text-[#82FF1F] text-2xl" />,
  },
  {
    title: 'Trending Technologies',
    description:
      'I stay at the forefront of web design trends and technologies to offer you the most innovative solutions.',
    icon: <BsGrid className="text-[#82FF1F] text-2xl" />,
  },
];

const Choseme = () => {
  return (
    <section className="bg-[#F8F8F8] py-20 px-20">
      <div>
        <h1 className="text-[#1A1A1A] ring-1 rounded-full w-fit ring-offset-gray-100 ring-gray-800 px-4 py-0.5 font-figtree text-[16px] flex items-center justify-center">
          <GoDotFill className="text-[#82FF1F] text-2xl" />
          WHY CHOOSE ME
        </h1>
        <h1 className="font-extralight text-[80px] text-[#111111] font-verdana">
          Why Work with Me
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-10 my-17">
        {data.map((d, index) => (
          <div key={index} className="bg-[#ffffff] shadow-md py-10 px-10 rounded-3xl">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
              {d.icon}
            </div>
            <h1 className="font-verdana text-[#1A1A1A] text-2xl mb-3">{d.title}</h1>
            <p className="text-[#1A1A1A] font-figtree">{d.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Choseme;