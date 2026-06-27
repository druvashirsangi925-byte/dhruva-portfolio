import { motion } from "framer-motion";
import HeroScene from "./HeroScene.jsx";
import { techIcons } from "../data.js";

const iconPositions = [
  { left: "4%", top: "8%" },
  { right: "5%", top: "12%" },
  { left: "-1%", top: "42%" },
  { right: "-2%", top: "43%" },
  { left: "11%", bottom: "13%" },
  { right: "14%", bottom: "20%" },
  { left: "43%", bottom: "3%" },
];

function Hero({ resumeUrl }) {
  return (
    <section className="section-shell relative grid min-h-screen grid-cols-1 items-center gap-12 pb-20 pt-36 lg:grid-cols-[1fr_520px] lg:pt-28" id="home">
      <div className="gradient-blob left-[8%] top-[18%]" />
      <div className="gradient-blob right-[8%] top-[16%] animation-delay-2" />
      <div className="particle-field" />

      <motion.div
        className="relative z-10 max-w-3xl lg:pl-10"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="mb-5 text-[56px] font-black leading-[0.95] text-gradient sm:text-7xl lg:text-[86px]">
          Dhruva I S
        </h1>
        <p className="mb-6 text-xl font-semibold text-slate-200">Software Developer • UI Designer • CSE Student</p>
        <p className="max-w-2xl text-lg leading-8 text-slate-400">
          I build clean web experiences where interface design, software logic, and data come together.
          Currently growing as a CSE student with a focus on React, Python, SQL, and thoughtful digital products.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a className="premium-button primary" href="#projects">View Projects</a>
          <a className="premium-button" href={resumeUrl} download>Download Resume</a>
          <a className="premium-button" href="#contact">Contact Me</a>
        </div>
      </motion.div>

      <motion.div
        className="hero-3d relative z-10 min-h-[560px]"
        initial={{ opacity: 0, scale: 0.94, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.12, ease: "easeOut" }}
      >
        <div className="absolute inset-8 rounded-[34px] border border-cyan-300/10 bg-white/[0.035] shadow-2xl shadow-blue-950/60 backdrop-blur-md" />
        <HeroScene />

        {techIcons.slice(0, 7).map(({ label, Icon, color }, index) => (
          <div className="tech-float" key={label} style={{ "--i": index, "--color": color, ...iconPositions[index] }}>
            <Icon />
            <span>{label}</span>
          </div>
        ))}

        <div className="floating-card left-2 top-24">
          <span>Available for</span>
          <strong>Internship</strong>
        </div>
        <div className="floating-card bottom-20 right-2">
          <span>Core stack</span>
          <strong>React + Python</strong>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
