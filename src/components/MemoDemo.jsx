import { useState, useMemo } from "react";

export default function MemoDemo() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(false);

  // 🧠 Ağır hesaplama fonksiyonu (örnek)
  function heavyCalculation(num) {
    console.log("⚙️ Hesaplama çalıştı...");
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += num * 2;
    }
    return total;
  }

  // ❌ useMemo OLMADAN:
  // const result = heavyCalculation(count);

  // ✅ useMemo ILE:
  const result = useMemo(() => heavyCalculation(count), [count]);

  return (
    <div style={{ marginTop: 20, padding: 16, border: "1px solid #ccc", borderRadius: 8 }}>
      <h3>useMemo Example</h3>
      <p>Result: {result}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increase Count</button>
      <button onClick={() => setOther((o) => !o)} style={{ marginLeft: 8 }}>
        Toggle Other State
      </button>
      <p>Other state: {String(other)}</p>
    </div>
  );
}