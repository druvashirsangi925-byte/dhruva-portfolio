import { motion } from "framer-motion";
import { projects } from "../data.js";

function Projects() {
  return (
    <section className="section-pad section-shell" id="projects">
      <div className="grid gap-6 lg:grid-cols-[1fr_390px] lg:items-end">
        <div>
          <p className="section-kicker">Projects</p>
          <h2 className="section-title">Premium project cards with practical engineering intent.</h2>
        </div>
        <p className="text-slate-400">
          Each project reflects a different layer of software work: interfaces,
          structured data, dashboards, and real-world problem framing.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            className="project-tilt"
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08 }}
          >
            <span className="text-sm font-black text-purple-300">0{index + 1}</span>
            <h3 className="mt-8 text-2xl font-black leading-tight text-white">{project.title}</h3>
            <p className="mt-4 min-h-28 text-slate-400">{project.description}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span className="badge-3d" key={tag}>{tag}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
