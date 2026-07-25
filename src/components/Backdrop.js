import React from "react";

// Ambient layer: grid, drifting colour orbs, faint scanlines.
export default function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <div className="backdrop__grid" />
      <div className="backdrop__orb orb-1" />
      <div className="backdrop__orb orb-2" />
      <div className="backdrop__orb orb-3" />
      <div className="backdrop__scan" />
    </div>
  );
}
