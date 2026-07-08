import React from 'react';
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
    title: 'Personalized Approach',
    description:
      'Every project is unique, and I tailor my approach to fit your specific needs and goals.',
    icon: <PiAsterisk className="text-[#82FF1F] text-2xl" />,
  },
  {
    title: 'Clear Communication',
    description:
      'I keep you informed at every stage of the process and provide you regular updates.',
    icon: <TbCircles className="text-[#82FF1F] text-2xl" />,
  },
  {
    title: 'After Support',
    description:
      "My commitment to your success doesn't end at launch. I provide after launch support. Have Project in Mind?",
    icon: <BsGrid className="text-[#82FF1F] text-2xl" />,
  },
];

const Whattoexpect = () => {
  return (
    <section className="bg-[#F8F8F8] py-20 px-20">
      <div>
        <h1 className="text-[#1A1A1A] ring-1 rounded-full w-fit ring-offset-gray-100 ring-gray-800 px-4 py-0.5 font-figtree text-[16px] flex items-center justify-center">
          <GoDotFill className="text-[#82FF1F] text-2xl" />
          MY PHILOSOPHY
        </h1>
        <h1 className="font-extralight text-[80px] text-[#111111] font-verdana">
          What to Expect
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-10 my-17">
        {data.map((d, index) => (
          <div
            key={index}
            className="bg-[#ffffff] shadow-md py-10 px-10 rounded-3xl"
          >
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
              {d.icon}
            </div>
            <h1 className="font-verdana text-[#1A1A1A] text-2xl mb-3">
              {d.title}
            </h1>
            <p className="text-[#1A1A1A] font-figtree">{d.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Whattoexpect;