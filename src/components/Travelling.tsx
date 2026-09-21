
import { GoDotFill } from 'react-icons/go';

const images: string[] = [
  'https://websitedemos.net/web-designer-portfolio-02/wp-content/uploads/sites/1513/2025/01/Travel-Img-1.png',
  'https://websitedemos.net/web-designer-portfolio-02/wp-content/uploads/sites/1513/2025/01/Travel-Img-2.png',
  'https://websitedemos.net/web-designer-portfolio-02/wp-content/uploads/sites/1513/2025/01/Travel-Img-3.png',
  'https://websitedemos.net/web-designer-portfolio-02/wp-content/uploads/sites/1513/2025/01/Travel-Img-4.png',
];

const Travelling = () => {
  return (
    <section className="bg-black text-white py-16 px-20">
      <div className="flex justify-center items-center gap-2 mb-4">
        <span className="ring-1 ring-gray-600 ring-offset-gray-100 rounded-full px-4 py-1 flex w-fit items-center justify-center mb-2 font-figtree text-[16px]">
          <GoDotFill className="text-[#82FF1F]" />
          MY WORLD
        </span>
      </div>

      <h2 className="text-[80px] text-center mb-12 leading-none">
        When I am not Working <br /> I am Travelling
      </h2>

      <div className="grid grid-cols-4 gap-4">
        {images.map((src: string, i: number) => (
          <div key={i} className="rounded-2xl overflow-hidden h-100">
            <img
              src={src}
              alt={`travel-${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Travelling;