import { motion } from "framer-motion";
import { certifications, skillGroups } from "../data.js";

function Skills() {
  return (
    <section className="section-pad section-shell" id="skills">
      <p className="section-kicker">Skills</p>
      <h2 className="section-title">Comfortable across code, data, and interface design.</h2>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.article
            className="glass-panel p-6"
            key={group.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.08 }}
          >
            <h3 className="text-xl font-black text-white">{group.title}</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span className="badge-3d" key={skill.label}>
                  {skill.Icon ? <skill.Icon /> : null}
                  {skill.label}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-20" id="certifications">
        <p className="section-kicker">Certifications</p>
        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.div
              className="glass-panel p-6 font-bold text-slate-100"
              key={cert}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              {cert}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
