"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

function parseValue(value: string): { num: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (match) return { num: parseInt(match[1], 10), suffix: match[2] };
  return { num: 0, suffix: value };
}

function BoxCountUpValue({ value }: { value: string }) {
  const { num, suffix } = parseValue(value);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (!inView || num === 0) return;
    let frame = 0;
    const totalFrames = 60;
    const timer = setInterval(() => {
      frame++;
      const progress = 1 - Math.pow(1 - frame / totalFrames, 3);
      setCount(Math.round(progress * num));
      if (frame >= totalFrames) clearInterval(timer);
    }, 1500 / totalFrames);
    return () => clearInterval(timer);
  }, [inView, num]);

  return (
    <span ref={ref} style={{ 
      color: '#0060A8', 
      fontFamily: "'Nulshock', sans-serif",
      fontSize: '36px',
      fontWeight: 900,
      lineHeight: 1
    }}>
      {count}{suffix}
    </span>
  );
}

export function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div style={{
      boxShadow: '0px 1px 2px 0px #0000000D',
      border: '1px solid #0060A8',
      background: '#FFFFFF01',
      width: '274px',
      height: '154px',
      minWidth: '200px',
      borderRadius: '8px',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    }}>
      <div style={{ marginBottom: '8px' }}>
        <BoxCountUpValue value={value} />
      </div>
      <span style={{
        fontSize: '14px',
        color: '#4B5563',
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        fontWeight: 500
      }}>
        {label}
      </span>
    </div>
  );
}

export function StatisticsBoxesSection({
  items,
  loading
}: {
  items?: { key: string; value: string }[];
  loading?: boolean;
}) {
  if (loading) return null;

  return (
    <div className="withLinesBg" style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: '24px', 
      justifyContent: 'center', 
      padding: '4rem 2rem' 
    }}>
      {items?.map((stat, index) => (
        <StatBox key={index} label={stat.key} value={stat.value} />
      ))}
    </div>
  );
}
