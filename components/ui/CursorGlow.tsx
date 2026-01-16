import React, { useEffect, useState, useRef } from 'react';

// Map sections to colors - Updated for Purple/Pink/Dark theme
const sectionColors: Record<string, string> = {
  hero: 'rgba(168, 85, 247, 0.12)',       // Purple
  about: 'rgba(219, 39, 119, 0.12)',      // Pink
  experience: 'rgba(147, 51, 234, 0.10)', // Violet
  hackathons: 'rgba(236, 72, 153, 0.10)', // Pink/Fuchsia
  skills: 'rgba(124, 58, 237, 0.12)',     // Violet
  contact: 'rgba(192, 132, 252, 0.12)',   // Light Purple
};

export const CursorGlow: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [glowColor, setGlowColor] = useState(sectionColors.hero);
  
  // Track Mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        // Use transform for performance instead of top/left
        cursorRef.current.animate({
          transform: `translate(${e.clientX}px, ${e.clientY}px)`
        }, {
          duration: 800,
          fill: "forwards",
          easing: "cubic-bezier(0.16, 1, 0.3, 1)" // Smooth follow
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Track Section Intersection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id && sectionColors[id]) {
              setGlowColor(sectionColors[id]);
            }
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of section is visible
        rootMargin: "-20% 0px -20% 0px"
      }
    );

    // Observe all sections
    document.querySelectorAll('section, footer').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 w-[600px] h-[600px] pointer-events-none z-0 rounded-full blur-[100px] transition-colors duration-1000 ease-in-out mix-blend-screen"
      style={{ 
        background: `radial-gradient(circle, ${glowColor} 0%, rgba(0,0,0,0) 70%)`,
        marginLeft: '-300px', // Center the div on cursor
        marginTop: '-300px'
      }}
    />
  );
};