import { useState } from "react";
export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [pct, setPct] = useState(10);
  const b = parseFloat(bill) || 0;
  const tip = (b * pct) / 100;
  return (
    <>
      <h2>Tip Calculator</h2>
      <label>Bill (HUF)</label>
      <input type="number" value={bill} onChange={e => setBill(e.target.value)} />
      <label>Tip %</label>
      <select value={pct} onChange={e => setPct(+e.target.value)}>
        {[5,10,12,15,18,20,25].map(p => <option key={p}>{p}</option>)}
      </select>
      <p>Tip: {tip.toFixed(2)} HUF</p>
      <p>Total: {(b + tip).toFixed(2)} HUF</p>
    </>
  );
}