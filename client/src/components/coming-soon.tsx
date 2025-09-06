import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { StarField } from "./star-field";
import { FloatingGame } from "./floating-game";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const getGamePositions = (width: number, height: number) => [
  {
    name: "Codenames",
    description: "🕵️ Spy Word Game",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=center",
    gradientFrom: "#8B5CF6",
    gradientTo: "#7C3AED",
    textColor: "text-purple-200",
    iconColor: "text-purple-300",
    initialPosition: { x: 100, y: 80 },
    size: { width: "9rem", height: "6rem" },
    animationDelay: 0,
    animationType: "slow" as const,
  },
  {
    name: "Cards Against Humanity",
    description: "🔥 Adult Party Game",
    image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=80&h=80&fit=crop&crop=center",
    gradientFrom: "#DC2626",
    gradientTo: "#B91C1C",
    textColor: "text-red-200",
    iconColor: "text-red-300",
    initialPosition: { x: width - 200, y: 150 },
    size: { width: "10rem", height: "7rem" },
    animationDelay: 1,
    animationType: "medium" as const,
  },
  {
    name: "Never Have I Ever",
    description: "😱 Shocking Secrets",
    image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=80&h=80&fit=crop&crop=center",
    gradientFrom: "#F97316",
    gradientTo: "#EA580C",
    textColor: "text-orange-200",
    iconColor: "text-orange-300",
    initialPosition: { x: 200, y: height - 250 },
    size: { width: "8.5rem", height: "6rem" },
    animationDelay: 2,
    animationType: "fast" as const,
  },
  {
    name: "Guess the Movie",
    description: "🎬 Cinema Challenge",
    image: "https://images.unsplash.com/photo-1489599856216-3e6c3ae7bd31?w=80&h=80&fit=crop&crop=center",
    gradientFrom: "#3B82F6",
    gradientTo: "#2563EB",
    textColor: "text-blue-200",
    iconColor: "text-blue-300",
    initialPosition: { x: width - 180, y: height - 200 },
    size: { width: "9.5rem", height: "6.5rem" },
    animationDelay: 0.5,
    animationType: "medium" as const,
  },
  {
    name: "Charades",
    description: "🎭 Act It Out!",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=80&h=80&fit=crop&crop=center",
    gradientFrom: "#10B981",
    gradientTo: "#059669",
    textColor: "text-emerald-200",
    iconColor: "text-emerald-300",
    initialPosition: { x: 80, y: 250 },
    size: { width: "8rem", height: "5.5rem" },
    animationDelay: 3,
    animationType: "slow" as const,
  },
  {
    name: "Two Truths & A Lie",
    description: "🤔 Guess the Fib",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=80&h=80&fit=crop&crop=center",
    gradientFrom: "#EAB308",
    gradientTo: "#CA8A04",
    textColor: "text-yellow-200",
    iconColor: "text-yellow-300",
    initialPosition: { x: width - 150, y: 200 },
    size: { width: "9rem", height: "6rem" },
    animationDelay: 1.5,
    animationType: "fast" as const,
  },
  {
    name: "Pictionary",
    description: "✏️ Draw & Guess",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=80&h=80&fit=crop&crop=center",
    gradientFrom: "#6366F1",
    gradientTo: "#4F46E5",
    textColor: "text-indigo-200",
    iconColor: "text-indigo-300",
    initialPosition: { x: width * 0.4, y: 60 },
    size: { width: "8.5rem", height: "6rem" },
    animationDelay: 2.5,
    animationType: "medium" as const,
  },
  {
    name: "Truth or Dare",
    description: "💥 Ultimate Challenge",
    image: "https://images.unsplash.com/photo-1511268559489-34b624fbfcf5?w=80&h=80&fit=crop&crop=center",
    gradientFrom: "#F43F5E",
    gradientTo: "#E11D48",
    textColor: "text-rose-200",
    iconColor: "text-rose-300",
    initialPosition: { x: width * 0.3, y: height - 180 },
    size: { width: "9.5rem", height: "6.5rem" },
    animationDelay: 1.8,
    animationType: "slow" as const,
  },
  {
    name: "Werewolf",
    description: "🐺 Mystery & Deception",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=80&h=80&fit=crop&crop=center",
    gradientFrom: "#7C3AED",
    gradientTo: "#5B21B6",
    textColor: "text-violet-200",
    iconColor: "text-violet-300",
    initialPosition: { x: width * 0.1, y: height * 0.6 },
    size: { width: "8.5rem", height: "6rem" },
    animationDelay: 0.8,
    animationType: "medium" as const,
  },
  {
    name: "20 Questions",
    description: "❓ Mind Reading Game",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=80&h=80&fit=crop&crop=center",
    gradientFrom: "#14B8A6",
    gradientTo: "#0F766E",
    textColor: "text-teal-200",
    iconColor: "text-teal-300",
    initialPosition: { x: width * 0.8, y: height * 0.3 },
    size: { width: "8rem", height: "5.5rem" },
    animationDelay: 2.2,
    animationType: "fast" as const,
  },
];

