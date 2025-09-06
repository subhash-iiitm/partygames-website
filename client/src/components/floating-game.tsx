import { motion } from "framer-motion";

interface FloatingGameProps {
  name: string;
  description: string;
  icon?: string;
  image?: string;
  gradientFrom: string;
  gradientTo: string;
  textColor: string;
  iconColor: string;
  initialPosition: {
    x: number;
    y: number;
  };
  size: {
    width: string;
    height: string;
  };
  animationDelay: number;
  animationType: "slow" | "medium" | "fast";
  onClick: () => void;
}

export function FloatingGame({
  name,
  description,
  icon,
  image,
  gradientFrom,
  gradientTo,
  textColor,
  iconColor,
  initialPosition,
  size,
  animationDelay,
  animationType,
  onClick,
}: FloatingGameProps) {
  const getFloatingAnimation = () => {
    const duration = animationType === "slow" ? 20 : animationType === "medium" ? 15 : 10;
    const amplitude = animationType === "slow" ? 100 : animationType === "medium" ? 80 : 60;
    
    return {
      x: [
        initialPosition.x,
        initialPosition.x + amplitude,
        initialPosition.x - amplitude,
        initialPosition.x + amplitude * 0.5,
        initialPosition.x
      ],
      y: [
        initialPosition.y,
        initialPosition.y - amplitude * 0.8,
        initialPosition.y + amplitude * 0.6,
        initialPosition.y - amplitude * 0.4,
        initialPosition.y
      ],
      rotate: [0, 5, -3, 2, 0],
      transition: {
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: animationDelay
      }
    };
  };

  return (
    <motion.div
      className="fixed backdrop-blur-sm border border-white/10 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:border-opacity-50 z-30"
      style={{
        width: size.width,
        height: size.height,
        background: `linear-gradient(135deg, ${gradientFrom}20 0%, ${gradientTo}20 100%)`,
        left: 0,
        top: 0,
      }}
      animate={getFloatingAnimation()}
      onClick={onClick}
      whileHover={{
        scale: 1.15,
        boxShadow: `0 20px 40px ${gradientFrom}30`,
        borderColor: `${gradientFrom}80`,
      }}
      whileTap={{ scale: 1.2 }}
      data-testid={`floating-game-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {image && (
        <div className="absolute top-2 left-2 w-8 h-8 rounded-lg overflow-hidden bg-white/10">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      )}
      <div className={`text-sm font-display font-bold ${textColor} mb-1 ${image ? 'mt-6' : ''}`}>
        {name}
      </div>
      <div className={`text-xs opacity-75 ${textColor.replace('300', '200')}`}>
        {description}
      </div>
      {icon && !image && (
        <i className={`${icon} absolute bottom-2 right-2 ${iconColor} text-lg`} />
      )}
      {!icon && !image && (
        <div className={`absolute bottom-2 right-2 w-5 h-5 rounded ${iconColor.replace('text-', 'bg-')} opacity-50`} />
      )}
    </motion.div>
  );
}
