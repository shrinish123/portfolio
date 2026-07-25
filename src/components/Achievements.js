import React from "react";
import { achievements } from "../data/content";

export default function Achievements() {
  return (
    <section className="section" id="wins">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="kicker">05 — wins</div>
          <h2 className="section-title">Competitions &amp; honors</h2>
        </div>

        <div className="wins__grid">
          {achievements.map((win) => {
            const Tag = win.link ? "a" : "div";
            const props = win.link
              ? { href: win.link, target: "_blank", rel: "noreferrer" }
              : {};

            return (
              <Tag className="win reveal" key={win.title} {...props}>
                <span className="win__tag">{win.tag}</span>
                <h3 className="win__title">{win.title}</h3>
                <p className="win__detail">{win.detail}</p>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
