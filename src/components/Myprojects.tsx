import React from 'react';
import { GoDotFill } from 'react-icons/go';
import { HiMiniArrowTurnDownRight } from 'react-icons/hi2';

type Portfolio = {
  title: string;
  year: number;
  image: string;
};

const data: Portfolio[] = [
  {
    title: 'Project Name Here',
    year: 2023,
    image: '', // 👈 replace
  },
  {
    title: 'Project Name Here',
    year: 2024,
    image: '', // 👈 replace
  },
  {
    title: 'Project Name Here',
    year: 2025,
    image: '', // 👈 replace
  },
  {
    title: 'Project Name Here',
    year: 2026,
    image: '', // 👈 replace
  },
];

const Projects = () => {
  return (
    <section className="bg-[#111111] px-20">
      <div className="pt-40 pb-20">
        <span className="ring-1 ring-gray-600 ring-offset-gray-100 rounded-full px-4 py-1 italic flex w-fit items-center justify-center text-[#ffffff] text-[16px] font-figtree">
          <GoDotFill className="text-[#82FF1F] text-2xl" />
          SELECTED WORK 2025-2026
        </span>
        <h1 className="text-[#ffffff] text-[80px] font-verdana leading-none pt-2">
          Elevating Brands with <br /> Design Brilliance
        </h1>
      </div>

      <div className="grid grid-cols-2 text-[#f8f8f8] gap-5">
        {data.map((p, index) => (
          <article
            key={index}
            className="ring-1 ring-gray-600 rounded-2xl overflow-hidden"
          >
            <header className="flex justify-between items-center p-10">
              <h3>{p.title}</h3>
              <p>{p.year}</p>
            </header>
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-auto"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </article>
        ))}
      </div>

      <div className="flex justify-center items-center pb-35 pt-15">
        <button className="ring rounded-full px-4 py-2 text-[#2f2f2f] font-verdana text-base bg-[#82FF1F] hover:bg-amber-50 transition duration-300 hover:animate-bounce flex justify-center items-center">
          <HiMiniArrowTurnDownRight className="mr-1" />
          Browse all work
        </button>
      </div>
    </section>
  );
};

export default Projects;