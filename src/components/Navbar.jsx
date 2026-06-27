import { useState } from "react";
import { navLinks, socialLinks } from "../data.js";

function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-1/2 top-4 z-50 flex min-h-16 w-[min(1120px,calc(100%-28px))] -translate-x-1/2 items-center justify-between gap-4 rounded-[24px] border border-white/10 bg-[#0b0b0f]/70 px-4 py-2 shadow-2xl shadow-black/30 backdrop-blur-2xl">
      <a className="flex items-center gap-3 font-black" href="#home" aria-label="Dhruva I S home">
        <span className="grid size-10 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 via-blue-500 to-purple-500 text-sm text-black shadow-lg shadow-cyan-500/20">
          DI
        </span>
        <span>Dhruva I S</span>
      </a>

      <button
        className="grid size-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white md:hidden"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="block h-0.5 w-5 bg-current" />
      </button>

      <nav className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-[calc(100%+10px)] flex-col gap-1 rounded-3xl border border-white/10 bg-[#0b0b0f]/95 p-2 shadow-2xl backdrop-blur-2xl md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
        {navLinks.map((link) => (
          <a
            className={`rounded-2xl px-4 py-3 text-sm font-bold transition md:rounded-full md:py-2.5 ${
              activeSection === link.href.slice(1)
                ? "bg-white text-[#0b0b0f]"
                : "text-slate-300 hover:bg-white/10 hover:text-white"
            }`}
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="hidden items-center gap-2 lg:flex">
        {socialLinks.map(({ label, href, Icon, external }) => (
          <a
            className="icon-button"
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            aria-label={label}
            data-tooltip={label}
            key={label}
          >
            <Icon />
          </a>
        ))}
      </div>
    </header>
  );
}

export default Navbar;
