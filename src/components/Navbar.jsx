import { Link } from 'react-scroll';
import { FaCode } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-slate-950/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3 text-2xl font-bold">
          <FaCode className="text-cyan-400" />
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Portfolio
          </span>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          {['about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-400 transition-all duration-300 uppercase tracking-wider"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;