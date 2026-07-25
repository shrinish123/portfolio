import React from "react";
import { marquee } from "../data/content";

export default function Marquee() {
  // Duplicated so the -50% translate loops seamlessly.
  const items = [...marquee, ...marquee];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((item, i) => (
          <span className="marquee__item" key={`${item}-${i}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
