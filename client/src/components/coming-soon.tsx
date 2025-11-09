import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Confetti } from "./confetti";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Footer } from "./footer";
import logo from "../assets/party-games-logo.svg";

// Declare dataLayer for Google Tag Manager
declare global {
  interface Window {
    dataLayer: any[];
  }
}


export function ComingSoon() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

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
    <div className="min-h-screen relative overflow-auto bg-gradient-to-br from-background via-background to-purple-950/20">
      <Confetti />

      <div className="relative z-10 min-h-screen flex flex-col">

        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-6 lg:px-8 py-16 relative z-20">
          <div className="max-w-3xl mx-auto text-center space-y-10">
            {/* Hero Badge */}
            <motion.div 
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
              }}
              transition={{ 
                duration: 0.6,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              data-testid="badge-coming-soon"
            >
              <motion.span 
                className="gradient-text font-display text-xl font-bold tracking-wide"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                COMING SOON
              </motion.span>
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex justify-center"
            >
              <img 
                src={logo} 
                alt="Party Games Logo" 
                className="h-24 lg:h-32 xl:h-40 w-auto"
              />
            </motion.div>

            {/* Main Headline - Clean & Professional */}
            <motion.h1 
              className="text-5xl lg:text-7xl xl:text-8xl font-display font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              data-testid="heading-main"
            >
              <span className="gradient-text">Party Games.</span>
              <br />
              <span className="text-foreground">Instantly Fun.</span>
            </motion.h1>

            {/* Subtitle - Clear Benefit */}
            <motion.p 
              className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              data-testid="text-subtitle"
            >
              Multiplayer games for any group, any occasion.{" "}
              <div className="inline-flex items-center gap-2">
              <span className="text-green-400 font-semibold"> &nbsp;100% Free&nbsp;</span>
              <span>&</span>
              <span className="text-blue-400 font-semibold">&nbsp;No Ads</span>.
              </div>            
            </motion.p>

            {/* Email Signup - Clean & Professional */}
            <motion.div 
              className="max-w-lg mx-auto mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 text-base bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary"
                  data-testid="input-email"
                />
                <Button
                  type="submit"
                  className={`h-12 px-8 text-base font-semibold transition-all ${
                    isSubscribed
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  }`}
                  disabled={isSubscribed}
                  data-testid="button-notify"
                >
                  {isSubscribed ? "✓ Subscribed" : "Notify Me"}
                </Button>
              </form>
              
              <p className="mt-3 text-sm text-muted-foreground" data-testid="text-email-disclaimer">
                Be the first to play when we launch. No spam, ever.
              </p>
            </motion.div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>

    </div>
  );
}
