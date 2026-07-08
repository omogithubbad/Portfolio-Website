import React from 'react';
import { GoDotFill } from 'react-icons/go';
import { FaCheckCircle } from 'react-icons/fa';
import { GiMedal } from 'react-icons/gi';

type Data = {
  title: string;
  description: string;
};

const data: Data[] = [
  {
    title: 'Awwwards',
    description: 'Site of the day',
  },
  {
    title: 'CSS Design Award',
    description: 'CSS Ninja',
  },
  {
    title: 'CSS Design Award',
    description: 'CSS Champion',
  },
  {
    title: 'Awwwards',
    description: 'Site of the day',
  },
];

const Mydesign = () => {
  return (
    <section className="mt-20 mx-20">
      <div className="flex items-start gap-16 text-[#1A1A1A]">
        {/* LEFT */}
        <div className="w-1/2 shrink-0">
          <span className="ring-1 ring-gray-600 rounded-full px-4 py-1 flex w-fit items-center justify-center mb-4 font-figtree text-[14px]">
            <GoDotFill className="text-[#82FF1F] mr-1" />
            EXPERIENCE
          </span>

          <h1 className="text-[80px] leading-none font-verdana">
            My Design <br /> Philosophy
          </h1>
        </div>

        {/* RIGHT */}
        <div className="w-1/2">
          <p className="text-[16px] font-figtree leading-relaxed">
            Today, I am driven by the belief that great design is not just about
            aesthetics; it's about creating meaningful connections between
            brands and their audiences. I am committed to continuous learning
            and innovation, ensuring that my designs not only look great but
            also deliver results.
          </p>

          <ul className="mt-10 font-verdana text-[18px] space-y-3">
            {[
              'Crafting Purposeful Experiences',
              'User-Centric Approach',
              'Innovation and Adaptability',
              'Collaboration and Communication',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <FaCheckCircle className="text-lime-500 w-5 h-5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 my-17">
        {data.map((d, index) => (
          <div
            key={index}
            className="bg-lime-50 shadow-md py-10 px-10 rounded-3xl"
          >
            <GiMedal className="text-[#1A1A1A] text-4xl mb-6" />
            <h1 className="font-verdana text-[#1A1A1A] text-2xl mb-2">
              {d.title}
            </h1>
            <p className="text-[#1A1A1A] font-figtree">{d.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mydesign;