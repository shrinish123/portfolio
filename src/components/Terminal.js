import React, { useEffect, useRef, useState } from "react";
import { trace } from "../data/content";

// Replays a synthetic agent run, line by line, then loops.
export default function Terminal() {
  const [rows, setRows] = useState([]);
  const bodyRef = useRef(null);

  useEffect(() => {
    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setRows(trace);
      return undefined;
    }

    let step = 0;
    let timer;

    const tick = () => {
      if (step < trace.length) {
        setRows(trace.slice(0, step + 1));
        step += 1;
        timer = setTimeout(tick, 620);
      } else {
        // Pause on the completed run, then replay.
        timer = setTimeout(() => {
          step = 0;
          setRows([]);
          timer = setTimeout(tick, 500);
        }, 4200);
      }
    };

    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [rows]);

  return (
    <div className="term" aria-hidden="true">
      <div className="term__bar">
        <span className="term__dot" />
        <span className="term__dot" />
        <span className="term__dot" />
        <span className="term__title">agentci — eval run #4271</span>
        <span className="term__badge">live</span>
      </div>
      <div className="term__body" ref={bodyRef}>
        {rows.map((row, i) => (
          <div className="term__row" key={`${row.t}-${i}`}>
            <span className="term__tag">[{row.t}]</span>
            <span className="term__text" data-tone={row.tone}>
              {row.text}
            </span>
          </div>
        ))}
        <div className="term__row">
          <span className="term__tag">$</span>
          <span className="term__cursor" />
        </div>
      </div>
    </div>
  );
}
