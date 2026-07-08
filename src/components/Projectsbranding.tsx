import React, { useState } from 'react';

const Projectsbranding = () => {
  const [active, setActive] = useState('All');
  const tabs = ['All', 'Visual Design', 'Development', 'Branding'];

  return (
    <section className="bg-black pb-30">
      <div>
        <div className="text-[#ffffff] mx-20">
          <h1 className="text-[200px] pt-30 pb-5 font-verdana">PROJECTS</h1>

          <ul className="flex gap-7 text-[24px] font-verdana">
            {tabs.map((tab) => (
              <li
                key={tab}
                onClick={() => setActive(tab)}
                className={`cursor-pointer pb-1 ${
                  active === tab
                    ? 'text-white underline decoration-white decoration-2 underline-offset-10'
                    : 'text-[#4F4F4F]'
                }`}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projectsbranding;