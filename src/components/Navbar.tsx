import React from 'react'

const Navbar = () => {
    
  return (
    <nav className='flex justify-between items-center px-25 py-5 bg-black text-white'>
        <div>
            <h1 className='cursor-pointer text-[#f8f8f8] font-semibold font-[Figtree, san-serif] text-2xl '>MANASSEH EDWIN{'\u00AE'}</h1>
        </div>
        <div className='flex gap-8 items-center'>
            <ul className='flex space-x-8 items-center'>
                <li className='cursor-pointer hover:text-[#82ff1f]'>Home</li>
                <li className='cursor-pointer hover:text-[#82ff1f]'>About</li>
                <li className='cursor-pointer hover:text-[#82ff1f]'>Projects</li>
                <li className='cursor-pointer hover:text-[#82ff1f]'>Services</li>
                <li className='cursor-pointer hover:text-[#82ff1f]'>Contact</li>
            </ul>
            <button className='ring-1 rounded-full px-6 py-2 cursor-pointer hover:bg-[#82ff1f] hover:text-[#111111]'>Contact Me</button>
        </div>
      
    </nav>
  )
}

export default Navbar
