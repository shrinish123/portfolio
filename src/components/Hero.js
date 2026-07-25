import React from "react";
import { FiArrowUpRight, FiGithub, FiFileText } from "react-icons/fi";
import Typer from "./Typer";
import Terminal from "./Terminal";
import { profile, stats } from "../data/content";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div className="hero__grid">
          <div>
            <span className="hero__status mono">
              <i /> open to backend / AI infra roles
            </span>

            <h1 className="hero__name">
              Shrinish
              <br />
              <span className="grad-text">Vhanbatte</span>
            </h1>

            <div className="hero__rolebox">
              <span className="arrow">›</span>
              <Typer phrases={profile.roles} />
            </div>

            <p className="hero__tagline">{profile.tagline}</p>

            <div className="hero__actions">
              <a className="btn btn--primary" href="#work">
                see the work <FiArrowUpRight size={15} />
              </a>
              <a
                className="btn btn--ghost"
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                <FiFileText size={15} /> resume
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

            <div className="hero__stats">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="stat__value">{s.value}</div>
                  <div className="stat__label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <Terminal />
        </div>
      </div>
    </header>
  );
}
