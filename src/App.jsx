import {
  FaArrowRight,
  FaAward,
  FaChartBar,
  FaCode,
  FaDatabase,
  FaCss3Alt,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaHtml5,
  FaJava,
  FaJs,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
  FaPython,
  FaReact,
  FaUsers,
} from "react-icons/fa";
import "./styles.css";

const projects = [
  ["IoT-Based Elderly Health Monitoring System", "Smart system to monitor vital signs and send real-time alerts.", "watch"],
  ["Home Service Management System", "Platform connecting users with local service providers.", "home"],
  ["Student Performance Analytics Dashboard", "Dashboard to analyze student performance and attendance.", "chart"],
  ["College Event Management Portal", "Portal for event registration, coordination and updates.", "calendar"],
];

const skills = [
  ["C", <FaCode />],
  ["C++", <FaCode />],
  ["Python", <FaPython />],
  ["SQL", <FaDatabase />],
  ["Java", <FaJava />],
  ["HTML", <FaHtml5 />],
  ["CSS", <FaCss3Alt />],
  ["JavaScript", <FaJs />],
  ["Excel", "XL"],
  ["Tableau", <FaChartBar />],
];

const education = [
  ["2024 - 2025", "B.E Computer Science and Engineering", "Aloys Institute of Engineering and Technology, Mijar", "CGPA: 6.89"],
  ["2021 - 2024", "Diploma in Computer Science", "Govt. Polytechnic Vidyanagar, Hubli", "Percentage: 60%"],
  ["2010 - 2021", "Secondary Schooling", "Rotary School Deshpande Nagar, Hubli", "Percentage: 89%"],
];

function ProjectIcon({ type }) {
  if (type === "watch") return <div className="project-visual watch"><span /></div>;
  if (type === "home") return <div className="project-visual home"><span /></div>;
  if (type === "chart") return <div className="project-visual chart"><i /><i /><i /></div>;
  return <div className="project-visual calendar"><span /><span /><span /><span /></div>;
}

