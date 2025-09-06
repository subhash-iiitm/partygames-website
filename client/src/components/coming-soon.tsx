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
            {/* Hero Badge - Enhanced with urgency and social proof */}
            <motion.div 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 border border-pink-400/30 rounded-full text-sm font-bold backdrop-blur-sm animate-bounce-gentle party-glow"
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
              className="text-4xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              data-testid="heading-main"
            >
              <span className="gradient-text">Turn Any Gathering Into</span>
              <br />
              <span className="text-foreground">An Unforgettable Party! 🎉</span>
            </motion.h1>

            {/* Subtitle - More compelling and benefit-focused */}
            <motion.div className="space-y-4">
              <motion.p 
                className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                data-testid="text-subtitle"
              >
                <strong className="text-foreground">The #1 Platform</strong> for instant party games that get everyone laughing within 60 seconds. No awkward silences, no boring moments - just pure fun!
              </motion.p>
              
              {/* Free USP Highlight */}
              <motion.div 
                className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✨</span>
                  <span className="font-semibold text-green-300">100% FREE Forever</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">🚫</span>
                  <span>No Ads, No Subscriptions</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">🎉</span>
                  <span>Pure Entertainment</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Features Section */}
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-xl p-6 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 hover:scale-105 group" data-testid="feature-multiplayer">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎭</div>
                  <h3 className="font-bold text-purple-200 mb-3 text-lg">Works For Any Group Size</h3>
                  <p className="text-sm text-purple-100/80 leading-relaxed">From intimate gatherings of 2 to massive parties of 50+. Our games scale perfectly with your crowd!</p>
                  <div className="mt-3 text-xs text-purple-200/60">✓ 2-50+ players ✓ All ages ✓ Any occasion</div>
                </div>
                <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-400/30 rounded-xl p-6 hover:from-orange-500/30 hover:to-red-500/30 transition-all duration-300 hover:scale-105 group" data-testid="feature-classic-games">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚡</div>
                  <h3 className="font-bold text-orange-200 mb-3 text-lg">Instant Fun Guarantee</h3>
                  <p className="text-sm text-orange-100/80 leading-relaxed">No awkward warm-up time. Our games get everyone laughing and engaged within the first minute!</p>
                  <div className="mt-3 text-xs text-orange-200/60">✓ 60-second setup ✓ Zero learning curve ✓ Instant engagement</div>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-400/30 rounded-xl p-6 hover:from-green-500/30 hover:to-blue-500/30 transition-all duration-300 hover:scale-105 group" data-testid="feature-any-device">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
                  <h3 className="font-bold text-green-200 mb-3 text-lg">Zero Setup Hassle</h3>
                  <p className="text-sm text-green-100/80 leading-relaxed">Just share a link and you're ready! No downloads, no cards, no prep work. Pure instant entertainment.</p>
                  <div className="mt-3 text-xs text-green-200/60">✓ Web-based ✓ Any device ✓ Share via link</div>
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
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 items-stretch">
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
                  className={`glow-button px-6 sm:px-8 py-4 font-bold text-sm sm:text-base whitespace-nowrap transition-all duration-200 transform hover:scale-105 active:scale-95 min-w-[140px] sm:min-w-[160px] ${
                    isSubscribed
                      ? "bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg shadow-green-500/50"
                      : "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 shadow-xl shadow-purple-500/50"
                  }`}
                  disabled={isSubscribed}
                  data-testid="button-notify"
                >
                  <i className={`${isSubscribed ? "fas fa-party-horn" : "fas fa-rocket"} mr-2`} />
                  {isSubscribed ? "You're In! 🎉" : "Join Now! 🚀"}
                </Button>
              </form>
              <div className="mt-4 space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-email-disclaimer">
                  🎈 <strong className="text-foreground">Be the first to know</strong> when we launch! Get exclusive early access to our completely free party games platform.
                </p>
                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-400/20 rounded-lg p-3">
                  <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><span className="text-green-400">✓</span> First Access to New Games</span>
                    <span className="flex items-center gap-1"><span className="text-green-400">✓</span> Behind-the-Scenes Updates</span>
                    <span className="flex items-center gap-1"><span className="text-green-400">✓</span> Community Input on Features</span>
                  </div>
                  <p className="text-xs text-center text-muted-foreground/70 mt-2">No spam, unsubscribe anytime. We respect your inbox! 💝</p>
                </div>
              </div>
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
              © 2025 Party Games. Made with ❤️ and lots of 🍾 for epic party hosts everywhere! 🎆
            </p>
          </div>
        </motion.footer>
      </div>

      {/* Floating Game Cards */}
      <FloatingGame
        name="Codenames"
        description="Secret agents, hidden identities, and mind-bending word clues!"
        icon="🕵️"
        gradientFrom="#8B5CF6"
        gradientTo="#EC4899"
        textColor="text-purple-200"
        iconColor="text-purple-300"
        initialPosition={{ x: 100, y: 200 }}
        size={{ width: "280px", height: "200px" }}
        animationDelay={0}
        animationType="slow"
        onClick={() => {}}
      />
      
      <FloatingGame
        name="Social Humor"
        description="Laugh until your sides hurt with ridiculous scenarios!"
        icon="😂"
        gradientFrom="#F97316"
        gradientTo="#EF4444"
        textColor="text-orange-200"
        iconColor="text-orange-300"
        initialPosition={{ x: 800, y: 300 }}
        size={{ width: "260px", height: "180px" }}
        animationDelay={1}
        animationType="medium"
        onClick={() => {}}
      />
      
      <FloatingGame
        name="Tambola Bingo"
        description="The classic party favorite with a digital twist!"
        icon="🎯"
        gradientFrom="#06B6D4"
        gradientTo="#3B82F6"
        textColor="text-cyan-200"
        iconColor="text-cyan-300"
        initialPosition={{ x: 200, y: 500 }}
        size={{ width: "240px", height: "160px" }}
        animationDelay={2}
        animationType="fast"
        onClick={() => {}}
      />
      
      <FloatingGame
        name="Movie Madness"
        description="Guess movies from hilarious clues and acting!"
        icon="🎬"
        gradientFrom="#10B981"
        gradientTo="#059669"
        textColor="text-green-200"
        iconColor="text-green-300"
        initialPosition={{ x: 900, y: 150 }}
        size={{ width: "270px", height: "190px" }}
        animationDelay={0.5}
        animationType="slow"
        onClick={() => {}}
      />
      
      <FloatingGame
        name="Party Charades"
        description="Act it out and make everyone guess in this classic!"
        icon="🎭"
        gradientFrom="#8B5CF6"
        gradientTo="#A855F7"
        textColor="text-violet-200"
        iconColor="text-violet-300"
        initialPosition={{ x: 50, y: 600 }}
        size={{ width: "250px", height: "170px" }}
        animationDelay={1.5}
        animationType="medium"
        onClick={() => {}}
      />
    </div>
  );
}
