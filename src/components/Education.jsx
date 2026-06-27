import { motion } from "framer-motion";
import { education } from "../data.js";

function Education() {
  return (
    <section className="section-pad section-shell" id="education">
      <p className="section-kicker">Education</p>
      <h2 className="section-title">Academic foundation in computer science.</h2>
      <div className="mt-10 grid gap-4">
        {education.map((item, index) => (
          <motion.article
            className="timeline-card"
            key={item.title}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.08 }}
          >
            <span className="timeline-dot" />
            <div>
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-2 text-slate-400">{item.place}</p>
            </div>
            <strong className="text-cyan-300">{item.score}</strong>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Education;
