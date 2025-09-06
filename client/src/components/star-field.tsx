import { useEffect, useState } from "react";

interface Star {
  id: number;
  left: number;
  top: number;
  delay: number;
}

export function StarField() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const numStars = 50;
      const newStars: Star[] = [];

      for (let i = 0; i < numStars; i++) {
        newStars.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          delay: Math.random() * 3,
        });
      }

      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-1">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
