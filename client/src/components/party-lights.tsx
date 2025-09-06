import { useEffect, useState } from "react";

interface Light {
  id: number;
  left: number;
  top: number;
  color: string;
  size: number;
  pulse: boolean;
  delay: number;
}

export function PartyLights() {
  const [lights, setLights] = useState<Light[]>([]);

  useEffect(() => {
    const colors = [
      "#FF6B6B", // Red
      "#4ECDC4", // Teal
      "#45B7D1", // Blue
      "#96CEB4", // Green
      "#FFEAA7", // Yellow
      "#DDA0DD", // Plum
      "#FFB6C1", // Light Pink
      "#98D8C8", // Mint
      "#F7DC6F", // Light Yellow
      "#BB8FCE", // Light Purple
      "#85C1E9", // Sky Blue
      "#82E0AA", // Light Green
    ];

    const generateLights = () => {
      const newLights: Light[] = [];
      
      // Top border lights
      for (let i = 0; i < 15; i++) {
        newLights.push({
          id: i,
          left: (i * 100) / 14,
          top: 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 12 + Math.random() * 8,
          pulse: Math.random() > 0.5,
          delay: Math.random() * 2,
        });
      }

      // Bottom border lights
      for (let i = 0; i < 15; i++) {
        newLights.push({
          id: 100 + i,
          left: (i * 100) / 14,
          top: 95,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 12 + Math.random() * 8,
          pulse: Math.random() > 0.5,
          delay: Math.random() * 2,
        });
      }

      // Left border lights
      for (let i = 0; i < 8; i++) {
        newLights.push({
          id: 200 + i,
          left: 2,
          top: 10 + (i * 80) / 7,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 12 + Math.random() * 8,
          pulse: Math.random() > 0.5,
          delay: Math.random() * 2,
        });
      }

      // Right border lights
      for (let i = 0; i < 8; i++) {
        newLights.push({
          id: 300 + i,
          left: 96,
          top: 10 + (i * 80) / 7,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 12 + Math.random() * 8,
          pulse: Math.random() > 0.5,
          delay: Math.random() * 2,
        });
      }

      // Random scattered lights
      for (let i = 0; i < 20; i++) {
        newLights.push({
          id: 400 + i,
          left: 10 + Math.random() * 80,
          top: 15 + Math.random() * 70,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 8 + Math.random() * 12,
          pulse: Math.random() > 0.3,
          delay: Math.random() * 3,
        });
      }

      setLights(newLights);
    };

    generateLights();
    const interval = setInterval(generateLights, 8000); // Change lights every 8 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {lights.map((light) => (
        <div
          key={light.id}
          className="absolute rounded-full opacity-80"
          style={{
            left: `${light.left}%`,
            top: `${light.top}%`,
            width: `${light.size}px`,
            height: `${light.size}px`,
            backgroundColor: light.color,
            boxShadow: `0 0 ${light.size * 2}px ${light.color}, 0 0 ${light.size * 4}px ${light.color}40`,
            animation: light.pulse ? `party-light-pulse 2s ease-in-out infinite` : 'none',
            animationDelay: `${light.delay}s`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
}