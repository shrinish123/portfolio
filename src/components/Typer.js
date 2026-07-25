import React, { useEffect, useState } from "react";

// Small dependency-free typewriter: types a phrase, holds, deletes, next.
export default function Typer({ phrases, typeMs = 55, deleteMs = 28, holdMs = 1600 }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = phrases[index % phrases.length];

    if (!deleting && text === full) {
      const hold = setTimeout(() => setDeleting(true), holdMs);
      return () => clearTimeout(hold);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
      return undefined;
    }

    const step = setTimeout(
      () =>
        setText((prev) =>
          deleting ? full.slice(0, prev.length - 1) : full.slice(0, prev.length + 1)
        ),
      deleting ? deleteMs : typeMs
    );
    return () => clearTimeout(step);
  }, [text, deleting, index, phrases, typeMs, deleteMs, holdMs]);

  return (
    <span className="hero__role">
      {text}
      <span className="caret" />
    </span>
  );
}
