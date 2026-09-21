
import { Link } from 'react-router-dom';

const Navbar = () => {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="flex justify-between items-center px-24 py-5 bg-black text-white">
      <h1 className="cursor-pointer text-[#f8f8f8] font-semibold font-figtree text-2xl">
        MANASSEH EDWIN{'\u00AE'}
      </h1>

      <div className="flex gap-8 items-center">
        <ul className="flex space-x-8 items-center">
          {links.map(({ to, label }) => (
            <li key={to} className="list-none">
              <Link to={to} className="hover:text-[#82ff1f] transition-colors">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="ring-1 ring-white rounded-full px-6 py-2 cursor-pointer hover:bg-[#82ff1f] hover:text-[#111111] transition-colors"
          onClick={() =>
            window.open('https://wa.me/2348085464350?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20service', '_blank')
          }
        >
          Contact Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
