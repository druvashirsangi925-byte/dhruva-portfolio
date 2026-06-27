import {
  FaChartBar,
  FaCss3Alt,
  FaEnvelope,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaLinkedinIn,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const contact = {
  email: "druvashirsangi925@gmail.com",
  phone: "+91 9353800925",
  phoneHref: "tel:+919353800925",
  location: "Hubli, Karnataka, India",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
};

export const techIcons = [
  { label: "React", Icon: FaReact, color: "#61dafb" },
  { label: "Python", Icon: FaPython, color: "#ffd166" },
  { label: "Java", Icon: FaJava, color: "#ff7a90" },
  { label: "SQL", Icon: SiMysql, color: "#58e6ff" },
  { label: "GitHub", Icon: FaGithub, color: "#ffffff" },
  { label: "HTML", Icon: FaHtml5, color: "#ff8a4c" },
  { label: "CSS", Icon: FaCss3Alt, color: "#5aa7ff" },
  { label: "JavaScript", Icon: FaJs, color: "#f8df62" },
];

export const education = [
  {
    title: "B.E. Computer Science and Engineering",
    place: "Alva's Institute of Engineering and Technology, Mijar",
    score: "CGPA 6.89",
  },
  {
    title: "Diploma in Computer Science",
    place: "Govt. Polytechnic Vidyanagar, Hubli",
    score: "60%",
  },
  {
    title: "Secondary Schooling",
    place: "Rotary School Deshpande Nagar, Hubli",
    score: "89%",
  },
];

export const projects = [
  {
    title: "IoT-Based Elderly Health Monitoring System",
    description:
      "IoT health monitoring concept for elderly care with vital tracking, alert logic, and a clear dashboard experience.",
    tags: ["IoT", "Health Tech", "Dashboard"],
  },
  {
    title: "Home Service Management System",
    description:
      "Service-management platform concept connecting users with technicians through role-based navigation and structured workflows.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Student Performance Analytics Dashboard",
    description:
      "Analytics dashboard for performance, attendance, and subject trends using Python, SQL, Excel, and visual insights.",
    tags: ["Python", "SQL", "Analytics"],
  },
  {
    title: "College Event Management Portal",
    description:
      "Responsive web portal prototype for registrations, coordination, updates, navigation flow, and event data handling.",
    tags: ["Web Portal", "UI Flow", "SQL"],
  },
];

export const skillGroups = [
  {
    title: "Programming",
    skills: [
      { label: "C" },
      { label: "C++" },
      { label: "Python", Icon: FaPython },
      { label: "SQL", Icon: SiMysql },
      { label: "Java", Icon: FaJava },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { label: "HTML", Icon: FaHtml5 },
      { label: "CSS", Icon: FaCss3Alt },
      { label: "JavaScript", Icon: FaJs },
      { label: "React", Icon: FaReact },
    ],
  },
  {
    title: "Data + Design",
    skills: [
      { label: "Excel" },
      { label: "Tableau", Icon: FaChartBar },
      { label: "UI/UX" },
      { label: "Wireframing" },
      { label: "User Research" },
      { label: "Prototyping" },
    ],
  },
];

export const certifications = [
  "Coursera - Software and Project Management",
  "Infosys Springboard - C, Java",
];

export const socialLinks = [
  {
    label: "GitHub",
    href: contact.github,
    Icon: FaGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    href: contact.linkedin,
    Icon: FaLinkedinIn,
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${contact.email}`,
    Icon: FaEnvelope,
    external: false,
  },
];
