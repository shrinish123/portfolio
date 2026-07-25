import React, { useEffect, useMemo, useState } from "react";
import { HiOutlineDocumentText } from "react-icons/hi";
import useActiveSection from "../hooks/useActiveSection";
import { profile } from "../data/content";

const LINKS = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "work", label: "work" },
  { id: "stack", label: "stack" },
  { id: "wins", label: "wins" },
];

export default function Nav() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const ids = useMemo(() => LINKS.map((l) => l.id), []);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("is-locked", open);
    return () => document.body.classList.remove("is-locked");
  }, [open]);

  return (
    <nav className={`nav${stuck ? " nav--stuck" : ""}`}>
      <div className="nav__inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__dot" />
          <span>{profile.handle}</span>
          <span className="brand__slash">/</span>
          <span style={{ color: "var(--text-mute)" }}>agent</span>
        </a>

        <button
          className="nav__toggle"
          data-open={open}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="nav__links" data-open={open}>
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className={`nav__link${
                active === link.id ? " nav__link--active" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            className="btn btn--primary nav__cta"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            <HiOutlineDocumentText size={15} /> get in touch
          </a>
        </div>
      </div>
    </nav>
  );
}
