import { motion } from 'framer-motion';
import skills from '../data/skills';

const Skills = () => {
  return (
    <section className="py-28 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.08 }}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6 text-center hover:border-cyan-400 transition-all duration-300"
            >
              <h3 className="font-semibold text-lg">{skill}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;