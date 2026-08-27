import React, { ReactNode } from 'react';

interface UnderlinedProps {
  children: ReactNode;
  underlineColor?: string; // e.g. "bg-blue-500", "bg-black"
  underlineHeight?: string; // e.g. "h-[2px]", "h-1"
  className?: string;
}

export default function Underlined({
  children,
  underlineColor = 'bg-black dark:bg-white',
  underlineHeight = 'h-[2px]',
  className = '',
}: UnderlinedProps) {
  return (
    <div className={`inline-flex flex-col items-start gap-1 ${className}`}>
      <div>{children}</div>
      <div className={`w-full ${underlineHeight} ${underlineColor} rounded-full`} />
    </div>
  );
}