function HeroScene() {
  const tiles = [
    ["React", <FaReact />, "tile-react"],
    ["Python", <FaPython />, "tile-python"],
    ["Java", <FaJava />, "tile-java"],
    ["SQL", "SQL", "tile-sql"],
    ["HTML", <FaHtml5 />, "tile-html"],
    ["CSS", <FaCss3Alt />, "tile-css"],
  ];

  return (
    <div className="hero-scene" aria-hidden="true">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="glow-ring" />
      <div className="laptop">
        <div className="laptop-screen">
          <div className="screen-bar"><span /><span /><span /></div>
          <pre>{`function Developer() {
  const skills = ["Python", "React", "SQL"];
  return (
    <Future role="developer">
      building the future
    </Future>
  );
}`}</pre>
        </div>
        <div className="laptop-base" />
      </div>
      <div className="gem gem-one" />
      <div className="gem gem-two" />
      {tiles.map(([label, icon, className]) => (
        <div className={`tech-tile ${className}`} key={label}>
          {icon}
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <main className="site-shell">
      <div className="space-bg" />
      <nav className="top-nav">
        <a className="brand" href="#home"><span>DP</span>Dhruva I S</a>
        <div className="nav-links">
          {["Home", "About", "Education", "Projects", "Skills", "Certifications", "Contact"].map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item}>{item}</a>
          ))}
        </div>
        <div className="nav-socials">
          <a href="https://github.com/" aria-label="GitHub"><FaGithub /></a>
          <a href="https://linkedin.com/" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="mailto:druvashirsangi925@gmail.com" aria-label="Email"><FaEnvelope /></a>
        </div>
      </nav>

      <aside className="social-rail">
        <a href="https://github.com/" aria-label="GitHub"><FaGithub /></a>
        <a href="https://linkedin.com/" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="mailto:druvashirsangi925@gmail.com" aria-label="Email"><FaEnvelope /></a>
      </aside>

      <section id="home" className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Hello, I'm</span>
          <h1>Dhruva <span>I S</span></h1>
          <p className="role">Software Developer <b /> UI Designer <b /> CSE Student</p>
          <p className="intro">
            Motivated CSE student passionate about building innovative solutions through code and design.
            I love turning ideas into real-world applications.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#projects">View Projects <FaArrowRight /></a>
            <a className="btn" href="/dhruva_resume_latex_updated.pdf">Download Resume <FaDownload /></a>
            <a className="btn" href="#contact">Contact Me <FaPaperPlane /></a>
          </div>
        </div>
        <HeroScene />
      </section>

      <div className="scroll-cue">Scroll Down<span /></div>

      <section id="about" className="glass-panel about-panel">
        <div className="avatar-card"><div className="avatar-face">DIS</div></div>
        <div>
          <h2>About Me</h2>
          <p>
            I'm a Computer Science Engineering student with a strong interest in software development,
            data handling, and UI/UX design. I enjoy solving real-world problems and continuously
            learning new technologies to build meaningful digital solutions.
          </p>
        </div>
        <div className="strength-grid">
          <div><FaPython /><strong>Python</strong><span>Expertise</span></div>
          <div><FaAward /><strong>Problem Solver</strong><span>Analytical Thinker</span></div>
          <div><FaReact /><strong>UI/UX Design</strong><span>Creative</span></div>
          <div><FaUsers /><strong>Team Player</strong><span>Collaborative</span></div>
        </div>
      </section>

      <section className="split-grid">
        <div id="education" className="glass-panel">
          <h2>Education</h2>
          <div className="timeline">
            {education.map(([year, title, school, detail]) => (
              <article className="timeline-item" key={title}>
                <div className="timeline-icon"><FaGraduationCap /></div>
                <span>{year}</span>
                <h3>{title}</h3>
                <p>{school}</p>
                <small>{detail}</small>
              </article>
            ))}
          </div>
        </div>

        <div id="projects" className="glass-panel projects-panel">
          <div className="section-head">
            <h2>Projects</h2>
            <a href="#projects">View All <FaArrowRight /></a>
          </div>
          <div className="project-grid">
            {projects.map(([title, text, type]) => (
              <article className="project-card" key={title}>
                <ProjectIcon type={type} />
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#projects">View Project <FaArrowRight /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="glass-panel skills-panel">
        <h2>Skills</h2>
        <div className="skill-row">
          {skills.map(([name, icon]) => (
            <div className="skill-pill" key={name}><span>{icon}</span>{name}</div>
          ))}
        </div>
      </section>

      <section className="split-grid bottom-grid">
        <div id="certifications" className="glass-panel">
          <h2>Certifications</h2>
          <div className="cert-grid">
            <article><span className="coursera">coursera</span><strong>Software and Project Management</strong><FaAward /></article>
            <article><span className="infosys">Infosys Springboard</span><strong>C, Java</strong><FaAward /></article>
          </div>
        </div>

        <div id="contact" className="glass-panel contact-panel">
          <FaPaperPlane className="plane" />
          <h2>Let's Connect</h2>
          <p>I'm open to opportunities and collaborations. Feel free to reach out.</p>
          <div className="contact-layout">
            <div className="contact-lines">
              <span><FaEnvelope /> druvashirsangi925@gmail.com</span>
              <span><FaPhoneAlt /> 9353800925</span>
              <span><FaMapMarkerAlt /> Hubli, Karnataka, India</span>
            </div>
            <div className="contact-buttons">
              <a href="https://github.com/"><FaGithub />GitHub</a>
              <a href="https://linkedin.com/"><FaLinkedin />LinkedIn</a>
              <a href="mailto:druvashirsangi925@gmail.com"><FaEnvelope />Email</a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand" href="#home"><span>DP</span>Dhruva I S</a>
        <p>© 2025 Dhruva I S. All rights reserved.</p>
        <p>Built with React</p>
      </footer>
    </main>
  );
}
