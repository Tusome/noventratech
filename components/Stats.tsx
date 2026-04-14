"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

function Counter({
  end,
  label,
  isVisible,
}: {
  end: number;
  label: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, isVisible]);

  return (
    <div
  className={`text-center transform transition-all duration-1000 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"  }`}
>
      <h3 className="text-4xl md:text-5xl font-extrabold text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] transition-all duration-700 animate-pulse">
        {count}+
      </h3>
      <p className="mt-2 text-gray-300">{label}</p>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-b from-black to-blue-950"
    >
      <Reveal>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <Counter end={120} label="Satisfied Clients" isVisible={isVisible} />
        <Counter end={250} label="Projects Completed" isVisible={isVisible} />
        <Counter end={7} label="Years of Experience" isVisible={isVisible} />
      </div>
      </Reveal>
    </section>
  );
}