import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
}

export function Confetti() {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const generateConfetti = () => {
      const colors = [
        "linear-gradient(45deg, #ff6b6b, #feca57)",
        "linear-gradient(45deg, #48dbfb, #0abde3)",
        "linear-gradient(45deg, #ff9ff3, #f368e0)",
        "linear-gradient(45deg, #54a0ff, #2e86de)",
        "linear-gradient(45deg, #5f27cd, #00d2d3)",
      ];
      
      const newConfetti: ConfettiPiece[] = [];
      
      for (let i = 0; i < 25; i++) {
        newConfetti.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 3,
          duration: 3 + Math.random() * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      
      setConfetti(newConfetti);
    };

    generateConfetti();
    const interval = setInterval(generateConfetti, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-2 h-2 rounded-sm"
          style={{
            left: `${piece.left}%`,
            background: piece.color,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            animation: `confetti ${piece.duration}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
}