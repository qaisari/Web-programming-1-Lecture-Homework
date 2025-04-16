import { useState } from "react";
export default function RockPaperScissors() {
  const choices = ["Rock","Paper","Scissors"];
  const [p, setP] = useState(null);
  const [c, setC] = useState(null);
  const [r, setR] = useState("");
  const [score, setScore] = useState({ win:0, lose:0, draw:0 });

  function play(choice) {
    const comp = choices[Math.floor(Math.random()*3)];
    setP(choice); setC(comp);
    const res = result(choice, comp);
    setR(res);
    setScore(s => ({ ...s, [res]: s[res] + 1 }));
  }
  const result = (a,b)=>
    a===b ? "draw" :
    (a==="Rock"&&b==="Scissors")||(a==="Paper"&&b==="Rock")||(a==="Scissors"&&b==="Paper") ? "win" : "lose";

  return (
    <>
      <h2>Rock-Paper-Scissors</h2>
      {choices.map(ch => <button key={ch} onClick={() => play(ch)}>{ch}</button>)}
      {p && (
        <>
          <p>You: {p}</p>
          <p>Computer: {c}</p>
          <p>Result: {r.toUpperCase()}</p>
          <p>Wins {score.win} · Losses {score.lose} · Draws {score.draw}</p>
        </>
      )}
    </>
  );
}