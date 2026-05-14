
import React from 'react'
import { GoDotFill } from "react-icons/go";
import { HiMiniArrowTurnDownRight } from "react-icons/hi2";
import myimage from '../assets/me.png'



const Herosection = () => {
  return (
    
    <section className=' bg-black pb-12 pl-20 px-20'>
        <div className='text-white mx-auto w-fit pt-30 text-center'>
            <span className='ring-1 ring-gray-600 ring-offset-gray-100 rounded-full px-4 py-1 italic flex w-fit mx-auto items-center justify-center'><GoDotFill className='text-[#82FF1F] text-2xl'/>AVAILABLE FOR WORK</span>
            <h1 className='text-9xl'>MANASSEH <br /> EDWIN&copy;</h1>
        </div>
        
        <div className='text-white'>
          <p className='pt-25 pb-12'>
            I blend artistry with cutting-edge technology to deliver <br />
            websites that not only look stunning but also drive results.
          </p>
          <button className='ring rounded-full px-5 py-2 text-[#1A1A1A] font-[Helvetica,Verdana,Arial,sans-serif] text-[18px] bg-[#82FF1F] hover:bg-amber-50 transition duration-300 hover:animate-bounce flex justify-center items-center '><HiMiniArrowTurnDownRight className='mr-1'/> Schedule a consultation</button>
        </div>
        {/* <img src={myimage} alt="me" /> */}

    </section>
  )
}

export default Herosection
