import { Link } from "wouter";
import { Download, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useDownloadApp } from "@/hooks/use-download-app";
import { IOSComingSoonDialog } from "./ios-coming-soon-dialog";
import logo from "../assets/party-games-logo.svg";

export function NavBar() {
  const { handleDownload, showIOSDialog, setShowIOSDialog, isDownloading } = useDownloadApp();

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-purple-500/20 shadow-lg shadow-purple-900/10"
      style={{ backgroundColor: 'hsl(237, 22%, 7%)' }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}  
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo + Party Games */}
          <Link href="/" className="flex items-center gap-3 group hover:opacity-90 transition-all">
            <img 
              src={logo} 
              alt="Party Games Logo" 
              className="h-12 w-auto"
            />
            <span className="text-lg font-semibold font-display gradient-text">
              Party Games
            </span>
          </Link>
          
          {/* Right: Download App CTA */}
          <Button
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold gap-2 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 border border-purple-400/30 hover:border-purple-400/50 glow-button"
            onClick={handleDownload}
            disabled={isDownloading}
          >
            {isDownloading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Download className="h-4 w-4" />
            )}
            {isDownloading ? "Downloading..." : "Download App"}
          </Button>
        </div>
      </div>

      {/* iOS Coming Soon Dialog */}
      <IOSComingSoonDialog open={showIOSDialog} onOpenChange={setShowIOSDialog} />
    </motion.nav>
  );
}

