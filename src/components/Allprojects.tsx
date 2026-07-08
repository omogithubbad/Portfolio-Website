import React from 'react';

type Portfolio = {
  title: string;
  year: number;
  image: string;
};

const Allprojects = () => {
  const data: Portfolio[] = [
    {
      title: 'Project Name Here',
      year: 2024,
      image:
        'https://websitedemos.net/web-designer-portfolio-02/wp-content/uploads/sites/1513/2025/01/Portfolio-Img-1.png',
    },
    {
      title: 'Project Name Here',
      year: 2024,
      image:
        'https://websitedemos.net/web-designer-portfolio-02/wp-content/uploads/sites/1513/2025/01/Portfolio-Img-2.png',
    },
    {
      title: 'Project Name Here',
      year: 2025,
      image:
        'https://websitedemos.net/web-designer-portfolio-02/wp-content/uploads/sites/1513/2025/02/Porject-Imgg.png',
    },
    {
      title: 'Project Name Here',
      year: 2026,
      image:
        'https://websitedemos.net/web-designer-portfolio-02/wp-content/uploads/sites/1513/2025/01/Portfolio-Img-4.png',
    },
    {
      title: 'Project Name Here',
      year: 2026,
      image:
        'https://websitedemos.net/web-designer-portfolio-02/wp-content/uploads/sites/1513/2025/01/Project-Pic-6.png',
    },
    {
      title: 'Project Name Here',
      year: 2026,
      image:
        'https://websitedemos.net/web-designer-portfolio-02/wp-content/uploads/sites/1513/2025/01/Project-Pic.png',
    },
  ];

  return (
    <section className="bg-[#111111] px-20 pb-40">
      <div className="grid grid-cols-2 text-[#f8f8f8] gap-5">
        {data.map((p, index) => (
          <article
            key={index}
            className="w-full ring-1 ring-gray-600 rounded-2xl overflow-hidden"
          >
            <header className="flex justify-between items-center p-10">
              <h3>{p.title}</h3>
              <p>{p.year}</p>
            </header>
            <img src={p.image} alt={p.title} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Allprojects;
