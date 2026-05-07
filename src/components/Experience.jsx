import experiences from "../data/experience";
const Experience = () => {
  return (
    <section id="experience" className="py-28 px-6 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-20">
          Experience
        </h2>

        <div className="relative border-l border-cyan-400/30 pl-10 space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[50px] top-2 w-5 h-5 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50" />

              <div className="bg-slate-800 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition-all duration-300">
                <span className="text-cyan-400 text-sm uppercase tracking-widest">
                  {exp.duration}
                </span>

                <h3 className="text-3xl font-bold mt-2">
                  {exp.role}
                </h3>

                <h4 className="text-purple-400 text-xl mt-2 mb-4">
                  {exp.company}
                </h4>

                <p className="text-gray-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;