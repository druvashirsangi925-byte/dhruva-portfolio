import { motion } from "framer-motion";
import { FaFileArrowDown } from "react-icons/fa6";
import { contact, socialLinks } from "../data.js";

function Contact({ resumeUrl }) {
  const contactActions = [
    ...socialLinks,
    {
      label: "Resume",
      href: resumeUrl,
      Icon: FaFileArrowDown,
      download: true,
      external: false,
    },
  ];

  return (
    <section className="section-pad section-shell grid gap-8 lg:grid-cols-[1fr_430px] lg:items-start" id="contact">
      <div>
        <p className="section-kicker">Contact</p>
        <h2 className="section-title">Let's connect and build something sharp.</h2>
      </div>

      <motion.div
        className="glass-panel contact-card grid gap-5 p-7"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <h3 className="text-2xl font-black text-white">Let's Connect</h3>
        <a className="contact-link" href={`mailto:${contact.email}`}>
          Email: {contact.email}
        </a>
        <a className="contact-link" href={contact.phoneHref}>Phone: {contact.phone}</a>
        <span className="text-slate-400">Location: {contact.location}</span>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
          {contactActions.map(({ label, href, Icon, external, download }) => (
            <a
              className="social-button large-social"
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              download={download}
              aria-label={label}
              data-tooltip={label}
              key={label}
            >
              <Icon />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
