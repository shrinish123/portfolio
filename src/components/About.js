import React from "react";
import { education } from "../data/content";

const NOW = [
  "Shipping visual-comparison and agent tooling at LambdaTest",
  "Building AgentCI — evals and CI gates for AI agents",
  "Wiring RAG + tool-calling into Fivo's voice backend",
  "Still grinding contests as @bhatte",
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="kicker">01 — about</div>
          <h2 className="section-title">
            I like problems that only show up <span className="grad-text">at scale</span>.
          </h2>
        </div>

        <div className="about__grid">
          <div className="about__body reveal">
            <p>
              I'm a backend engineer at <strong>LambdaTest</strong>, where I work on the
              systems behind visual testing and AI-driven test authoring — a{" "}
              <strong>C++ visual engine</strong> doing smart image comparison at scale, Go
              microservices talking over <em>Kafka</em>, schedulers, and the un-glamorous
              parts like race conditions and slow SQL that decide whether any of it
              actually holds up.
            </p>
            <p>
              Lately most of my energy goes into <strong>agentic systems</strong>: tool-calling
              agents with typed registries, RAG pipelines over <em>pgvector</em>, and — the
              part I find most interesting — the infrastructure that tells you whether an
              agent got <em>worse</em> after your last change. That's what AgentCI is:
              versioned eval suites, LLM-as-judge scoring, flakiness detection, and a
              pass/warn/fail gate you can actually put in CI.
            </p>
            <p>
              Before all this I spent five years at <strong>IIT Kharagpur</strong> and a lot of
              nights on competitive programming — which is still the fastest way I know to
              stay sharp on the fundamentals everything else is built on.
            </p>
          </div>

          <aside className="about__side">
            <div className="panel reveal">
              <div className="card__label">education</div>
              <div className="edu__school">{education.school}</div>
              <div className="edu__meta">
                {education.degree}
                <br />
                {education.period} · <span className="edu__score">{education.score}</span>
              </div>
            </div>

            <div className="panel reveal">
              <div className="card__label">currently</div>
              <ul className="now__list">
                {NOW.map((item) => (
                  <li key={item}>
                    <i>▹</i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
