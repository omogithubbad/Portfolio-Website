import React from 'react';
import { GoDotFill } from 'react-icons/go';
import { HiMiniArrowTurnDownRight } from 'react-icons/hi2';

const Workflow = () => {
  return (
    <section className="grid grid-cols-2 gap-2 px-20 my-30">
      <div className='flex flex-col'>
        <span className="ring-1 ring-gray-600 ring-offset-gray-100 rounded-full px-4 py-1 italic flex w-fit  items-center justify-center mb-2">
          <GoDotFill className="text-[#82FF1F] text-2xl" />
          MY PROCESS
        </span>

        <h1 className='text-[80px] font-[Helvetica,Verdana,Arial,sans-serif] leading-none text-[#1A1A1A]'>My Creative Workflow</h1>

        <button className="ring-0 rounded-full  px-5 py-2 text-[#1A1A1A] font-[Helvetica,Verdana,Arial,sans-serif] text-base bg-[#82FF1F] hover:bg-amber-50 transition duration-300 hover:animate-bounce flex justify-center items-center w-fit mt-15 border-none">
          <HiMiniArrowTurnDownRight className="mr-1" /> Schedule a consultation
        </button>
      </div>


      <div className='divide-y mx-20'>
        <div className=''>
          <h1 className='text-4xl font-[Helvetica,Verdana,Arial,sans-serif] text-[#1A1A1A] pt5'>1. Discovery</h1>
          <p className='text-[#1A1A1A] font-[Figtree,sans-serif] text-base py-5'>
            I dive deep into understanding your brand, goals, and target
            audience. Through detailed consultations and research, I gather
            essential insights that inform the entire design process.
          </p>
        </div>
        <div>

          <h1 className='text-4xl font-[Helvetica,Verdana,Arial,sans-serif] text-[#1A1A1A] pt-5'>2. Design</h1>
          <p className='text-[#1A1A1A] font-[Figtree,sans-serif] text-base py-5'>
            I begin crafting visually compelling and strategic designs. This
            step focuses on translating ideas into tangible visual concepts that
            align with your brand.
          </p>
        </div>
        <div>
          <h1 className='text-4xl font-[Helvetica,Verdana,Arial,sans-serif] text-[#1A1A1A] pt-5'>3. Development</h1>
          <p className='text-[#1A1A1A] font-[Figtree,sans-serif] text-base py-5'>
            I transform the visuals into a fully functional website. This phase
            involves meticulous coding and integration to ensure your site is
            responsive and performs seamlessly across devices.
          </p>
        </div>
        <div>
          <h1 className='text-4xl font-[Helvetica,Verdana,Arial,sans-serif] text-[#1A1A1A] pt-5'>4. Launch</h1>
          <p className='text-[#1A1A1A] font-[Figtree,sans-serif] text-base py-5 divde-y  border-b'>
            I rigorously test the website to ensure everything functions
            flawlessly before going live. Post-launch, I provide support and
            guidance to help you maximize your new online presence. What I Offer
          </p>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
