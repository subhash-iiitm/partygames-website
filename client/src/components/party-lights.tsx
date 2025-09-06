import { useEffect, useState } from "react";

export function PartyLights() {
  const [isOn, setIsOn] = useState(true);

  useEffect(() => {
    // Toggle disco ball on/off every 3 seconds
    const interval = setInterval(() => {
      setIsOn(prev => !prev);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {/* Disco Ball */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
        <div 
          className={`disco-ball ${isOn ? 'disco-ball-on' : 'disco-ball-off'}`}
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: `
              radial-gradient(circle at 25% 25%, #ffffff 0%, #e5e5e5 25%, #d4d4d4 50%, #a3a3a3 75%, #737373 100%),
              linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.8) 50%, transparent 60%),
              linear-gradient(-45deg, transparent 40%, rgba(255,255,255,0.6) 50%, transparent 60%)
            `,
            position: 'relative',
            boxShadow: isOn 
              ? '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.6), 0 0 60px rgba(255,255,255,0.4)'
              : '0 0 5px rgba(0,0,0,0.3)',
          }}
        >
          {/* Disco Ball Pattern */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            {Array.from({ length: 36 }).map((_, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  width: '8px',
                  height: '8px',
                  background: 'linear-gradient(45deg, #ffffff, #e5e5e5)',
                  left: `${20 + (i % 6) * 10}%`,
                  top: `${20 + Math.floor(i / 6) * 10}%`,
                  borderRadius: '2px',
                  opacity: isOn ? 0.9 : 0.3,
                  transform: `rotate(${i * 10}deg)`,
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Light Gradient Rays */}
        {isOn && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="light-ray"
                style={{
                  position: 'absolute',
                  width: '4px',
                  height: '100vh',
                  background: `linear-gradient(to bottom, 
                    rgba(255,255,255,0.8) 0%, 
                    rgba(255,215,0,0.6) 10%,
                    rgba(255,105,180,0.4) 20%,
                    rgba(138,43,226,0.3) 30%,
                    rgba(0,191,255,0.2) 40%,
                    transparent 60%
                  )`,
                  transformOrigin: 'top center',
                  transform: `rotate(${i * 45}deg)`,
                  animation: 'disco-light-sweep 4s linear infinite',
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}