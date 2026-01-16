import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#020202]">
      {/* 1. Dotted Pattern Layer - More subtle for dark theme */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: 'radial-gradient(#444 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />

      {/* 2. Deep Gradient Orbs (Violet, Pink, Blue, Light Red) */}
      <div className="absolute inset-0 opacity-40">
         {/* Violet/Pink/Red Orb (Top Left) */}
         <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full mix-blend-screen filter blur-[100px] animate-blob bg-gradient-to-br from-violet-600 via-pink-600 to-red-500" />
         
         {/* Blue/Violet/Pink Orb (Right Center) */}
         <div className="absolute top-[20%] right-[-20%] w-[60%] h-[80%] rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 bg-gradient-to-bl from-blue-600 via-violet-500 to-fuchsia-500" />
         
         {/* Red/Pink/Blue Orb (Bottom) */}
         <div className="absolute bottom-[-20%] left-[10%] w-[80%] h-[60%] rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000 bg-gradient-to-tr from-red-500 via-pink-500 to-blue-600" />
      </div>

      {/* 3. Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }}
      />
    </div>
  );
};