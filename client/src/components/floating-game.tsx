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
      className="fixed backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl z-30 bg-white/5"
      style={{
        width: size.width,
        height: size.height,
        left: 0,
        top: 0,
      }}
      animate={getFloatingAnimation()}
      onClick={onClick}
      whileHover={{
        scale: 1.08,
        boxShadow: `0 25px 50px ${gradientFrom}40`,
        borderColor: `${gradientFrom}60`,
      }}
      whileTap={{ scale: 1.02 }}
      data-testid={`floating-game-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* Image Section - Takes up 60% of the card */}
      {image && (
        <div className="w-full h-3/5 overflow-hidden relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.style.display = 'none';
            }}
          />
          {/* Gradient overlay for better text readability */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
          />
        </div>
      )}
      
      {/* Content Section - Takes up remaining 40% */}
      <div className="p-3 flex flex-col justify-center h-2/5 relative">
        <div 
          className="absolute inset-0 opacity-20 rounded-b-2xl"
          style={{
            background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
          }}
        />
        <div className="relative z-10">
          <div className={`text-sm font-display font-bold ${textColor} mb-1 leading-tight`}>
            {name}
          </div>
          <div className={`text-xs opacity-80 ${textColor.replace('300', '200')} leading-relaxed`}>
            {description}
          </div>
        </div>
      </div>

      {/* Fallback when no image */}
      {!image && (
        <div className="w-full h-full flex flex-col items-center justify-center p-4">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
            }}
          />
          <div className="relative z-10 text-center">
            {icon && <i className={`${icon} ${iconColor} text-2xl mb-2`} />}
            <div className={`text-sm font-display font-bold ${textColor} mb-1`}>
              {name}
            </div>
            <div className={`text-xs opacity-75 ${textColor.replace('300', '200')}`}>
              {description}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
