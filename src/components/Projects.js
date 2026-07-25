import React, { useCallback } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../data/content";

export default function Projects() {
  // Spotlight follows the pointer across each card.
  const onMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="kicker">03 — selected work</div>
          <h2 className="section-title">
            Things I'm <span className="grad-text">building</span>
          </h2>
          <p className="section-sub">
            Mostly backends for AI products — the plumbing, the evals, and the parts that
            have to survive a retry storm.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((p) => (
            <article className="proj reveal" key={p.name} onMouseMove={onMove}>
              <div className="proj__top">
                <div>
                  <h3 className="proj__name">{p.name}</h3>
                  <div className="proj__blurb">{p.blurb}</div>
                </div>
                <span className="proj__status" data-status={p.status}>
                  {p.status}
                </span>
              </div>

              <p className="proj__desc">{p.description}</p>

              <ul className="proj__highlights">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="chips proj__stack">
                {p.stack.map((tech) => (
                  <span className="chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="proj__foot">
                <span className="proj__period">{p.period}</span>
                <div className="proj__links">
                  {p.links.github && (
                    <a
                      className="iconbtn"
                      href={p.links.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiGithub size={14} /> code
                    </a>
                  )}
                  {p.links.demo && (
                    <a
                      className="iconbtn"
                      href={p.links.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiExternalLink size={14} /> demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
