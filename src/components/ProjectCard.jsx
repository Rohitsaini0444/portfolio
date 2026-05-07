import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-3 transition-all duration-300 backdrop-blur-lg">
            <div className="h-52 bg-gradient-to-br from-purple-500 to-cyan-500" />

            <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                    {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-5">
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
                    <button className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold flex items-center justify-center gap-2">
                        <FaExternalLinkAlt /> Demo
                    </button>

                    <button onClick={() =>
                        window.open(
                            "https://github.com/Rohitsaini0444/movie-gpt",
                            "_blank"
                        )
                    } className="flex-1 py-3 rounded-xl border border-slate-700 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center gap-2">
                        <FaGithub /> Code
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;