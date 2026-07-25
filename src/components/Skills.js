import React from "react";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <section className="section" id="stack">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="kicker">04 — stack</div>
          <h2 className="section-title">What I reach for</h2>
          <p className="section-sub">
            Strongest in Go and Python on the service side, C++ when it has to be fast, and
            the agent tooling layer on top.
          </p>
        </div>

        <div className="skills__grid">
          {skills.map((group) => (
            <div className="skill reveal" key={group.key}>
              <span className="skill__icon">{group.icon}</span>
              <h3 className="skill__title">{group.title}</h3>
              <ul className="skill__items">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