export function ComingSoon() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState(() => {
    if (typeof window !== 'undefined') {
      return { width: window.innerWidth, height: window.innerHeight };
    }
    return { width: 1200, height: 800 };
  });
  const { toast } = useToast();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize(); // Set initial size
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email && email.includes("@")) {
      setIsSubscribed(true);
      setEmail("");
      toast({
        title: "Successfully subscribed!",
        description: "We'll notify you when PartyPlay launches.",
      });
      
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    } else {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
    }
  };

  const handleGameClick = (gameName: string) => {
    toast({
      title: `${gameName} Preview`,
      description: `${gameName} will be available at launch! Stay tuned.`,
    });
  };

  return (
    <div className="party-pattern min-h-screen relative overflow-hidden">
      <StarField />
      
      {/* Floating Game Elements */}
      {getGamePositions(windowSize.width, windowSize.height).map((game, index) => (
        <FloatingGame
          key={index}
          {...game}
          onClick={() => handleGameClick(game.name)}
        />
      ))}

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <motion.header 
          className="relative z-20 p-6 lg:p-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <nav className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <i className="fas fa-party-horn text-white text-xl" />
              </div>
              <span className="text-2xl font-display font-bold gradient-text">
                PartyPlay
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                data-testid="link-about"
              >
                About
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                data-testid="link-games"
              >
                Games
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                data-testid="link-contact"
              >
                Contact
              </a>
            </div>
          </nav>
        </motion.header>

        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Hero Badge */}
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary-foreground backdrop-blur-sm animate-bounce-gentle"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              data-testid="badge-coming-soon"
            >
              <i className="fas fa-rocket mr-2" />
              Coming Soon
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              className="text-5xl lg:text-7xl font-display font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              data-testid="heading-main"
            >
              <span className="gradient-text">Epic Party Games</span>
              <br />
              <span className="text-foreground">That Break The Ice! 🎉</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              data-testid="text-subtitle"
            >
              🔥 Ready to turn your gathering into the BEST party ever? From hilarious icebreakers to mind-bending mysteries, we've got every game that makes parties legendary! 🚀
            </motion.p>

            {/* Features List */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-xl p-6 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 hover:scale-105" data-testid="feature-multiplayer">
                <div className="text-3xl mb-3">🎭</div>
                <h3 className="font-bold text-purple-200 mb-2">Epic Group Fun</h3>
                <p className="text-sm text-purple-100/80">2-20+ players! Perfect for small hangouts or massive parties</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-400/30 rounded-xl p-6 hover:from-orange-500/30 hover:to-red-500/30 transition-all duration-300 hover:scale-105" data-testid="feature-classic-games">
                <div className="text-3xl mb-3">🔥</div>
                <h3 className="font-bold text-orange-200 mb-2">Instant Icebreakers</h3>
                <p className="text-sm text-orange-100/80">Games that get everyone laughing within 60 seconds!</p>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-400/30 rounded-xl p-6 hover:from-green-500/30 hover:to-blue-500/30 transition-all duration-300 hover:scale-105" data-testid="feature-any-device">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="font-bold text-green-200 mb-2">No Setup Required</h3>
                <p className="text-sm text-green-100/80">Just open, pick a game, and the party starts NOW!</p>
              </div>
            </motion.div>

            {/* Email Signup */}
            <motion.div 
              className="max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email for early access"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-ring"
                  data-testid="input-email"
                />
                <Button
                  type="submit"
                  className={`glow-button px-8 py-4 font-bold text-lg transition-all duration-200 transform hover:scale-105 active:scale-95 ${
                    isSubscribed
                      ? "bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg shadow-green-500/50"
                      : "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 shadow-xl shadow-purple-500/50"
                  }`}
                  disabled={isSubscribed}
                  data-testid="button-notify"
                >
                  <i className={`${isSubscribed ? "fas fa-party-horn" : "fas fa-rocket"} mr-2`} />
                  {isSubscribed ? "You're In! 🎉" : "Get Party Ready! 🚀"}
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-3" data-testid="text-email-disclaimer">
                🎈 Join 10,000+ party hosts waiting for launch! No spam, just epic party alerts! 🎈
              </p>
            </motion.div>

            {/* Social Media Links */}
            <motion.div 
              className="flex justify-center space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <a
                href="#"
                className="w-12 h-12 bg-card/50 backdrop-blur-sm border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-200 hover:scale-110"
                data-testid="link-twitter"
              >
                <i className="fab fa-twitter text-lg" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-card/50 backdrop-blur-sm border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:text-secondary hover:bg-secondary/10 hover:border-secondary/30 transition-all duration-200 hover:scale-110"
                data-testid="link-instagram"
              >
                <i className="fab fa-instagram text-lg" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-card/50 backdrop-blur-sm border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 hover:border-accent/30 transition-all duration-200 hover:scale-110"
                data-testid="link-discord"
              >
                <i className="fab fa-discord text-lg" />
              </a>
            </motion.div>
          </div>
        </main>

        {/* Footer */}
        <motion.footer 
          className="relative z-20 p-6 lg:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-muted-foreground text-sm" data-testid="text-copyright">
              © 2024 PartyPlay. Made with <i className="fas fa-heart text-red-500" /> for party enthusiasts everywhere.
            </p>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
