// ui/UnblurredImage.tsx
"use client";

import Image, { StaticImageData } from "next/image";
import { useRef, useState, useEffect } from "react";

interface UnblurImageProps {
  src: string | StaticImageData;
  alt: string;
  containerClassName?: string;
  blurredClassName?: string;
  unblurredClassName?: string;
  maskRadius?: number;
}

export default function UnblurImage({
  src,
  alt,
  containerClassName = "",
  blurredClassName = "",
  unblurredClassName = "",
  maskRadius = 150,
}: UnblurImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [maskData, setMaskData] = useState({ opacity: 0, x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      
      // Step 3: Manually check if the mouse is inside the image bounds
      const isInside = 
        e.clientX >= rect.left+10 && 
        e.clientX <= rect.right-10 && 
        e.clientY >= rect.top+10 && 
        e.clientY <= rect.bottom-10;

      if (isInside) {
        setMaskData({
          opacity: 1,
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
        console.log(e.clientX - rect.left, e.clientY - rect.top)
      } else {
        // Fade out if the mouse leaves the bounds
        setMaskData(prev => ({ ...prev, opacity: 0 }));
      }
    };

    // Step 2: Listen to the window so z-index doesn't block the event
    window.addEventListener("mousemove", handleMouseMove);
    
    // Cleanup listener on unmount
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className={` ${containerClassName}`}>
      {/* Background: Blurred Layer */}
      <Image
        src={src}
        alt={alt}
        className={`w-full h-full pointer-events-none ${blurredClassName}`}
      />

      {/* Foreground: Unblurred Layer (Revealed via CSS Mask) */}
      <Image
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300 ${unblurredClassName}`}
        style={{
          opacity: maskData.opacity,
          WebkitMaskImage: `radial-gradient(circle ${maskRadius}px at ${maskData.x}px ${maskData.y}px, black 50%, transparent 100%)`,
          maskImage: `radial-gradient(circle ${maskRadius}px at ${maskData.x}px ${maskData.y}px, black 50%, transparent 100%)`,
        }}
      />
    </div>
  );
}