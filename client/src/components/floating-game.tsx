import { motion } from "framer-motion";

interface FloatingGameProps {
  name: string;
  description: string;
  icon: string;
  gradientFrom: string;
  gradientTo: string;
  textColor: string;
  iconColor: string;
  position: {
    top: string;
    left?: string;
    right?: string;
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
  gradientFrom,
  gradientTo,
  textColor,
  iconColor,
  position,
  size,
  animationDelay,
  animationType,
  onClick,
}: FloatingGameProps) {
  const getAnimationClass = () => {
    switch (animationType) {
      case "slow":
        return "animate-float-slow";
      case "medium":
        return "animate-float-medium";
      case "fast":
        return "animate-float-fast";
      default:
        return "animate-float-medium";
    }
  };

  return (
    <motion.div
      className={`absolute backdrop-blur-sm border border-white/10 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:border-opacity-50 ${getAnimationClass()}`}
      style={{
        ...position,
        width: size.width,
        height: size.height,
        background: `linear-gradient(135deg, ${gradientFrom}20 0%, ${gradientTo}20 100%)`,
        animationDelay: `${animationDelay}s`,
      }}
      onClick={onClick}
      whileHover={{
        boxShadow: `0 20px 40px ${gradientFrom}30`,
        borderColor: `${gradientFrom}80`,
      }}
      whileTap={{ scale: 1.2 }}
      data-testid={`floating-game-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className={`text-sm font-display font-bold ${textColor} mb-1`}>
        {name}
      </div>
      <div className={`text-xs opacity-75 ${textColor.replace('300', '200')}`}>
        {description}
      </div>
      <i className={`${icon} absolute bottom-2 right-2 ${iconColor} text-lg`} />
    </motion.div>
  );
}
