import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import profile from '../data/profile';

const Footer = () => {
  return (
    <footer className="py-10 border-t border-white/10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            MERN Portfolio
          </h3>

          <p className="text-gray-500 mt-2">
            Designed & Developed with React and Tailwind CSS.
          </p>
        </div>

        <div className="flex gap-6 text-2xl text-gray-400">
          <a href={profile.github}  target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-all duration-300">
            <FaGithub />
          </a>

          <a href={profile.linkdin} target="blank" rel="noreferrer" className="hover:text-cyan-400 transition-all duration-300">
            <FaLinkedin />
          </a>

          <a href={profile.twitter}  target="blank" rel="noreferrer" className="hover:text-cyan-400 transition-all duration-300">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;