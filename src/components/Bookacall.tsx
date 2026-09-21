import { GoDotFill } from 'react-icons/go';
import { HiMiniArrowTurnDownRight } from 'react-icons/hi2';
import {
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
} from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';

const socialLinks = [
  {
    icon: <FaLinkedinIn />,
    href: 'https://linkedin.com/in/yourprofile',
    label: 'LinkedIn',
  },
  {
    icon: <SiUpwork />,
    href: 'https://upwork.com/freelancers/yourprofile',
    label: 'Upwork',
  },
  {
    icon: <FaFacebookF />,
    href: 'https://facebook.com/yourprofile',
    label: 'Facebook',
  },
  {
    icon: <FaWhatsapp />,
    href: 'https://wa.me/yournumber',
    label: 'WhatsApp',
  },
  {
    icon: <FaInstagram />,
    href: 'https://instagram.com/yourhandle',
    label: 'Instagram',
  },
];

const Bookacall = () => {
  return (
    <section>
      <div className="bg-black pb-30">
        <div className="text-[#ffffff] mx-20">
          <h1 className="text-[200px] pt-30 pb-20">CONTACT</h1>

          <span className="ring-1 ring-gray-600 rounded-full px-4 py-1 flex w-fit items-center justify-center mb-4 font-figtree text-[14px]">
            <GoDotFill className="text-[#82FF1F] mr-1" />
            BOOK A CALL
          </span>

          <h2 className="text-[#ffffff] text-[80px] leading-none pb-30">
            I'd love to hear <br /> from you!
          </h2>
        </div>

        <div className="flex gap-10 text-[#ffffff] mx-20">
          {/* EMAIL ME */}
          <div className="flex-1 h-50 bg-[#1A1A1A] flex flex-col items-center justify-center rounded-2xl gap-6">
            <h6 className="text-[16px] font-figtree tracking-widest">
              EMAIL ME
            </h6>
            <a
              href="mailto:oyemaechiedwin@gmail.com"
              className="text-[24px] border-b-2 border-zinc-700 pb-1 hover:text-lime-400 transition flex items-center"
            >
              <HiMiniArrowTurnDownRight className="mr-2 mt-1" />
              oyemaechiedwin@gmail.com
            </a>
          </div>

          {/* FIND ME */}
          <div className="flex-1 h-50 bg-[#1A1A1A] rounded-2xl flex flex-col items-center justify-center gap-6">
            <h6 className="text-[16px] font-figtree tracking-widest">
              FIND ME
            </h6>
            <div className="flex gap-4">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-14 h-14 rounded-full bg-[#82FF1F] text-black flex items-center justify-center text-xl hover:bg-lime-300 transition"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bookacall;
