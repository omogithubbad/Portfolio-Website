type Data = {
  title: string;
  description: string;
  items: string[];
  button: string;
  image: string;
};

const data: Data[] = [
  {
    title: 'Web Design',
    description: `Web design is more than just aesthetics; it's about marrying form with function to create a seamless user experience that captivates and converts. My web design services focus on building responsive, engaging, and visually appealing websites that reflect your brand's essence.`,
    items: ['Custom Tailored Design', 'Responsive Layouts', 'UX/UI Design'],
    button: 'Starting Price: $400',
    image: 'https://websitedemos.net/web-designer-portfolio-02/wp-content/uploads/sites/1513/2025/02/Porject-Imgg.png',
  },
  {
    title: 'Development',
    description:
      'Front end development brings your website to life, transforming static designs into dynamic, interactive user experiences. I specialize in clean, efficient coding that ensures your website is fast, responsive, and visually stunning. Using tools like Git for efficient project management and collaboration.',
    items: [
      'HTML, CSS, JS, & TS Expertise',
      'Cross-Browser Compatibility',
      'Faster Load Times',
    ],
    button: 'Starting Price: $600',
    image: 'https://websitedemos.net/web-designer-portfolio-02/wp-content/uploads/sites/1513/2025/01/Portfolio-Img-1.png',
  },
  {
    title: 'Brand Identity',
    description:
      "A strong brand identity is essential for standing out in today's competitive market. I help businesses create cohesive and compelling brand images that resonate with their target audience and convey their core values. Developing color palettes, typography, and imagery guidelines for brand consistency.",
    items: ['Logo Design', 'Cohesive Color Palettes', 'Brand Guidelines'],
    button: 'Starting Price: $800',
    image: 'https://websitedemos.net/web-designer-portfolio-02/wp-content/uploads/sites/1513/2025/01/Project-Pic.png',
  },
];

const Serviceprice = () => {
  return (
    <section className="bg-black pb-20">
      <div className="text-[#ffffff] mx-20">
        <h1 className="text-[200px] pt-30 pb-5 font-verdana">
          SERVICES
        </h1>
      </div>

      <div className="mx-20 py-12 flex flex-col divide-y divide-white/10 gap-5">
        {data.map((d, index) => (
          <article
            key={index}
            className="flex items-center gap-10 bg-[#1a1a1a] rounded-2xl p-10"
          >
            <div className="flex-1">
              <h1 className="text-[#FFFFFF] text-[32px] mb-5">{d.title}</h1>

              <p className="text-[#F8F8F8] max-w-sm leading-relaxed text-[16px] mb-5">
                {d.description}
              </p>

              <ul className="text-[#FFFFFF] text-[16px] divide-y w-110 divide-white/30 space-y-4 mb-8">
                {d.items.map((item, i) => (
                  <li key={i} className="pb-4">
                    {item}
                  </li>
                ))}
              </ul>

              <button className="ring rounded-full px-4 py-2 text-[#2f2f2f] text-base bg-[#82FF1F] hover:bg-amber-50 transition duration-300 hover:animate-bounce flex justify-center items-center">
                {d.button}
              </button>
            </div>

            <div className="w-120 shrink-0">
              <img
                src={d.image}
                alt={d.title}
                className="rounded-2xl w-full h-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Serviceprice;