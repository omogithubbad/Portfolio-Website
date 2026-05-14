import React from 'react';
import { GoDotFill } from 'react-icons/go';

const Aboutme = () => {
  return (
    <section className="mx-20 my-30 ">
      <div className="flex justify-center items-center">

        <div className="w-80 h-100 bg-lime-400"></div>

        <div className="text-[#1A1A1A] pl-30">

          <div className='mb-3'>
            <span className="ring-1 ring-gray-600 ring-offset-gray-100 rounded-full px-3 py-1  text-[Figtree,sans-serif] flex w-fit mx-auto items-center justify-center mr-100">
            <GoDotFill className="text-[#82FF1F] text-2xl  " />
            ABOUT ME
          </span>
          </div>

          <h1 className="text-[80px] font-[Helvetica,Verdana,Arial,sans-serif] leading-none">
            Discover My <br /> Design <br /> Journey
          </h1>
          <p className="text-base font-[Figtree,sans-serif] text[#1A1A1A] pt-7">
            Hello! I’m Manasseh Edwin, a passionate Web Designer with over a 2+
            of <br />
            experience in creating visually appealing and user-friendly
            websites. <br />
            My mission is to bring your brand to life through innovative design{' '}
            <br />
            solutions tailored to your unique needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
