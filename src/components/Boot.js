import React from "react";

const LINES = [
  "› booting runtime",
  "› loading agent graph",
  "› connecting kafka brokers",
];

export default function Boot({ done }) {
  return (
    <div className={`boot${done ? " boot--gone" : ""}`} aria-hidden={done}>
      <div className="boot__inner">
        {LINES.map((line) => (
          <div className="boot__line" key={line}>
            {line} <b>ok</b>
          </div>
        ))}
        <div className="boot__bar">
          <span />
        </div>
      </div>
    </div>
  );
}
