import { useEffect, useState } from 'react';

interface Light {
  id: number;
  left: number;
  top: number;
  color: string;
  size: number;
  delay: number;
  duration: number;
}

export function PartyLights() {
  const [lights, setLights] = useState<Light[]>([]);

  useEffect(() => {
    const colors = [
      '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7',
      '#fd79a8', '#6c5ce7', '#a29bfe', '#fd79a8', '#00b894',
      '#e84393', '#0984e3', '#00cec9', '#fdcb6e', '#e17055'
    ];

    const generateLights = () => {
      const newLights: Light[] = [];
      
      // Generate disco balls
      for (let i = 0; i < 3; i++) {
        newLights.push({
          id: i,
          left: 20 + (i * 30),
          top: 5 + (i % 2) * 10,
          color: '#ffd700',
          size: 15 + Math.random() * 10,
          delay: i * 0.5,
          duration: 3 + Math.random() * 2,
        });
      }
      
      // Generate colorful party lights
      for (let i = 3; i < 25; i++) {
        newLights.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 5 + Math.random() * 8,
          delay: Math.random() * 2,
          duration: 2 + Math.random() * 3,
        });
      }
      
      setLights(newLights);
    };

    generateLights();
    const interval = setInterval(generateLights, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {lights.map((light) => (
        <div
          key={light.id}
          className={`absolute rounded-full animate-pulse ${
            light.id < 3 ? 'animate-spin' : 'animate-ping'
          }`}
          style={{
            left: `${light.left}%`,
            top: `${light.top}%`,
            width: `${light.size}px`,
            height: `${light.size}px`,
            backgroundColor: light.color,
            boxShadow: `0 0 ${light.size * 2}px ${light.color}, 0 0 ${light.size * 4}px ${light.color}40`,
            animationDelay: `${light.delay}s`,
            animationDuration: `${light.duration}s`,
            opacity: light.id < 3 ? '0.8' : '0.6',
          }}
        >
          {/* Disco ball effect for first 3 lights */}
          {light.id < 3 && (
            <>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-500 opacity-80" />
              <div className="absolute inset-1 rounded-full bg-gradient-to-tl from-transparent to-white/30" />
              <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-white/60" />
              <div className="absolute bottom-1 right-1 w-1 h-1 rounded-full bg-white/40" />
            </>
          )}
        </div>
      ))}
      
      {/* Spotlight effects */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-radial from-purple-500/20 to-transparent animate-pulse" />
      <div className="absolute top-0 right-1/4 w-32 h-32 bg-gradient-radial from-pink-500/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-gradient-radial from-blue-500/15 to-transparent animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
}