import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { StarField } from "./star-field";
import { Confetti } from "./confetti";
import { PartyLights } from "./party-lights";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";


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

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email && email.includes("@")) {
      setIsSubscribed(true);
      setEmail("");
      toast({
        title: "Successfully subscribed!",
        description: "We'll notify you when Party Games launches.",
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
    <div className="party-pattern h-screen relative overflow-hidden">
      <PartyLights />
      <StarField />
      <Confetti />

      <div className="relative z-10 h-screen flex flex-col">
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

            {/* Games Preview Grid */}
            <motion.div 
              className="max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-2xl font-display font-bold text-center mb-6 gradient-text">
                🎯 Desi Games for Every Celebration! 🎯
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { name: "Teen Patti", emoji: "🃏", color: "from-orange-400 to-red-600", shadow: "orange", desc: "Classic 3-card game" },
                  { name: "Indian Rummy", emoji: "🎴", color: "from-green-400 to-emerald-600", shadow: "green", desc: "13-card sequence" },
                  { name: "Antakshari", emoji: "🎵", color: "from-purple-400 to-indigo-600", shadow: "purple", desc: "Musical word chain" },
                  { name: "Dumb Charades", emoji: "🎭", color: "from-blue-400 to-cyan-600", shadow: "blue", desc: "Act Bollywood films" },
                  { name: "Truth or Dare", emoji: "💥", color: "from-red-400 to-pink-600", shadow: "red", desc: "Spicy party fun" },
                  { name: "Andar Bahar", emoji: "🎯", color: "from-yellow-400 to-orange-600", shadow: "yellow", desc: "Lucky card game" },
                  { name: "Call Break", emoji: "♠️", color: "from-violet-400 to-purple-600", shadow: "violet", desc: "Trick-taking game" },
                  { name: "Name-Place-Thing", emoji: "📝", color: "from-teal-400 to-green-600", shadow: "teal", desc: "Quick thinking" },
                ].map((game, index) => (
                  <motion.div
                    key={game.name}
                    className="group relative bg-white/10 backdrop-blur-md border border-orange-300/40 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 cursor-pointer hover:bg-white/15"
                    style={{
                      background: `linear-gradient(135deg, rgba(255,215,0,0.15) 0%, rgba(255,255,255,0.08) 100%)`,
                      boxShadow: '0 8px 24px rgba(255,140,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2)',
                      border: '1px solid rgba(255,165,0,0.4)',
                    }}
                    whileHover={{ 
                      y: -8,
                      boxShadow: `0 20px 40px rgba(${game.shadow === 'purple' ? '139,92,246' : game.shadow === 'red' ? '239,68,68' : game.shadow === 'green' ? '34,197,94' : game.shadow === 'orange' ? '249,115,22' : game.shadow === 'yellow' ? '234,179,8' : game.shadow === 'violet' ? '139,92,246' : game.shadow === 'blue' ? '59,130,246' : '20,184,166'},0.4)`,
                    }}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                    onClick={() => handleGameClick(game.name)}
                    data-testid={`game-${game.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                         style={{
                           background: `linear-gradient(135deg, ${game.color.includes('purple') ? 'rgba(139,92,246,0.2)' : game.color.includes('red') ? 'rgba(239,68,68,0.2)' : game.color.includes('green') ? 'rgba(34,197,94,0.2)' : game.color.includes('orange') ? 'rgba(249,115,22,0.2)' : game.color.includes('yellow') ? 'rgba(234,179,8,0.2)' : game.color.includes('violet') ? 'rgba(139,92,246,0.2)' : game.color.includes('blue') ? 'rgba(59,130,246,0.2)' : 'rgba(20,184,166,0.2)'} 0%, transparent 100%)`
                         }}
                    />
                    <div className="relative z-10">
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{game.emoji}</div>
                      <div className="text-xs font-bold text-white group-hover:text-white/90 transition-colors duration-300 mb-1">{game.name}</div>
                      <div className="text-xs text-orange-100/80 group-hover:text-orange-100 transition-colors duration-300">{game.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-400/30 rounded-xl p-4 hover:from-orange-500/30 hover:to-red-500/30 transition-all duration-300 hover:scale-105" data-testid="feature-multiplayer">
                  <div className="text-2xl mb-2">🪔</div>
                  <h3 className="font-bold text-orange-200 mb-1 text-sm">Festival Ready</h3>
                  <p className="text-xs text-orange-100/80">Perfect for Diwali, weddings, and family gatherings!</p>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-xl p-4 hover:from-green-500/30 hover:to-emerald-500/30 transition-all duration-300 hover:scale-105" data-testid="feature-classic-games">
                  <div className="text-2xl mb-2">🎯</div>
                  <h3 className="font-bold text-green-200 mb-1 text-sm">Desi Games</h3>
                  <p className="text-xs text-green-100/80">Traditional Indian games everyone knows and loves!</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-xl p-4 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 hover:scale-105" data-testid="feature-any-device">
                  <div className="text-2xl mb-2">📱</div>
                  <h3 className="font-bold text-purple-200 mb-1 text-sm">Easy & Quick</h3>
                  <p className="text-xs text-purple-100/80">Hindi & English support, works on any phone!</p>
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
