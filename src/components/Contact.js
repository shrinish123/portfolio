import React from "react";
import { FiMail, FiMapPin, FiLinkedin, FiGithub } from "react-icons/fi";
import { profile } from "../data/content";

export default function Contact() {
  return (
    <section className="section section--tight" id="contact">
      <div className="wrap">
        <div className="contact reveal">
          <div className="kicker" style={{ justifyContent: "center" }}>
            06 — contact
          </div>
          <h2 className="contact__title">
            Let's build something <span className="grad-text">that scales</span>
          </h2>
          <p className="contact__sub">
            Open to backend, distributed systems and AI-infra roles — and always happy to
            talk about agent evals, Kafka topologies or a hard problem you're stuck on.
          </p>

          <div className="contact__actions">
            <a className="btn btn--primary" href={`mailto:${profile.email}`}>
              <FiMail size={15} /> {profile.email}
            </a>
            <a
              className="btn btn--ghost"
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin size={15} /> linkedin
            </a>
            <a
              className="btn btn--ghost"
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub size={15} /> github
            </a>
          </div>

          <div className="contact__meta">
            <span>
              <FiMapPin size={13} /> {profile.location}
            </span>
            <span>{profile.phone}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
