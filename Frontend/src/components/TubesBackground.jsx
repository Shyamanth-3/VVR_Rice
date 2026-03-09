import React, { useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function TubesBackground({ 
  children, 
  className,
  enableClickInteraction = true 
}) {
  const canvasRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const tubesRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    let cleanup;

    const initTubes = async () => {
      if (!canvasRef.current) return;

      try {
        const module = await import('https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js');
        const TubesCursor = module.default;

        if (!mounted) return;

        const app = TubesCursor(canvasRef.current, {
          tubes: {
            colors: ["#f7c556", "#4a7c29", "#d7c49e"], // Gold 400, Rice Paddy Green, Beige 300
            lights: {
              intensity: 150,
              colors: ["#f4b942", "#2d5016", "#6b8c42", "#fbdc96"]
            }
          }
        });

        tubesRef.current = app;
        setIsLoaded(true);

        const handleResize = () => {};

        window.addEventListener('resize', handleResize);
        
        cleanup = () => {
          window.removeEventListener('resize', handleResize);
        };

      } catch (error) {
        console.error("Failed to load TubesCursor:", error);
      }
    };

    initTubes();

    return () => {
      mounted = false;
      if (cleanup) cleanup();
    };
  }, []);

  const handleClick = () => {
    if (!enableClickInteraction || !tubesRef.current) return;
    
    // Pick randomly from the subtle VVR Rice warm color palette 
    const palette = ["#f7c556", "#d7c49e", "#e09015", "#4a7c29", "#2d5016", "#6b8c42", "#faf9f7", "#c4a675", "#fdecc4"];
    
    const getRandom = (arr, n) => {
        let result = new Array(n), len = arr.length, taken = new Array(len);
        if (n > len) return arr;
        while (n--) {
            let x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }
    
    const nextTubeColors = getRandom(palette, 3);
    const nextLightColors = getRandom(palette, 4);
    
    tubesRef.current.tubes.setColors(nextTubeColors);
    tubesRef.current.tubes.setLightsColors(nextLightColors);
  };

  return (
    <div 
      className={cn("relative w-full h-full min-h-[400px] overflow-hidden bg-gray-900 cursor-pointer", className)}
      onClick={handleClick}
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full block"
        style={{ touchAction: 'none' }}
      />

      {/* Grain texture overlay — sits between WebGL canvas and content to mask the dotted box pattern */}
      <div 
        className="absolute inset-0 z-[5] pointer-events-none"
        style={{
          backgroundImage: "url('/grain.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          mixBlendMode: 'overlay',
        }}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full pointer-events-none">
        {children}
      </div>
    </div>
  );
}

export default TubesBackground;
