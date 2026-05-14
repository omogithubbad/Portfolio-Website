import React from 'react';
import { GoDotFill } from 'react-icons/go';
import { HiMiniArrowTurnDownRight } from 'react-icons/hi2';

const Offers = () => {
  type Data = {
    title: string;
    description: string;
    items: string[];
    button: string;
    green: boolean;
    image: string;
    black: boolean;
    white: boolean;
  };

  const data: Data[] = [
    {
      title: 'Web Design',
      description: 'Creating visually stunning and user-friendly websites is at the heart of what I do',
      items: ['Custom Tailored Design', 'Responsive Layouts', 'Custom Tailored Design'],
      button: 'Schedule a consultation',
      green: true, black: false, white: false,
      image: 'Logo'
    },
    {
      title: 'Development',
      description: 'I bring your designs to life with clean, efficient, and high-performing code.',
      items: ['HTML, CSS, & JS Expertise', 'Cross-Browser Compatibility', 'Faster Load Times'],
      button: 'Schedule a consultation',
      green: false, black: true, white: false,
      image: 'Logo'
    },
    {
      title: 'Brand Identity',
      description: 'Building a strong brand identity is essential for standing out in a crowded market.',
      items: ['Logo Design', 'Cohesive Color Palettes', 'Brand Guidelines'],
      button: 'Schedule a consultation',
      green: false, black: false, white: true,
      image: 'Logo'
    },
  ];

  return (
    <section className="bg-zinc-950 py-35 px-20">
      <div className="text-white w-fit mb-20">
        <span className="ring-1 ring-gray-600 ring-offset-gray-100 rounded-full px-4 py-1 italic flex w-fit">
          <GoDotFill className="text-[#82FF1F] text-2xl" />
          WHAT I OFFER
        </span>
        <h1 className="text-[80px] text-[#ffffff] leading-none">
          Empowering Brands <br /> Through Design
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-5 items-stretch">
        {data.map((d, index) => (
          <article
            key={index}
            className={`
              ${d.green ? 'bg-lime-500 text-zinc-900' : ''}
              ${d.black ? 'bg-gray-800 text-white' : ''}
              ${d.white ? 'bg-yellow-50 text-[#1A1A1A]' : ''}
              p-10 rounded-2xl flex flex-col justify-between
            `}
          >
            <div>
              {d.image ? (
                <img src={d.image} alt="Logo" className="mb-4 w-10 h-10" />
              ) : (
                <div className="mb-4 w-10 h-10" />
              )}

              <h1 className="text-[32px] font-semibold mb-2">{d.title}</h1>

              <p className={`text-base pb-5 ${d.black ? 'text-white' : 'text-zinc-700'}`}>
                {d.description}
              </p>

              <ul className={`text-[16px] divide-y ${d.black ? 'text-white divide-white/30' : 'text-zinc-800 divide-zinc-300'}`}>
                {d.items.map((item, i) => (
                  <li key={i} className="py-3">{item}</li>
                ))}
              </ul>
            </div>

            <button className={`rounded-full px-5 py-2 text-base flex justify-center items-center w-fit mt-8 transition duration-300 hover:animate-bounce
              ${d.green ? 'bg-white/50 text-zinc-900' : ''}
              ${d.black ? 'bg-white/20 text-white' : ''}
              ${d.white ? 'bg-lime-200 text-zinc-900' : ''}
            `}>
              <HiMiniArrowTurnDownRight className="mr-1" />{d.button}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Offers;