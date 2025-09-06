import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { StarField } from "./star-field";
import { Confetti } from "./confetti";
import { PartyLights } from "./party-lights";
import { FloatingGame } from "./floating-game";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

// Declare dataLayer for Google Tag Manager
declare global {
  interface Window {
    dataLayer: any[];
  }
}


export function ComingSoon() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { toast } = useToast();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Track page view on component mount
  useEffect(() => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_title: 'Party Games - Coming Soon',
        page_location: window.location.href,
        page_path: window.location.pathname
      });
    }
  }, []);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubscribed(true);
        setEmail("");
        
        // Track successful subscription with GTM
        if (typeof window !== 'undefined' && window.dataLayer) {
          window.dataLayer.push({
            event: 'email_subscription',
            email_domain: email.split('@')[1],
            subscription_status: 'success'
          });
        }
        
        toast({
          title: "Successfully subscribed!",
          description: data.message || "We'll notify you when Party Games launches.",
        });
        
        setTimeout(() => {
          setIsSubscribed(false);
        }, 3000);
      } else {
        // Track failed subscription with GTM
        if (typeof window !== 'undefined' && window.dataLayer) {
          window.dataLayer.push({
            event: 'email_subscription',
            subscription_status: 'error',
            error_message: data.error
          });
        }
        
        toast({
          title: data.error || "Subscription failed",
          description: data.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Subscription error:", error);
      
      // Track network error with GTM
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'email_subscription',
          subscription_status: 'network_error'
        });
      }
      
      toast({
        title: "Network error",
        description: "Unable to connect. Please check your internet and try again.",
        variant: "destructive",
      });
    }
  };


  return (
    <div className="party-pattern min-h-screen relative overflow-auto">
      <PartyLights />
      <StarField />
      <Confetti />
      
      {/* Floating Party Emojis */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(8)].map((_, i) => {
          const positions = [
            { x: [100, 200, 300], y: [100, 150, 200] },
            { x: [800, 900, 1000], y: [200, 250, 300] },
            { x: [300, 400, 500], y: [400, 450, 500] },
            { x: [600, 700, 800], y: [100, 150, 200] },
            { x: [150, 250, 350], y: [300, 350, 400] },
            { x: [700, 800, 900], y: [400, 450, 500] },
            { x: [400, 500, 600], y: [150, 200, 250] },
            { x: [200, 300, 400], y: [500, 550, 600] }
          ];
          
          return (
            <motion.div
              key={i}
              className="absolute text-4xl opacity-60"
              initial={{ 
                x: positions[i].x[0],
                y: positions[i].y[0],
                rotate: 0 
              }}
              animate={{ 
                x: positions[i].x,
                y: positions[i].y,
                rotate: [0, 360, 720]
              }}
              transition={{
                duration: 12 + Math.random() * 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8
              }}
            >
              {['🎉', '🎊', '🎈', '🍾', '🌟', '💫', '✨', '🔥'][i]}
            </motion.div>
          );
        })}
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <motion.header 
          className="relative z-20 p-6 lg:p-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <nav className="max-w-7xl mx-auto flex justify-center items-center">
            <motion.span 
              className="text-3xl font-display font-bold gradient-text cursor-pointer"
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.5 }
              }}
              onClick={() => console.log("🎉 PARTY GAMES! 🎉")}
            >
              🎉 Party Games 🎉
            </motion.span>
          </nav>
        </motion.header>

        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Hero Badge - Enhanced with urgency and social proof */}
            <motion.div 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 border border-pink-400/30 rounded-full text-sm font-bold backdrop-blur-sm bounce-gentle party-glow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              data-testid="badge-coming-soon"
            >
              <span className="text-2xl mr-2">🚀</span>
              <span className="gradient-text font-display">COMING SOON</span>
              <span className="text-2xl ml-2">🔥</span>
            </motion.div>

            {/* Main Headline - Enhanced value prop */}
            <motion.h1 
              className="text-4xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              whileTap={{ 
                scale: 0.95,
                rotate: [0, -1, 1, 0],
                transition: { duration: 0.2 }
              }}
              onClick={() => {
                // Add confetti burst effect on click
                console.log("🎉 PARTY VIBES ACTIVATED! 🎉");
              }}
              data-testid="heading-main"
            >
              <span className="gradient-text hover:animate-pulse">Turn Any Gathering Into</span>
              <br />
              <span className="text-foreground hover:text-yellow-300 transition-colors duration-300">An Unforgettable Party! 🎉</span>
            </motion.h1>

            {/* Subtitle - Simplified */}
            <motion.div className="space-y-6">
              <motion.p 
                className="text-2xl lg:text-3xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                data-testid="text-subtitle"
              >
                🚀 <span className="gradient-text">Instant Party Games</span> 🎮
                <br />
                <span className="text-xl text-yellow-300">60 Seconds to Pure Fun!</span>
              </motion.p>
              
              {/* Simple Benefits */}
              <motion.div 
                className="flex justify-center items-center gap-8 text-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="animate-bounce" style={{ animationDelay: '0s' }}>✨</div>
                <div className="animate-bounce" style={{ animationDelay: '0.2s' }}>🎉</div>
                <div className="animate-bounce" style={{ animationDelay: '0.4s' }}>🎮</div>
                <div className="animate-bounce" style={{ animationDelay: '0.6s' }}>🎭</div>
                <div className="animate-bounce" style={{ animationDelay: '0.8s' }}>🎯</div>
              </motion.div>
            </motion.div>

            {/* Fun Graphics - More Visual, Less Text */}
            <motion.div 
              className="flex justify-center items-center gap-12 my-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div 
                className="text-8xl cursor-pointer"
                whileHover={{ scale: 1.3, rotate: 360 }}
                transition={{ duration: 0.5 }}
                onClick={() => console.log("🎭 Party vibes!")}
              >
                🎭
              </motion.div>
              
              <motion.div 
                className="text-8xl cursor-pointer"
                whileHover={{ scale: 1.3, rotate: -360 }}
                transition={{ duration: 0.5 }}
                onClick={() => console.log("⚡ Lightning fun!")}
              >
                ⚡
              </motion.div>
              
              <motion.div 
                className="text-8xl cursor-pointer"
                whileHover={{ scale: 1.3, rotate: 180 }}
                transition={{ duration: 0.5 }}
                onClick={() => console.log("🚀 Rocket party!")}
              >
                🚀
              </motion.div>
            </motion.div>

            {/* Email Signup */}
            <motion.div 
              className="max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 items-stretch">
                <Input
                  type="email"
                  placeholder="🎉 Your email = Party invite!"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 min-w-[320px] bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-ring"
                  data-testid="input-email"
                />
                <Button
                  type="submit"
                  className={`glow-button px-6 sm:px-8 py-4 font-bold text-sm sm:text-base whitespace-nowrap transition-all duration-200 transform hover:scale-105 active:scale-95 min-w-[140px] sm:min-w-[160px] ${
                    isSubscribed
                      ? "bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg shadow-green-500/50"
                      : "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 shadow-xl shadow-purple-500/50"
                  }`}
                  disabled={isSubscribed}
                  data-testid="button-notify"
                >
                  <i className={`${isSubscribed ? "fas fa-party-horn" : "fas fa-rocket"} mr-2`} />
                  {isSubscribed ? "PARTY TIME! 🥳🎊" : "GET ME TO THE PARTY! 🎉🚀"}
                </Button>
              </form>
              <div className="mt-4">
                <motion.p 
                  className="text-lg text-yellow-300 font-bold" 
                  data-testid="text-email-disclaimer"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    color: ['#FDE047', '#F59E0B', '#FDE047']
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🎈 First to Party = First to Play! 🎊
                </motion.p>
              </div>
            </motion.div>

            {/* Social Media Links */}
            <motion.div 
              className="flex justify-center space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-xl flex items-center justify-center text-blue-300 hover:text-blue-200 hover:bg-blue-500/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-125 active:scale-95"
                data-testid="link-twitter"
                whileHover={{ 
                  rotate: [0, -10, 10, -5, 0],
                  transition: { duration: 0.5 }
                }}
                onClick={(e) => {
                  e.preventDefault();
                  // Add fun click effect
                }}
              >
                <i className="fab fa-twitter text-lg" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75" />
              </motion.a>
              <motion.a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-pink-500/20 to-orange-500/20 backdrop-blur-sm border border-pink-400/30 rounded-xl flex items-center justify-center text-pink-300 hover:text-pink-200 hover:bg-pink-500/30 hover:border-pink-400/60 transition-all duration-300 hover:scale-125 active:scale-95"
                data-testid="link-instagram"
                whileHover={{ 
                  rotate: [0, 15, -10, 5, 0],
                  transition: { duration: 0.6 }
                }}
                onClick={(e) => {
                  e.preventDefault();
                  // Add fun click effect
                }}
              >
                <i className="fab fa-instagram text-lg" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-bounce" />
              </motion.a>
              <motion.a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-sm border border-purple-400/30 rounded-xl flex items-center justify-center text-purple-300 hover:text-purple-200 hover:bg-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-125 active:scale-95"
                data-testid="link-discord"
                whileHover={{ 
                  scale: [1, 1.2, 0.9, 1.1, 1],
                  transition: { duration: 0.8 }
                }}
                onClick={(e) => {
                  e.preventDefault();
                  // Add fun click effect
                }}
              >
                <i className="fab fa-discord text-lg" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-pulse" />
              </motion.a>
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
              © 2025 Party Games. Made with ❤️ and lots of 🍾 for epic party hosts everywhere! 🎆
            </p>
          </div>
        </motion.footer>
      </div>

    </div>
  );
}
