import React from "react";
import { FiGithub, FiLinkedin, FiTwitter, FiCode } from "react-icons/fi";
import { profile } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <span>© {year} Shrinish Vhanbatte</span>
        <span>built with react · no template, no bootstrap</span>
        <div className="footer__socials">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a
            href={profile.socials.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <FiTwitter />
          </a>
          <a
            href={profile.socials.leetcode}
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
          >
            <FiCode />
          </a>
        </div>
      </div>
    </footer>
  );
}
