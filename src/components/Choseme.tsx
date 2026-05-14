import React from 'react'
import { GoDotFill } from 'react-icons/go'



const Choseme = () => {
  type Data = {
    title: string;
    description: string;
  }
  const data: Data [] = [
    {
      title: 'Tailored Design',
      description: 'I believe that every brand is unique and deserves a website that is just as distinctive.'
    },

    {
      title: 'User-Centric Approach',
      description: 'With a strong focus on user experience, I design websites that are intuitive and easy to navigate.'
    },

    {
      title: 'Trending Technologies',
      description: 'I stay at the forefront of web design trends and technologies to offer you the most innovative solutions.Selected Work 2022-2023'
    },
    
    
  ];
  return (
    <section className='bg-[#F8F8F8] py-20 px-20 '>
      <div className=''>
        <h1 className='text-[#1A1A1A] ring-1 rounded-full w-fit ring-offset-gray-100 ring-gray-800 px-4 py-0.5 font-[Figtree,san-serif] text-[16px] flex items-center justify-center'><GoDotFill className='text-[#82FF1F] text-2xl' />WHY CHOOSE ME</h1>
        <h1 className=' font-extralight text-[80px] text-[#111111] font-[Helvetica,Verdana,Arial,sans-serif]'>Why Work with Me</h1>
      </div>

      <div className='grid grid-cols-3 gap-10 my-17 '>
       {data.map((d,index)=>(
        <div key={index} className='bg-[#ffffff] shadow-md py-10 px-10 rounded-3xl w-fit'>
          <h1 className='font-[Helvetica,Verdana,Arial,san-serif] text-[#1A1A1A] text-2xl'>{d.title}</h1>
          <p className=' flex justify-center align-center text-[#1A1A1A] font-[Figtree,san-serif]'>{d.description}</p>
        </div>
       )) }
      </div>
    </section>
  )
}

export default Choseme

