"use client";

import { useEffect, useState } from "react";
import Typewriter from "@/components/Typewriter";

export default function HeroTypewriters() {
  const [firstDone, setFirstDone] = useState(false);
  const [secondReveal, setSecondReveal] = useState(false);
  const [secondStart, setSecondStart] = useState(false);

  useEffect(() => {
    if (!firstDone) return;
    setSecondReveal(true);
    const id = window.setTimeout(() => setSecondStart(true), 400);
    return () => window.clearTimeout(id);
  }, [firstDone]);

  return (
    <div>
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight neon-text matrix-flicker">
        <Typewriter
          segments={[
            { text: "Kingdom code ", className: "glow-green" },
            { text: "in the streets.", className: "glow-cyan" },
          ]}
          charDelayMs={95}
          charJitterMs={40}
          minCharDelayMs={35}
          segmentDelayMs={800}
          showCaret={false}
          onComplete={() => setFirstDone(true)}
        />
      </h1>

      <h2
        className={`mt-2 text-2xl md:text-3xl font-bold tracking-tight glow-yellow transition-all duration-500 ${
          secondReveal ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        {secondStart && (
          <Typewriter
            segments={[{ text: "Clean commits in the cloud." }]}
            charDelayMs={85}
            charJitterMs={35}
            minCharDelayMs={30}
            segmentDelayMs={700}
          />
        )}
      </h2>
    </div>
  );
}