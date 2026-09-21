
import { GoDotFill } from 'react-icons/go';
import { HiMiniArrowTurnDownRight } from 'react-icons/hi2';
import coffee from '../assets/coffee.png';

type Portfolio = {
  title: string;
  year: number;
  image: string;
  link: string; // 👈 the URL to the live website
};

const data: Portfolio[] = [
  {
    title: 'Coffee Landing Page',
    year: 2023,
    image: coffee, // 👈 replace
    link: 'https://manasseh-edwin-coffee-project-01.netlify.app/', // 👈 replace
  },
  {
    title: 'Project Name Here',
    year: 2024,
    image: '/images/project2.png',
    link: 'https://yourproject2.com',
  },
  {
    title: 'Project Name Here',
    year: 2025,
    image: '/images/project3.png',
    link: 'https://yourproject3.com',
  },
  {
    title: 'Project Name Here',
    year: 2026,
    image: '/images/project4.png',
    link: 'https://yourproject4.com',
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
          <a
            key={index}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="ring-1 ring-gray-600 rounded-2xl overflow-hidden block group"
          >
            <article>
              <header className="flex justify-between items-center p-10">
                <h3 className="flex items-center gap-2">
                  <HiMiniArrowTurnDownRight className="text-[#82FF1F]" />
                  {p.title}
                </h3>
                <p>{p.year}</p>
              </header>
              <div className="w-full aspect-4/3 overflow-hidden relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-[#2f2f2f] text-sm font-figtree flex items-center gap-2 ring-1 bg-[#82FF1F] rounded-full px-4 py-2">
                    Visit site <HiMiniArrowTurnDownRight />
                  </span>
                </div>
              </div>
            </article>
          </a>
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
