import { motion } from 'framer-motion';
import profilePhoto from "../assets/images/profilePhoto.jpg";
import profile from '../data/profile';
const About = () => {
  return (
    <section id="about" className="py-28 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 blur-3xl opacity-30 rounded-full" />

            <img
              src={profilePhoto}
              alt="profile"
              className="relative rounded-3xl border border-white/10"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-8">
            About Me
          </h2>

          <p className="text-gray-400 leading-relaxed text-lg mb-6">
            MERN Stack Developer with expertise in building scalable full-stack web applications using React.js, Node.js, Express.js, and MongoDB.
          </p>

          <p className="text-gray-400 leading-relaxed text-lg mb-6">
            Passionate about performance optimization, modern UI/UX, REST APIs, authentication systems, and scalable backend architectures.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="bg-slate-900 border border-white/10 rounded-2xl p-6">
              <h3 className="text-4xl font-black text-cyan-400">{profile.experience}+</h3>
              <p className="text-gray-400 mt-2">Years Experience</p>
            </div>

            <div className="bg-slate-900 border border-white/10 rounded-2xl p-6">
              <h3 className="text-4xl font-black text-purple-400">{profile.projectsCompleted}+</h3>
              <p className="text-gray-400 mt-2">Projects Completed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;