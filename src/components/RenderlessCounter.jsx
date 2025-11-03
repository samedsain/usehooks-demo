import { useRef, useState } from "react";

export default function RenderlessCounter() {
  const [visibleCount, setVisibleCount] = useState(0);
  const hiddenCountRef = useRef(0);

  const incVisible = () => setVisibleCount((c) => c + 1);

  const incHidden = () => {
    hiddenCountRef.current += 1; // ekranda hemen görünmez
    console.log("hiddenCountRef:", hiddenCountRef.current);
  };
  return (
    <div
      style={{
        padding: 16,
        marginTop: 16,
        border: "1px solid #eee",
        borderRadius: 8,
      }}
    >
      <h3 style={{ marginTop: 0 }}>Renderless Counter with useRef</h3>
      <div>Visible (state): {visibleCount}</div>
      <button onClick={incVisible}>Increase Visible</button>

      <div style={{ marginTop: 8 }}>
        Hidden (ref): {hiddenCountRef.current}
        <button onClick={incHidden} style={{ marginLeft: 8 }}>
          Increase Hidden
        </button>
      </div>

      <p style={{ color: "#666", marginTop: 8, fontSize: 14 }}>
        Not: ref değişince render olmaz; artışı konsolda görürsün.
      </p>
    </div>
  );
}
