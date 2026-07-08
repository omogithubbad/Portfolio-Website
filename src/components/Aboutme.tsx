import React from 'react';
import { GoDotFill } from 'react-icons/go';
import {
  FaBehance,
  FaDribbble,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import myimage from '../assets/Manasseh1.png';

const socialLinks = [
  { icon: FaBehance, href: '#' },
  { icon: FaDribbble, href: '#' },
  { icon: FaLinkedinIn, href: '#' },
  { icon: FaInstagram, href: '#' },
];

const Aboutme = () => {
  return (
    <section className="bg-white py-20 px-20">
      <div className="flex items-center gap-30 max-w-6xl mx-auto">
        {/* Left: Image in rounded green box */}
        <div className="shrink-0 w-105 h-125 rounded-3xl overflow-hidden bg-[#82FF1F]">
          <img
            src={myimage}
            alt="me"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Right: Content */}
        <div className="flex flex-col text-[#1A1A1A] pl-8">
          {/* Badge */}
          <span className="ring-1 ring-gray-400 rounded-full px-4 py-1 flex w-fit items-center gap-1 mb-4">
            <GoDotFill className="text-[#82FF1F] text-lg" />
            <span className="text-sm font-figtree tracking-widest text-gray-600">
              ABOUT ME
            </span>
          </span>

          {/* Heading */}
          <h1 className="text-[64px] font-verdana leading-none tracking-tight mb-5">
            Discover My <br /> Design Journey
          </h1>

          {/* Divider */}
          <div className="w-14 h-0.5 bg-[#82FF1F] mb-5" />

          {/* Description */}
          <p className="text-base font-figtree text-gray-600 leading-relaxed max-w-lg mb-8">
            Hello! I'm Manasseh Edwin, a passionate Web Designer with over 3+
            years of experience in creating visually appealing and user-friendly
            websites. My mission is to bring your brand to life through
            innovative design solutions tailored to your unique needs.
          </p>

          {/* Social icons */}
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-12 h-12 rounded-full text-white flex items-center justify-center transition-colors duration-200 group"
                style={{ backgroundColor: '#1A1A1A' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    '#82FF1F';
                  (e.currentTarget as HTMLElement).style.color = '#1A1A1A';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    '#1A1A1A';
                  (e.currentTarget as HTMLElement).style.color = '#ffffff';
                }}
              >
                <Icon className="text-lg" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
