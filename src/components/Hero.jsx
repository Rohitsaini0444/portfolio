import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import profile from '../data/profile';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-950 to-cyan-900/20" />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center z-10"
            >
                <h2 className="text-cyan-400 text-xl mb-4">
                    Hello, I’m
                </h2>

                <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                    Rohit Saini
                </h1>

                <TypeAnimation
                    sequence={[
                        'MERN Stack Developer',
                        1500,
                        'Full Stack Engineer',
                        1500,
                        'Javascript Developer',
                        1500,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-2xl md:text-4xl text-gray-300 font-semibold"
                />

                <p className="max-w-2xl mx-auto mt-8 text-gray-400 text-lg leading-relaxed">
                    Passionate software engineer specializing in scalable web applications,
                    modern React ecosystems, Node.js APIs, and performance-focused backend systems.
                </p>

                <div className="flex justify-center gap-4 mt-10">
                    <a
                        href="#projects"
                        className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:scale-105 transition-all duration-300 font-semibold"
                    >
                        View Projects
                    </a>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 rounded-full border border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center gap-2"
                    >
                        <FaDownload /> Resume
                    </a>
                </div>

                <div className="flex justify-center gap-6 mt-10 text-3xl">
                    <a href={profile.github} className="hover:text-cyan-400 transition-all">
                        <FaGithub />
                    </a>

                    <a href={profile.linkdin} className="hover:text-cyan-400 transition-all">
                        <FaLinkedin />
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;