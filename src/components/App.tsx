import React from "react";
import CurrentTime from "./CurrentTime";
import Schedule from "./Schedule";

export default function App() {
  return (
    <div style={{ padding: "0 .5rem" }}>
      <header style={{ display: "flex", alignItems: "baseline" }}>
        <h1 style={{ flex: 1 }}>Chores</h1>
        <CurrentTime />
      </header>
      <Schedule />
    </div>
  );
}
