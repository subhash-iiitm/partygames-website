import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface IOSComingSoonDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function IOSComingSoonDialog({ open, onOpenChange }: IOSComingSoonDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 border-purple-500/30 text-white max-w-md">
        <DialogHeader className="text-center space-y-4">
          <div className="flex justify-center mb-2">
            <div className="relative">
              <Sparkles className="h-16 w-16 text-purple-400 animate-pulse" />
              <motion.div
                className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
          <DialogTitle className="text-3xl font-bold gradient-text text-center">
            Coming Soon!
          </DialogTitle>
          <DialogDescription className="text-gray-300 text-center text-base space-y-2">
            <p>
              We're working hard to bring Party Games to iOS. Stay tuned for updates!
            </p>
            <p className="text-sm text-purple-300 mt-4">
              In the meantime, you can enjoy Party Games on Android.
            </p>
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center mt-6">
          <Button
            onClick={() => onOpenChange(false)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold px-8"
          >
            Got it!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

