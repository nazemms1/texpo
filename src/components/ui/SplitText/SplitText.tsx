import React from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
  spacing?: string;
}

export function SplitText({ text, className, spacing = '0.75rem' }: SplitTextProps) {
  if (!text) return null;
  
  // Split by dot followed by space or end of string
  const segments = text.split('.').filter(s => s.trim() !== '');

  return (
    <div className={className}>
      {segments.map((segment, index) => (
        <span 
          key={index} 
          style={{ 
            display: 'block', 
            marginBottom: index < segments.length - 1 ? spacing : 0 
          }}
        >
          {segment.trim()}.
        </span>
      ))}
    </div>
  );
}
