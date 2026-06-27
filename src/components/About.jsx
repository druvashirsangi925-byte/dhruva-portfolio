import { motion } from "framer-motion";

function About() {
  return (
    <section className="section-pad section-shell grid gap-8 lg:grid-cols-[0.85fr_1fr]" id="about">
      <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}>
        <p className="section-kicker">About Me</p>
        <h2 className="section-title">Curious about the space where code, data, and design meet.</h2>
      </motion.div>
      <motion.div className="glass-panel p-7" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.1 }}>
        <p>
          I am a motivated Computer Science Engineering student with strong
          interest in software development, data handling, UI fundamentals, and
          problem solving. I like building simple, useful systems where the
          interface is clear and the workflow makes sense.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          {["Hubli, Karnataka", "Python + SQL", "UI/UX fundamentals"].map((item) => (
            <span className="badge-3d" key={item}>{item}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default About;
