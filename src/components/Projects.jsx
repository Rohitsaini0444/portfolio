import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projects from '../data/projects';

const Projects = () => {
    return (
        <section id="projects" className="py-28 px-6 bg-slate-950">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-16">
                    Featured Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                            whileHover={{ y: -10 }}
                            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden"
                        >
                            <div className="h-52 bg-gradient-to-br from-purple-500 to-cyan-500" />

                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-4">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mb-5 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <button onClick={() =>
                                        window.open(
                                             project?.demo,
                                            "_blank"
                                        )
                                    } className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold flex items-center justify-center gap-2">
                                        <FaExternalLinkAlt /> Live Demo
                                    </button>

                                    <button onClick={() =>
                                        window.open(
                                            project?.gitHub,
                                            "_blank"
                                        )
                                    } className="flex-1 py-3 rounded-xl border border-slate-700 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center gap-2">
                                        <FaGithub /> GitHub
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;