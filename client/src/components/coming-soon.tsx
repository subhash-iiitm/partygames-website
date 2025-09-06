import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { StarField } from "./star-field";
import { Confetti } from "./confetti";
import { PartyLights } from "./party-lights";
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

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <motion.header 
          className="relative z-20 p-6 lg:p-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <nav className="max-w-7xl mx-auto flex justify-center items-center">
            <span className="text-3xl font-display font-bold gradient-text">
              🎉 Party Games 🎉
            </span>
          </nav>
        </motion.header>

        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Hero Badge */}
            <motion.div 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 border border-pink-400/30 rounded-full text-sm font-bold backdrop-blur-sm animate-bounce-gentle party-glow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              data-testid="badge-coming-soon"
            >
              <span className="text-2xl mr-2">🎉</span>
              <span className="gradient-text font-display">LAUNCHING SOON</span>
              <span className="text-2xl ml-2">🎉</span>
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

            {/* Features Section */}
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  placeholder="📧 Enter your email for early party access"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 min-w-[320px] bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-ring"
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
              © 2024 Party Games. Made with 🖤 and lots of 🍾 for epic party hosts everywhere! 🎆
            </p>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
