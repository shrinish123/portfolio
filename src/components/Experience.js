import React from "react";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="kicker">02 — experience</div>
          <h2 className="section-title">Where I've shipped</h2>
          <p className="section-sub">
            Production systems, real traffic, real on-call. Numbers below are the ones I
            measured.
          </p>
        </div>

        <div className="xp">
          {experience.map((job) => (
            <article className="xp__item reveal" key={job.company}>
              <div className="xp__head">
                <h3 className="xp__role">
                  {job.role} <span style={{ color: "var(--text-mute)" }}>@</span>{" "}
                  <span className="xp__company">{job.company}</span>
                </h3>
                <span className="xp__period">{job.period}</span>
              </div>

              <ul className="xp__points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="chips">
                {job.stack.map((tech) => (
                  <span className="chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
